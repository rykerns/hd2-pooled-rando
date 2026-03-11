import { ITEM_META } from './items.js';
import { STRATAGEM_META } from './stratagems.js';

const STORAGE_KEY = 'hd2r_disabled_items';

let disabledItems = new Set();
let disabledStratagems = new Set();

// ═══════════ Persistence ═══════════

export function load() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const data = JSON.parse(raw);
            disabledItems = new Set(data.items || []);
            disabledStratagems = new Set(data.stratagems || []);
        }
    } catch (e) {
        console.warn('Failed to load collection settings:', e);
    }
}

export function save() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            items: [...disabledItems],
            stratagems: [...disabledStratagems],
        }));
    } catch (e) {
        console.warn('Failed to save collection settings:', e);
    }
}

// ═══════════ Item Toggles ═══════════

export function isItemEnabled(id) {
    return !disabledItems.has(id);
}

export function isStratagemEnabled(id) {
    return !disabledStratagems.has(id);
}

export function setItemEnabled(id, enabled) {
    if (enabled) {
        disabledItems.delete(id);
    } else {
        disabledItems.add(id);
    }
    save();
}

export function setStratagemEnabled(id, enabled) {
    if (enabled) {
        disabledStratagems.delete(id);
    } else {
        disabledStratagems.add(id);
    }
    save();
}

// ═══════════ Bulk Toggles ═══════════

export function setWarbondEnabled(warbondName, enabled) {
    for (const [id, meta] of Object.entries(ITEM_META)) {
        if (meta.warbond === warbondName) {
            if (enabled) {
                disabledItems.delete(id);
            } else {
                disabledItems.add(id);
            }
        }
    }
    save();
}

export function setCategoryEnabled(categoryName, enabled) {
    for (const [id, meta] of Object.entries(STRATAGEM_META)) {
        if (meta.category === categoryName) {
            if (enabled) {
                disabledStratagems.delete(id);
            } else {
                disabledStratagems.add(id);
            }
        }
    }
    save();
}

export function enableAll() {
    disabledItems.clear();
    disabledStratagems.clear();
    save();
}

export function disableAll() {
    for (const id of Object.keys(ITEM_META)) {
        disabledItems.add(id);
    }
    for (const id of Object.keys(STRATAGEM_META)) {
        disabledStratagems.add(id);
    }
    save();
}

// ═══════════ Grouping Helpers ═══════════

export function getWarbondGroups() {
    const groups = {};
    for (const [id, meta] of Object.entries(ITEM_META)) {
        const wb = meta.warbond;
        if (!groups[wb]) groups[wb] = [];
        groups[wb].push({ id, ...meta });
    }
    // Sort items within each group by slot order then name
    const slotOrder = { primary: 0, secondary: 1, grenade: 2 };
    for (const items of Object.values(groups)) {
        items.sort((a, b) => {
            const slotDiff = (slotOrder[a.slot] || 9) - (slotOrder[b.slot] || 9);
            if (slotDiff !== 0) return slotDiff;
            return a.display_name.localeCompare(b.display_name);
        });
    }
    return groups;
}

export function getStratagemCategoryGroups() {
    const groups = {};
    const categoryLabels = {
        eagle: 'Eagle Strikes',
        orbital: 'Orbital Strikes',
        support_weapon: 'Support Weapons',
        backpack: 'Backpacks',
        defensive: 'Defensive / Sentries',
        vehicle: 'Vehicles',
    };
    for (const [id, meta] of Object.entries(STRATAGEM_META)) {
        const cat = meta.category;
        if (!groups[cat]) groups[cat] = { label: categoryLabels[cat] || cat, items: [] };
        groups[cat].items.push({ id, ...meta });
    }
    // Sort items within each group alphabetically
    for (const group of Object.values(groups)) {
        group.items.sort((a, b) => a.display_name.localeCompare(b.display_name));
    }
    return groups;
}

// ═══════════ Pool Filtering ═══════════

export function filterPool(pool) {
    return {
        ...pool,
        stratagems: pool.stratagems.filter(id => !disabledStratagems.has(id)),
        primaries: pool.primaries.filter(id => !disabledItems.has(id)),
        secondaries: pool.secondaries.filter(id => !disabledItems.has(id)),
        throwables: pool.throwables.filter(id => !disabledItems.has(id)),
    };
}

// ═══════════ Chaos Mode ═══════════

export function buildChaosPool() {
    const primaries = [];
    const secondaries = [];
    const throwables = [];

    for (const [id, meta] of Object.entries(ITEM_META)) {
        if (disabledItems.has(id)) continue;
        if (meta.slot === 'primary') primaries.push(id);
        else if (meta.slot === 'secondary') secondaries.push(id);
        else if (meta.slot === 'grenade') throwables.push(id);
    }

    const stratagems = Object.keys(STRATAGEM_META)
        .filter(id => !disabledStratagems.has(id));

    return {
        display_name: 'CHAOS MODE',
        description: 'All items. No rules.',
        color: '#d946ef',
        primaries,
        secondaries,
        throwables,
        stratagems,
    };
}

// ═══════════ Stats ═══════════

export function getDisabledCount() {
    return disabledItems.size + disabledStratagems.size;
}

export function getWarbondState(warbondName) {
    let total = 0;
    let enabled = 0;
    for (const [id, meta] of Object.entries(ITEM_META)) {
        if (meta.warbond === warbondName) {
            total++;
            if (!disabledItems.has(id)) enabled++;
        }
    }
    return { total, enabled };
}

export function getCategoryState(categoryName) {
    let total = 0;
    let enabled = 0;
    for (const [id, meta] of Object.entries(STRATAGEM_META)) {
        if (meta.category === categoryName) {
            total++;
            if (!disabledStratagems.has(id)) enabled++;
        }
    }
    return { total, enabled };
}
