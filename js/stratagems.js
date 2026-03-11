export const STRATAGEM_META = {
    // ═══════════ Eagle Strikes (Hangar) ═══════════

    STRAT_EAGLE_STRAFING: {
        display_name: "Eagle Strafing Run",
        category: "eagle",
        tags: ["explosive", "line"],
        slot: null,
    },
    STRAT_EAGLE_AIRSTRIKE: {
        display_name: "Eagle Airstrike",
        category: "eagle",
        tags: ["explosive", "aoe"],
        slot: null,
    },
    STRAT_EAGLE_CLUSTER: {
        display_name: "Eagle Cluster Bomb",
        category: "eagle",
        tags: ["explosive", "aoe"],
        slot: null,
    },
    STRAT_EAGLE_SMOKE: {
        display_name: "Eagle Smoke Strike",
        category: "eagle",
        tags: ["smoke", "utility"],
        slot: null,
    },
    STRAT_EAGLE_NAPALM: {
        display_name: "Eagle Napalm Airstrike",
        category: "eagle",
        tags: ["incendiary", "aoe"],
        slot: null,
    },
    STRAT_EAGLE_110MM: {
        display_name: "Eagle 110mm Rocket Pods",
        category: "eagle",
        tags: ["explosive", "anti_armor"],
        slot: null,
    },
    STRAT_EAGLE_500KG: {
        display_name: "Eagle 500kg Bomb",
        category: "eagle",
        tags: ["explosive", "heavy", "single_target"],
        slot: null,
    },

    // ═══════════ Orbital Strikes ═══════════

    STRAT_ORBITAL_PRECISION: {
        display_name: "Orbital Precision Strike",
        category: "orbital",
        tags: ["explosive", "single_target"],
        slot: null,
    },
    STRAT_ORBITAL_GATLING: {
        display_name: "Orbital Gatling Barrage",
        category: "orbital",
        tags: ["explosive", "aoe"],
        slot: null,
    },
    STRAT_ORBITAL_GAS: {
        display_name: "Orbital Gas Strike",
        category: "orbital",
        tags: ["gas", "aoe"],
        slot: null,
    },
    STRAT_ORBITAL_120MM: {
        display_name: "Orbital 120mm HE Barrage",
        category: "orbital",
        tags: ["explosive", "heavy", "aoe"],
        slot: null,
    },
    STRAT_ORBITAL_AIRBURST: {
        display_name: "Orbital Airburst Strike",
        category: "orbital",
        tags: ["explosive", "aoe"],
        slot: null,
    },
    STRAT_ORBITAL_SMOKE: {
        display_name: "Orbital Smoke Strike",
        category: "orbital",
        tags: ["smoke", "utility"],
        slot: null,
    },
    STRAT_ORBITAL_EMS: {
        display_name: "Orbital EMS Strike",
        category: "orbital",
        tags: ["stun", "aoe"],
        slot: null,
    },
    STRAT_ORBITAL_380MM: {
        display_name: "Orbital 380mm HE Barrage",
        category: "orbital",
        tags: ["explosive", "heavy", "aoe"],
        slot: null,
    },
    STRAT_ORBITAL_WALKING: {
        display_name: "Orbital Walking Barrage",
        category: "orbital",
        tags: ["explosive", "aoe"],
        slot: null,
    },
    STRAT_ORBITAL_LASER: {
        display_name: "Orbital Laser",
        category: "orbital",
        tags: ["laser", "heavy", "aoe"],
        slot: null,
    },
    STRAT_ORBITAL_NAPALM: {
        display_name: "Orbital Napalm Barrage",
        category: "orbital",
        tags: ["incendiary", "aoe"],
        slot: null,
    },
    STRAT_ORBITAL_RAILCANNON: {
        display_name: "Orbital Railcannon Strike",
        category: "orbital",
        tags: ["heavy", "single_target", "anti_tank"],
        slot: null,
    },

    // ═══════════ Support Weapons ═══════════

    STRAT_MACHINEGUN: {
        display_name: "MG-43 Machine Gun",
        category: "support_weapon",
        tags: ["anti_infantry", "medium"],
        slot: "support_weapon",                     // S
    },
    STRAT_EXPENDABLE_AT: {
        display_name: "EAT-17 Expendable Anti-Tank",
        category: "support_weapon",
        tags: ["anti_tank", "heavy", "disposable"],
        slot: "support_weapon", expendable: true,   // S/E
    },
    STRAT_STALWART: {
        display_name: "M-105 Stalwart",
        category: "support_weapon",
        tags: ["anti_infantry", "light"],
        slot: "support_weapon",                     // S
    },
    STRAT_LASER_CANNON: {
        display_name: "LAS-98 Laser Cannon",
        category: "support_weapon",
        tags: ["laser", "anti_armor", "heat"],
        slot: "support_weapon",                     // S
    },
    STRAT_ANTI_MATERIEL: {
        display_name: "APW-1 Anti-Materiel Rifle",
        category: "support_weapon",
        tags: ["anti_armor", "medium", "single_target"],
        slot: "support_weapon",                     // S
    },
    STRAT_RECOILLESS: {
        display_name: "GR-8 Recoilless Rifle",
        category: "support_weapon",
        tags: ["anti_tank", "heavy", "backpack"],
        slot: "combined",                           // C
    },
    STRAT_GRENADE_LAUNCHER: {
        display_name: "GL-21 Grenade Launcher",
        category: "support_weapon",
        tags: ["explosive", "aoe"],
        slot: "support_weapon",                     // S
    },
    STRAT_FLAMETHROWER: {
        display_name: "FLAM-40 Flamethrower",
        category: "support_weapon",
        tags: ["incendiary", "crowd_control"],
        slot: "support_weapon",                     // S
    },
    STRAT_HMG: {
        display_name: "MG-206 Heavy Machine Gun",
        category: "support_weapon",
        tags: ["anti_infantry", "heavy"],
        slot: "support_weapon",                     // S
    },
    STRAT_AUTOCANNON: {
        display_name: "AC-8 Autocannon",
        category: "support_weapon",
        tags: ["anti_armor", "medium", "backpack"],
        slot: "combined",                           // C
    },
    STRAT_ARC_THROWER: {
        display_name: "ARC-3 Arc Thrower",
        category: "support_weapon",
        tags: ["electric", "crowd_control", "infinite_ammo"],
        slot: "support_weapon",                     // S
    },
    STRAT_QUASAR_CANNON: {
        display_name: "LAS-99 Quasar Cannon",
        category: "support_weapon",
        tags: ["anti_tank", "heavy", "heat"],
        slot: "support_weapon",                     // S
    },
    STRAT_AIRBURST_LAUNCHER: {
        display_name: "RL-77 Airburst Rocket Launcher",
        category: "support_weapon",
        tags: ["explosive", "aoe", "backpack"],
        slot: "combined",                           // C
    },
    STRAT_COMMANDO: {
        display_name: "MLS-4X Commando",
        category: "support_weapon",
        tags: ["anti_tank", "heavy", "guided", "backpack"],
        slot: "support_weapon", expendable: true,   // S/E
    },
    STRAT_SPEAR: {
        display_name: "FAF-14 Spear",
        category: "support_weapon",
        tags: ["anti_tank", "heavy", "guided", "backpack"],
        slot: "combined",                           // C
    },
    STRAT_RAILGUN: {
        display_name: "RS-422 Railgun",
        category: "support_weapon",
        tags: ["anti_tank", "heavy", "single_target"],
        slot: "support_weapon",                     // S
    },
    STRAT_WASP_LAUNCHER: {
        display_name: "StA-X3 W.A.S.P. Launcher",
        category: "support_weapon",
        tags: ["anti_armor", "guided", "backpack"],
        slot: "combined",                           // C
    },
    STRAT_EPOCH: {
        display_name: "PLAS-45 Epoch",
        category: "support_weapon",
        tags: ["plasma", "anti_armor"],
        slot: "support_weapon",                     // S
    },
    STRAT_BREACHING_HAMMER: {
        display_name: "CQC-20 Breaching Hammer",
        category: "support_weapon",
        tags: ["melee", "heavy"],
        slot: "support_weapon",                     // S
    },
    STRAT_SPEARGUN: {
        display_name: "S-11 Speargun",
        category: "support_weapon",
        tags: ["anti_armor", "single_target"],
        slot: "support_weapon",                     // S
    },
    STRAT_EXPENDABLE_NAPALM: {
        display_name: "EAT-700 Expendable Napalm",
        category: "support_weapon",
        tags: ["incendiary", "disposable"],
        slot: "support_weapon", expendable: true,   // S/E
    },
    STRAT_STERILIZER: {
        display_name: "TX-41 Sterilizer",
        category: "support_weapon",
        tags: ["gas", "crowd_control"],
        slot: "support_weapon",                     // S
    },
    STRAT_DEFOLIATION_TOOL: {
        display_name: "CQC-9 Defoliation Tool",
        category: "support_weapon",
        tags: ["melee", "crowd_control"],
        slot: "support_weapon",                     // S
    },
    STRAT_DE_ESCALATOR: {
        display_name: "GL-52 De-Escalator",
        category: "support_weapon",
        tags: ["explosive", "stun", "aoe"],
        slot: "support_weapon",                     // S
    },
    STRAT_LEVELLER: {
        display_name: "EAT-411 Leveller",
        category: "support_weapon",
        tags: ["anti_tank", "heavy", "disposable"],
        slot: "support_weapon", expendable: true,   // S/E
    },
    STRAT_C4_PACK: {
        display_name: "B/MD C4 Pack",
        category: "support_weapon",
        tags: ["explosive", "heavy", "backpack"],
        slot: "combined",                           // C
    },
    STRAT_SOLO_SILO: {
        display_name: "MS-11 Solo Silo",
        category: "support_weapon",
        tags: ["anti_tank", "heavy", "guided"],
        slot: "support_weapon", expendable: true,   // S/E
    },
    STRAT_BELT_FED_GL: {
        display_name: "GL-28 Belt-Fed Grenade Launcher",
        category: "support_weapon",
        tags: ["explosive", "aoe"],
        slot: "combined",                           // C
    },
    STRAT_MAXIGUN: {
        display_name: "M-1000 Maxigun",
        category: "support_weapon",
        tags: ["anti_infantry", "heavy"],
        slot: "combined",                           // C
    },
    STRAT_ONE_TRUE_FLAG: {
        display_name: "CQC-1 One True Flag",
        category: "support_weapon",
        tags: ["melee", "buff"],
        slot: "support_weapon",                     // S
    },

    // ═══════════ Backpacks ═══════════

    STRAT_SUPPLY_PACK: {
        display_name: "B-1 Supply Pack",
        category: "backpack",
        tags: ["resupply", "utility"],
        slot: "backpack",                           // B
    },
    STRAT_JUMP_PACK: {
        display_name: "LIFT-850 Jump Pack",
        category: "backpack",
        tags: ["mobility", "utility"],
        slot: "backpack",                           // B
    },
    STRAT_BALLISTIC_SHIELD: {
        display_name: "SH-20 Ballistic Shield Backpack",
        category: "backpack",
        tags: ["shield", "defensive"],
        slot: "backpack",                           // B
    },
    STRAT_GUARD_DOG: {
        display_name: "AX/AR-23 Guard Dog",
        category: "backpack",
        tags: ["drone", "anti_infantry"],
        slot: "backpack",                           // B
    },
    STRAT_GUARD_DOG_ROVER: {
        display_name: "AX/LAS-5 Rover",
        category: "backpack",
        tags: ["drone", "laser", "anti_infantry"],
        slot: "backpack",                           // B
    },
    STRAT_SHIELD_PACK: {
        display_name: "SH-32 Shield Generator Pack",
        category: "backpack",
        tags: ["shield", "utility"],
        slot: "backpack",                           // B
    },
    STRAT_DIRECTIONAL_SHIELD: {
        display_name: "SH-51 Directional Shield",
        category: "backpack",
        tags: ["shield", "defensive"],
        slot: "backpack",                           // B
    },
    STRAT_HOT_DOG: {
        display_name: "AX/FLAM-75 Hot Dog",
        category: "backpack",
        tags: ["drone", "incendiary", "anti_infantry"],
        slot: "backpack",                           // B
    },
    STRAT_PORTABLE_HELLBOMB: {
        display_name: "B-100 Portable Hellbomb",
        category: "backpack",
        tags: ["explosive", "heavy"],
        slot: "backpack", expendable: true,          // B/E
    },
    STRAT_K9: {
        display_name: "AX/ARC-3 K-9",
        category: "backpack",
        tags: ["drone", "electric", "crowd_control"],
        slot: "backpack",                           // B
    },
    STRAT_HOVER_PACK: {
        display_name: "LIFT-860 Hover Pack",
        category: "backpack",
        tags: ["mobility", "utility"],
        slot: "backpack",                           // B
    },
    STRAT_DOG_BREATH: {
        display_name: "AX/TX-13 Dog Breath",
        category: "backpack",
        tags: ["drone", "gas", "crowd_control"],
        slot: "backpack",                           // B
    },
    STRAT_WARP_PACK: {
        display_name: "LIFT-182 Warp Pack",
        category: "backpack",
        tags: ["mobility", "utility"],
        slot: "backpack",                           // B
    },

    // ═══════════ Defensive / Emplacements ═══════════

    STRAT_ANTI_PERSONNEL_MINES: {
        display_name: "MD-6 Anti-Personnel Minefield",
        category: "defensive",
        tags: ["mines", "explosive"],
        slot: null,
    },
    STRAT_INCENDIARY_MINES: {
        display_name: "MD-I4 Incendiary Mines",
        category: "defensive",
        tags: ["mines", "incendiary"],
        slot: null,
    },
    STRAT_ANTI_TANK_MINES: {
        display_name: "MD-17 Anti-Tank Mines",
        category: "defensive",
        tags: ["mines", "anti_tank"],
        slot: null,
    },
    STRAT_SHIELD_GENERATOR: {
        display_name: "FX-12 Shield Generator Relay",
        category: "defensive",
        tags: ["shield", "utility"],
        slot: null,
    },
    STRAT_HMG_EMPLACEMENT: {
        display_name: "E/MG-101 HMG Emplacement",
        category: "defensive",
        tags: ["turret", "heavy"],
        slot: null,
    },
    STRAT_GRENADIER_BATTLEMENT: {
        display_name: "E/GL-21 Grenadier Battlement",
        category: "defensive",
        tags: ["turret", "explosive", "aoe"],
        slot: null,
    },
    STRAT_GAS_MINES: {
        display_name: "MD-8 Gas Mines",
        category: "defensive",
        tags: ["mines", "gas"],
        slot: null,
    },
    STRAT_AT_EMPLACEMENT: {
        display_name: "E/AT-12 Anti-Tank Emplacement",
        category: "defensive",
        tags: ["turret", "anti_tank"],
        slot: null,
    },

    // ═══════════ Sentries ═══════════

    STRAT_MG_SENTRY: {
        display_name: "A/MG-43 Machine Gun Sentry",
        category: "defensive",
        tags: ["turret", "anti_infantry"],
        slot: null,
    },
    STRAT_GATLING_SENTRY: {
        display_name: "A/G-16 Gatling Sentry",
        category: "defensive",
        tags: ["turret", "anti_infantry"],
        slot: null,
    },
    STRAT_AUTOCANNON_SENTRY: {
        display_name: "A/AC-8 Autocannon Sentry",
        category: "defensive",
        tags: ["turret", "anti_armor"],
        slot: null,
    },
    STRAT_MORTAR_SENTRY: {
        display_name: "A/M-12 Mortar Sentry",
        category: "defensive",
        tags: ["turret", "explosive", "aoe"],
        slot: null,
    },
    STRAT_ROCKET_SENTRY: {
        display_name: "A/MLS-4X Rocket Sentry",
        category: "defensive",
        tags: ["turret", "anti_armor"],
        slot: null,
    },
    STRAT_TESLA_TOWER: {
        display_name: "A/ARC-3 Tesla Tower",
        category: "defensive",
        tags: ["electric", "turret", "auto"],
        slot: null,
    },
    STRAT_EMS_MORTAR: {
        display_name: "A/M-23 EMS Mortar Sentry",
        category: "defensive",
        tags: ["turret", "stun", "aoe"],
        slot: null,
    },
    STRAT_FLAME_SENTRY: {
        display_name: "A/FLAM-40 Flame Sentry",
        category: "defensive",
        tags: ["turret", "incendiary"],
        slot: null,
    },
    STRAT_LASER_SENTRY: {
        display_name: "A/LAS-98 Laser Sentry",
        category: "defensive",
        tags: ["turret", "laser"],
        slot: null,
    },

    // ═══════════ Vehicles ═══════════

    STRAT_EXO_PATRIOT: {
        display_name: "EXO-45 Patriot Exosuit",
        category: "vehicle",
        tags: ["mech", "heavy", "anti_armor"],
        slot: "support_weapon", expendable: true,   // S/E
    },
    STRAT_EXO_EMANCIPATOR: {
        display_name: "EXO-49 Emancipator Exosuit",
        category: "vehicle",
        tags: ["mech", "heavy", "anti_tank"],
        slot: "support_weapon", expendable: true,   // S/E
    },
    STRAT_FAST_RECON: {
        display_name: "M-102 Fast Recon Vehicle",
        category: "vehicle",
        tags: ["vehicle", "mobility"],
        slot: "support_weapon", expendable: true,   // S/E
    },
    STRAT_BASTION: {
        display_name: "TD-220 Bastion MK XVI",
        category: "vehicle",
        tags: ["vehicle", "heavy", "anti_tank"],
        slot: null, expendable: true,               // E (just expendable)
    },

};
