import { POOLS } from './pools.js';
import { generateLoadout } from './randomizer.js';
import * as collection from './collection.js';

let currentPool = null;
let chaosMode = false;
let currentDifficulty = 'recruit';
let poolWarningDebounce = null;

const DIFFICULTY_DESCRIPTIONS = {
    recruit: 'Max 1 support weapon, 1 backpack & 1 expendable.',
    helldiver: 'Max 1 support weapon & 1 backpack. Expendables unrestricted.',
    legend: 'No restrictions. Pure chaos.',
    nightmare: 'Equipment only. No call-downs. Good luck, Helldiver.',
};

// ═══════════ INIT ═══════════

function init() {
    collection.load();
    renderPoolSelector();
    updatePoolWarnings();
    updateCollectionBadge();

    document.getElementById('randomize-btn').addEventListener('click', onRandomize);
    document.getElementById('chaos-btn').addEventListener('click', onChaos);
    document.getElementById('collection-btn').addEventListener('click', openCollectionModal);

    // Difficulty selector
    document.querySelectorAll('.diff-btn').forEach(btn => {
        btn.addEventListener('click', () => selectDifficulty(btn.dataset.difficulty));
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCollectionModal();
    });
}

// ═══════════ POOL SELECTOR ═══════════

function renderPoolSelector() {
    const container = document.getElementById('pool-grid');
    container.innerHTML = '';

    for (const [poolId, pool] of Object.entries(POOLS)) {
        const card = document.createElement('button');
        card.className = 'pool-card';
        card.dataset.poolId = poolId;
        card.style.setProperty('--pool-color', pool.color);
        card.innerHTML = `
            <div class="pool-info">
                <h3 class="pool-name">${pool.display_name}</h3>
                <p class="pool-desc">${pool.description}</p>
            </div>
        `;
        card.addEventListener('click', () => selectPool(poolId));
        container.appendChild(card);
    }
}

function selectPool(poolId) {
    currentPool = poolId;
    chaosMode = false;

    document.querySelectorAll('.pool-card').forEach(c =>
        c.classList.toggle('selected', c.dataset.poolId === poolId)
    );
    document.getElementById('chaos-btn').classList.remove('active');
    document.body.classList.remove('chaos-active');

    const btn = document.getElementById('randomize-btn');
    btn.disabled = false;
    btn.classList.add('ready');

    // Auto-generate on first selection
    onRandomize();
}

// ═══════════ DIFFICULTY ═══════════

function selectDifficulty(diff) {
    currentDifficulty = diff;

    document.querySelectorAll('.diff-btn').forEach(b =>
        b.classList.toggle('active', b.dataset.difficulty === diff)
    );

    document.getElementById('difficulty-desc').textContent =
        DIFFICULTY_DESCRIPTIONS[diff] || '';
}

// ═══════════ RANDOMIZE ═══════════

function onChaos() {
    chaosMode = true;
    currentPool = null;

    // Deselect any pool card
    document.querySelectorAll('.pool-card').forEach(c => c.classList.remove('selected'));
    document.getElementById('chaos-btn').classList.add('active');
    document.body.classList.add('chaos-active');

    const btn = document.getElementById('randomize-btn');
    btn.disabled = false;
    btn.classList.add('ready');

    // Generate immediately
    deployChaos();
}

function deployChaos() {
    const chaosPool = collection.buildChaosPool();
    const loadout = generateLoadout(chaosPool, currentDifficulty);
    renderLoadout(loadout, chaosPool);
    triggerDeployAnimation();
}

function onRandomize() {
    if (chaosMode) {
        deployChaos();
        return;
    }

    if (!currentPool) return;

    const pool = POOLS[currentPool];
    const filteredPool = collection.filterPool(pool);
    const loadout = generateLoadout(filteredPool, currentDifficulty);
    renderLoadout(loadout, pool);
    triggerDeployAnimation();
}

