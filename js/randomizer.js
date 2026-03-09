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
 * Generate a full loadout from a pool definition.
 * Returns { stratagems, primary, secondary, throwable, warnings }
 */
export function generateLoadout(pool) {
    const warnings = [];

    // 4 unique stratagems
    if (pool.stratagems.length < 4) {
        warnings.push(`Pool only has ${pool.stratagems.length} stratagem(s) — need 4.`);
    }
    const stratagemIds = pickRandom(pool.stratagems, 4);
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
