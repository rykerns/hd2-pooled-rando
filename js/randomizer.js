import { ITEM_META } from './items.js';
import { STRATAGEM_META } from './stratagems.js';

/**
 * Fisher-Yates shuffle, returns a new array.
 */
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/**
 * Pick `count` unique random items from an array.
 * If array has fewer than `count` items, returns all (shuffled).
 */
function pickRandom(arr, count) {
    const unique = [...new Set(arr)];
    return shuffle(unique).slice(0, count);
}

/**
 * Check if a stratagem candidate can be added under current slot state.
 *
 * Difficulty rules (low → high restriction):
 *   legend    – no restrictions at all
 *   helldiver – max 1 support-weapon slot, max 1 backpack slot
 *               (combined fills both); expendables are unrestricted
 *   recruit   – same as helldiver PLUS max 1 expendable total
 */
function canPick(meta, state, difficulty) {
    const slot = meta.slot || null;
    const isExpendable = !!meta.expendable;

    // Expendable items never permanently occupy a slot
    if (isExpendable) {
        if (difficulty === 'recruit' && state.expendableCount >= 1) return false;
        return true;
    }

    // Non-expendable slot checks
    if (slot === 'support_weapon') {
        return !state.supportWeaponUsed;
    }
    if (slot === 'backpack') {
        return !state.backpackUsed;
    }
    if (slot === 'combined') {
        return !state.supportWeaponUsed && !state.backpackUsed;
    }

    // No slot (eagles, orbitals, defensives) — always fine
    return true;
}

/**
 * Update slot state after picking a stratagem.
 */
function applyPick(meta, state) {
    const slot = meta.slot || null;
    const isExpendable = !!meta.expendable;

    if (isExpendable) {
        state.expendableCount++;
        return;
    }

    if (slot === 'support_weapon') {
        state.supportWeaponUsed = true;
    } else if (slot === 'backpack') {
        state.backpackUsed = true;
    } else if (slot === 'combined') {
        state.supportWeaponUsed = true;
        state.backpackUsed = true;
    }
}

/**
 * Pick stratagems with difficulty constraints.
 * Shuffles candidates and greedily selects up to `count` that satisfy rules.
 */
function pickStratagems(pool, count, difficulty) {
    // Legend — no restrictions, pure random
    if (difficulty === 'legend') {
        return pickRandom(pool, count);
    }

    // Brasch's Revenge — equipment only (must occupy a slot or be expendable)
    // No eagles, orbitals, or defensives. Guaranteed slot conflicts.
    if (difficulty === 'nightmare') {
        const equipmentOnly = [...new Set(pool)].filter(id => {
            const meta = STRATAGEM_META[id];
            if (!meta) return false;
            return meta.slot != null || !!meta.expendable;
        });

        if (equipmentOnly.length < count) {
            return shuffle(equipmentOnly);
        }
        return pickRandom(equipmentOnly, count);
    }

    // Recruit & Helldiver — constrained slot selection
    const shuffled = shuffle([...new Set(pool)]);
    const selected = [];
    const state = {
        supportWeaponUsed: false,
        backpackUsed: false,
        expendableCount: 0,
    };

    for (const id of shuffled) {
        if (selected.length >= count) break;
        const meta = STRATAGEM_META[id];
        if (!meta) continue;

        if (canPick(meta, state, difficulty)) {
            selected.push(id);
            applyPick(meta, state);
        }
    }

    return selected;
}

/**
 * Generate a full loadout from a pool definition.
 * @param {object} pool       – pool object with stratagems, primaries, etc.
 * @param {string} difficulty – 'recruit' | 'helldiver' | 'legend' | 'nightmare'
 * Returns { stratagems, primary, secondary, throwable, warnings }
 */
export function generateLoadout(pool, difficulty = 'recruit') {
    const warnings = [];

    // 4 unique stratagems (difficulty-aware)
    if (pool.stratagems.length < 4) {
        warnings.push(`Pool only has ${pool.stratagems.length} stratagem(s) — need 4.`);
    }
    const stratagemIds = pickStratagems(pool.stratagems, 4, difficulty);

    if (stratagemIds.length < 4 && pool.stratagems.length >= 4) {
        warnings.push(`Only ${stratagemIds.length} valid stratagem(s) for this difficulty.`);
    }

    const stratagems = stratagemIds
        .map(id => STRATAGEM_META[id] ? { id, ...STRATAGEM_META[id] } : null)
        .filter(Boolean);

    // 1 primary
    if (pool.primaries.length === 0) {
        warnings.push("Pool has no primaries!");
    }
    const primaryIds = pickRandom(pool.primaries, 1);
    const primary = primaryIds.length > 0 && ITEM_META[primaryIds[0]]
        ? { id: primaryIds[0], ...ITEM_META[primaryIds[0]] }
        : null;

    // 1 secondary
    if (pool.secondaries.length === 0) {
        warnings.push("Pool has no secondaries!");
    }
    const secondaryIds = pickRandom(pool.secondaries, 1);
    const secondary = secondaryIds.length > 0 && ITEM_META[secondaryIds[0]]
        ? { id: secondaryIds[0], ...ITEM_META[secondaryIds[0]] }
        : null;

    // 1 throwable
    if (pool.throwables.length === 0) {
        warnings.push("Pool has no throwables!");
    }
    const throwableIds = pickRandom(pool.throwables, 1);
    const throwable = throwableIds.length > 0 && ITEM_META[throwableIds[0]]
        ? { id: throwableIds[0], ...ITEM_META[throwableIds[0]] }
        : null;

    return { stratagems, primary, secondary, throwable, warnings };
}