function triggerDeployAnimation() {
    // Hide placeholder, show loadout
    const placeholder = document.getElementById('loadout-placeholder');
    if (placeholder) placeholder.classList.add('hidden');

    const display = document.getElementById('loadout-display');
    display.classList.remove('hidden');
    display.classList.remove('deploy-anim');
    void display.offsetWidth; // force reflow
    display.classList.add('deploy-anim');
}

// ═══════════ LOADOUT DISPLAY ═══════════

function renderLoadout(loadout, pool) {
    document.getElementById('loadout-pool-name').textContent =
        `${pool.display_name} LOADOUT`;

    // Stratagems
    const stratContainer = document.getElementById('stratagem-slots');
    stratContainer.innerHTML = '';
    for (let i = 0; i < 4; i++) {
        const strat = loadout.stratagems[i];
        const slot = document.createElement('div');
        slot.className = 'loadout-slot stratagem-slot';
        if (strat) {
            slot.innerHTML = `
                <span class="slot-label">STRATAGEM ${i + 1}</span>
                <span class="item-name">${strat.display_name}</span>
                <span class="item-category cat-${strat.category}">${formatCategory(strat.category)}</span>
            `;
        } else {
            slot.innerHTML = `
                <span class="slot-label">STRATAGEM ${i + 1}</span>
                <span class="item-name empty">-- EMPTY --</span>
            `;
        }
        stratContainer.appendChild(slot);
    }

    // Weapons
    renderWeaponSlot('primary-slot', 'PRIMARY', loadout.primary);
    renderWeaponSlot('secondary-slot', 'SECONDARY', loadout.secondary);
    renderWeaponSlot('throwable-slot', 'THROWABLE', loadout.throwable);

    // Warnings
    const warningEl = document.getElementById('loadout-warnings');
    if (loadout.warnings.length > 0) {
        warningEl.textContent = loadout.warnings.join(' | ');
        warningEl.classList.remove('hidden');
    } else {
        warningEl.classList.add('hidden');
    }
}

function renderWeaponSlot(elementId, label, item) {
    const el = document.getElementById(elementId);
    if (item) {
        el.innerHTML = `
            <span class="slot-label">${label}</span>
            <span class="item-name">${item.display_name}</span>
            <span class="item-pen pen-${item.pen}">${item.pen.toUpperCase()} PEN</span>
        `;
    } else {
        el.innerHTML = `
            <span class="slot-label">${label}</span>
            <span class="item-name empty">-- NO OPTIONS --</span>
        `;
    }
}

function formatCategory(cat) {
    return cat.replace(/_/g, ' ').toUpperCase();
}

// ═══════════ POOL WARNINGS ═══════════

function updatePoolWarnings() {
    for (const [poolId, pool] of Object.entries(POOLS)) {
        const filtered = collection.filterPool(pool);
        const card = document.querySelector(`[data-pool-id="${poolId}"]`);
        if (!card) continue;
        const hasIssue =
            filtered.stratagems.length < 4 ||
            filtered.primaries.length === 0 ||
            filtered.secondaries.length === 0 ||
            filtered.throwables.length === 0;
        card.classList.toggle('pool-warning', hasIssue);
    }
}

function schedulePoolWarningUpdate() {
    clearTimeout(poolWarningDebounce);
    poolWarningDebounce = setTimeout(updatePoolWarnings, 150);
}

// ═══════════ COLLECTION BADGE ═══════════

function updateCollectionBadge() {
    const btn = document.getElementById('collection-btn');
    const count = collection.getDisabledCount();
    if (count > 0) {
        btn.innerHTML = `MANAGE COLLECTION <span class="badge">(${count} hidden)</span>`;
    } else {
        btn.textContent = 'MANAGE COLLECTION';
    }
}

// ═══════════ COLLECTION MODAL ═══════════

function openCollectionModal() {
    const overlay = document.getElementById('collection-overlay');
    overlay.classList.remove('hidden');
    renderCollectionModal();
    document.body.style.overflow = 'hidden';
}

function closeCollectionModal() {
    const overlay = document.getElementById('collection-overlay');
    if (overlay.classList.contains('hidden')) return;
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
    updateCollectionBadge();
    schedulePoolWarningUpdate();
}

