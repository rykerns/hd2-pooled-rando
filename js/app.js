import { POOLS } from './pools.js';
import { generateLoadout } from './randomizer.js';

let currentPool = null;

function init() {
    renderPoolSelector();
    document.getElementById('randomize-btn').addEventListener('click', onRandomize);
}

function renderPoolSelector() {
    const container = document.getElementById('pool-grid');
    container.innerHTML = '';

    for (const [poolId, pool] of Object.entries(POOLS)) {
        const card = document.createElement('button');
        card.className = 'pool-card';
        card.dataset.poolId = poolId;
        card.innerHTML = `
            <span class="pool-icon">${pool.icon}</span>
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

    document.querySelectorAll('.pool-card').forEach(c =>
        c.classList.toggle('selected', c.dataset.poolId === poolId)
    );

    const btn = document.getElementById('randomize-btn');
    btn.disabled = false;
    btn.classList.add('ready');

    // Auto-generate on first selection
    onRandomize();
}

function onRandomize() {
    if (!currentPool) return;

    const pool = POOLS[currentPool];
    const loadout = generateLoadout(pool);
    renderLoadout(loadout, pool);

    // Trigger animation
    const display = document.getElementById('loadout-display');
    display.classList.remove('hidden');
    display.classList.remove('deploy-anim');
    void display.offsetWidth; // force reflow
    display.classList.add('deploy-anim');
}

function renderLoadout(loadout, pool) {
    document.getElementById('loadout-pool-name').textContent =
        `${pool.icon} ${pool.display_name} LOADOUT`;

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

document.addEventListener('DOMContentLoaded', init);