function renderCollectionModal() {
    const overlay = document.getElementById('collection-overlay');
    const warbondGroups = collection.getWarbondGroups();
    const stratagemGroups = collection.getStratagemCategoryGroups();

    // Sort warbond names: "Base" first, then alphabetical
    const warbondNames = Object.keys(warbondGroups).sort((a, b) => {
        if (a === 'Base') return -1;
        if (b === 'Base') return 1;
        if (a === 'Unknown') return 1;
        if (b === 'Unknown') return -1;
        return a.localeCompare(b);
    });

    // Stratagem category order
    const categoryOrder = ['eagle', 'orbital', 'support_weapon', 'backpack', 'defensive', 'vehicle'];

    let html = `
        <div class="collection-modal">
            <div class="collection-header">
                <h2>ARMORY COLLECTION</h2>
                <button class="collection-close" data-action="close">X</button>
            </div>
            <div class="collection-actions">
                <button class="collection-action-btn" data-action="enable-all">ENABLE ALL</button>
                <button class="collection-action-btn" data-action="disable-all">DISABLE ALL</button>
                <button class="collection-action-btn" data-action="reset">RESET</button>
            </div>
            <div class="collection-body">
                <div class="collection-section-divider">WARBONDS</div>
    `;

    // Warbond groups
    for (const wb of warbondNames) {
        const items = warbondGroups[wb];
        const state = collection.getWarbondState(wb);
        const toggleClass = state.enabled === state.total ? 'all-on'
            : state.enabled > 0 ? 'some-on' : '';
        const countClass = state.enabled < state.total ? 'has-disabled' : '';

        html += `
            <div class="collection-group" data-group-type="warbond" data-group-name="${wb}">
                <button class="collection-group-header">
                    <span class="group-arrow">&#9654;</span>
                    <span class="group-toggle ${toggleClass}" data-action="toggle-group">${state.enabled === state.total ? '&#10003;' : state.enabled > 0 ? '&ndash;' : ''}</span>
                    <span class="group-name">${wb}</span>
                    <span class="group-count ${countClass}">(${state.enabled}/${state.total})</span>
                </button>
                <div class="collection-group-items">
        `;

        const slotLabels = { primary: 'PRI', secondary: 'SEC', grenade: 'THR' };
        for (const item of items) {
            const enabled = collection.isItemEnabled(item.id);
            html += `
                <div class="collection-item ${enabled ? '' : 'disabled'}" data-item-id="${item.id}" data-item-type="item">
                    <span class="item-toggle ${enabled ? 'enabled' : ''}">&#10003;</span>
                    <span class="item-label">${item.display_name}</span>
                    <span class="item-slot-badge">${slotLabels[item.slot] || item.slot}</span>
                </div>
            `;
        }

        html += `</div></div>`;
    }

    // Stratagem groups
    html += `<div class="collection-section-divider">STRATAGEMS</div>`;

    for (const cat of categoryOrder) {
        const group = stratagemGroups[cat];
        if (!group) continue;
        const state = collection.getCategoryState(cat);
        const toggleClass = state.enabled === state.total ? 'all-on'
            : state.enabled > 0 ? 'some-on' : '';
        const countClass = state.enabled < state.total ? 'has-disabled' : '';

        html += `
            <div class="collection-group" data-group-type="category" data-group-name="${cat}">
                <button class="collection-group-header">
                    <span class="group-arrow">&#9654;</span>
                    <span class="group-toggle ${toggleClass}" data-action="toggle-group">${state.enabled === state.total ? '&#10003;' : state.enabled > 0 ? '&ndash;' : ''}</span>
                    <span class="group-name">${group.label}</span>
                    <span class="group-count ${countClass}">(${state.enabled}/${state.total})</span>
                </button>
                <div class="collection-group-items">
        `;

        for (const strat of group.items) {
            const enabled = collection.isStratagemEnabled(strat.id);
            html += `
                <div class="collection-item ${enabled ? '' : 'disabled'}" data-item-id="${strat.id}" data-item-type="stratagem">
                    <span class="item-toggle ${enabled ? 'enabled' : ''}">&#10003;</span>
                    <span class="item-label">${strat.display_name}</span>
                </div>
            `;
        }

        html += `</div></div>`;
    }

    html += `</div></div>`;
    overlay.innerHTML = html;

    // Event delegation
    overlay.addEventListener('click', handleCollectionClick);
}

function handleCollectionClick(e) {
    const overlay = document.getElementById('collection-overlay');

    // Close on overlay background click
    if (e.target === overlay) {
        closeCollectionModal();
        return;
    }

    // Close button
    const closeBtn = e.target.closest('[data-action="close"]');
    if (closeBtn) {
        closeCollectionModal();
        return;
    }

    // Enable All
    const enableBtn = e.target.closest('[data-action="enable-all"]');
    if (enableBtn) {
        collection.enableAll();
        renderCollectionModal();
        return;
    }

    // Disable All
    const disableBtn = e.target.closest('[data-action="disable-all"]');
    if (disableBtn) {
        collection.disableAll();
        renderCollectionModal();
        return;
    }

    // Reset
    const resetBtn = e.target.closest('[data-action="reset"]');
    if (resetBtn) {
        collection.enableAll();
        renderCollectionModal();
        return;
    }

    // Group toggle (the checkbox itself)
    const groupToggle = e.target.closest('[data-action="toggle-group"]');
    if (groupToggle) {
        e.stopPropagation();
        const group = groupToggle.closest('.collection-group');
        const type = group.dataset.groupType;
        const name = group.dataset.groupName;

        if (type === 'warbond') {
            const state = collection.getWarbondState(name);
            // If all enabled, disable all. Otherwise enable all.
            collection.setWarbondEnabled(name, state.enabled < state.total);
        } else {
            const state = collection.getCategoryState(name);
            collection.setCategoryEnabled(name, state.enabled < state.total);
        }
        renderCollectionModal();
        return;
    }

    // Group header click (expand/collapse) — but NOT on the toggle
    const header = e.target.closest('.collection-group-header');
    if (header) {
        const group = header.closest('.collection-group');
        group.classList.toggle('expanded');
        return;
    }

    // Individual item toggle
    const itemEl = e.target.closest('.collection-item');
    if (itemEl) {
        const id = itemEl.dataset.itemId;
        const type = itemEl.dataset.itemType;

        if (type === 'item') {
            const nowEnabled = !collection.isItemEnabled(id);
            collection.setItemEnabled(id, nowEnabled);
        } else {
            const nowEnabled = !collection.isStratagemEnabled(id);
            collection.setStratagemEnabled(id, nowEnabled);
        }

        // Update just this item's visual
        const toggle = itemEl.querySelector('.item-toggle');
        const isEnabled = type === 'item' ? collection.isItemEnabled(id) : collection.isStratagemEnabled(id);
        toggle.classList.toggle('enabled', isEnabled);
        itemEl.classList.toggle('disabled', !isEnabled);

        // Update parent group counter
        const group = itemEl.closest('.collection-group');
        updateGroupCounter(group);
        return;
    }
}

function updateGroupCounter(groupEl) {
    const type = groupEl.dataset.groupType;
    const name = groupEl.dataset.groupName;

    let state;
    if (type === 'warbond') {
        state = collection.getWarbondState(name);
    } else {
        state = collection.getCategoryState(name);
    }

    const countEl = groupEl.querySelector('.group-count');
    countEl.textContent = `(${state.enabled}/${state.total})`;
    countEl.classList.toggle('has-disabled', state.enabled < state.total);

    const toggleEl = groupEl.querySelector('.group-toggle');
    toggleEl.className = 'group-toggle';
    if (state.enabled === state.total) {
        toggleEl.classList.add('all-on');
        toggleEl.innerHTML = '&#10003;';
    } else if (state.enabled > 0) {
        toggleEl.classList.add('some-on');
        toggleEl.innerHTML = '&ndash;';
    } else {
        toggleEl.innerHTML = '';
    }
}

// ═══════════ START ═══════════

document.addEventListener('DOMContentLoaded', init);
