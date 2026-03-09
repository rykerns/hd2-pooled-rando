export const STRATAGEM_META = {
    // ═══════════ Eagle Strikes ═══════════

    STRAT_EAGLE_AIRSTRIKE: {
        display_name: "Eagle Airstrike",
        category: "eagle",
        tags: ["explosive", "aoe"],
    },
    STRAT_EAGLE_500KG: {
        display_name: "Eagle 500kg Bomb",
        category: "eagle",
        tags: ["explosive", "heavy", "single_target"],
    },
    STRAT_EAGLE_NAPALM: {
        display_name: "Eagle Napalm Airstrike",
        category: "eagle",
        tags: ["incendiary", "aoe"],
    },
    STRAT_EAGLE_CLUSTER: {
        display_name: "Eagle Cluster Bomb",
        category: "eagle",
        tags: ["explosive", "aoe"],
    },
    STRAT_EAGLE_STRAFING: {
        display_name: "Eagle Strafing Run",
        category: "eagle",
        tags: ["explosive", "line"],
    },
    STRAT_EAGLE_110MM: {
        display_name: "Eagle 110mm Rocket Pods",
        category: "eagle",
        tags: ["explosive", "anti_armor"],
    },
    STRAT_EAGLE_SMOKE: {
        display_name: "Eagle Smoke Strike",
        category: "eagle",
        tags: ["smoke", "utility"],
    },

    // ═══════════ Orbital Strikes ═══════════

    STRAT_ORBITAL_LASER: {
        display_name: "Orbital Laser",
        category: "orbital",
        tags: ["laser", "heavy", "aoe"],
    },
    STRAT_ORBITAL_RAILCANNON: {
        display_name: "Orbital Railcannon Strike",
        category: "orbital",
        tags: ["heavy", "single_target", "anti_tank"],
    },
    STRAT_ORBITAL_GATLING: {
        display_name: "Orbital Gatling Barrage",
        category: "orbital",
        tags: ["explosive", "aoe"],
    },
    STRAT_ORBITAL_AIRBURST: {
        display_name: "Orbital Airburst Strike",
        category: "orbital",
        tags: ["explosive", "aoe"],
    },
    STRAT_ORBITAL_120MM: {
        display_name: "Orbital 120mm HE Barrage",
        category: "orbital",
        tags: ["explosive", "heavy", "aoe"],
    },
    STRAT_ORBITAL_380MM: {
        display_name: "Orbital 380mm HE Barrage",
        category: "orbital",
        tags: ["explosive", "heavy", "aoe"],
    },
    STRAT_ORBITAL_WALKING: {
        display_name: "Orbital Walking Barrage",
        category: "orbital",
        tags: ["explosive", "aoe"],
    },
    STRAT_ORBITAL_PRECISION: {
        display_name: "Orbital Precision Strike",
        category: "orbital",
        tags: ["explosive", "single_target"],
    },
    STRAT_ORBITAL_GAS: {
        display_name: "Orbital Gas Strike",
        category: "orbital",
        tags: ["gas", "aoe"],
    },
    STRAT_ORBITAL_EMS: {
        display_name: "Orbital EMS Strike",
        category: "orbital",
        tags: ["stun", "aoe"],
    },
    STRAT_ORBITAL_SMOKE: {
        display_name: "Orbital Smoke Strike",
        category: "orbital",
        tags: ["smoke", "utility"],
    },
    STRAT_ORBITAL_NAPALM: {
        display_name: "Orbital Napalm Barrage",
        category: "orbital",
        tags: ["incendiary", "aoe"],
    },

    // ═══════════ Support Weapons ═══════════

    STRAT_MACHINEGUN: {
        display_name: "Machine Gun",
        category: "support_weapon",
        tags: ["anti_infantry", "medium"],
    },
    STRAT_HMG: {
        display_name: "Heavy Machine Gun",
        category: "support_weapon",
        tags: ["anti_infantry", "heavy"],
    },
    STRAT_STALWART: {
        display_name: "Stalwart",
        category: "support_weapon",
        tags: ["anti_infantry", "light"],
    },
    STRAT_AUTOCANNON: {
        display_name: "Autocannon",
        category: "support_weapon",
        tags: ["anti_armor", "medium", "backpack"],
    },
    STRAT_RECOILLESS: {
        display_name: "Recoilless Rifle",
        category: "support_weapon",
        tags: ["anti_tank", "heavy", "backpack"],
    },
    STRAT_EXPENDABLE_AT: {
        display_name: "Expendable Anti-Tank",
        category: "support_weapon",
        tags: ["anti_tank", "heavy", "disposable"],
    },
    STRAT_FLAMETHROWER: {
        display_name: "Flamethrower",
        category: "support_weapon",
        tags: ["incendiary", "crowd_control"],
    },
    STRAT_ARC_THROWER: {
        display_name: "Arc Thrower",
        category: "support_weapon",
        tags: ["electric", "crowd_control", "infinite_ammo"],
    },
    STRAT_RAILGUN: {
        display_name: "Railgun",
        category: "support_weapon",
        tags: ["anti_tank", "heavy", "single_target"],
    },
    STRAT_SPEAR: {
        display_name: "Spear",
        category: "support_weapon",
        tags: ["anti_tank", "heavy", "guided", "backpack"],
    },
    STRAT_LASER_CANNON: {
        display_name: "Laser Cannon",
        category: "support_weapon",
        tags: ["laser", "anti_armor", "heat"],
    },
    STRAT_GRENADE_LAUNCHER: {
        display_name: "Grenade Launcher",
        category: "support_weapon",
        tags: ["explosive", "aoe"],
    },
    STRAT_AIRBURST_LAUNCHER: {
        display_name: "Airburst Rocket Launcher",
        category: "support_weapon",
        tags: ["explosive", "aoe", "backpack"],
    },
    STRAT_QUASAR_CANNON: {
        display_name: "Quasar Cannon",
        category: "support_weapon",
        tags: ["anti_tank", "heavy", "heat"],
    },
    STRAT_COMMANDO: {
        display_name: "Commando",
        category: "support_weapon",
        tags: ["anti_tank", "heavy", "guided", "backpack"],
    },

    // ═══════════ Backpacks ═══════════

    STRAT_SHIELD_PACK: {
        display_name: "Shield Generator Pack",
        category: "backpack",
        tags: ["shield", "utility"],
    },
    STRAT_SUPPLY_PACK: {
        display_name: "Supply Pack",
        category: "backpack",
        tags: ["resupply", "utility"],
    },
    STRAT_GUARD_DOG: {
        display_name: "Guard Dog",
        category: "backpack",
        tags: ["drone", "anti_infantry"],
    },
    STRAT_GUARD_DOG_ROVER: {
        display_name: "Guard Dog Rover",
        category: "backpack",
        tags: ["drone", "laser", "anti_infantry"],
    },
    STRAT_BALLISTIC_SHIELD: {
        display_name: "Ballistic Shield Backpack",
        category: "backpack",
        tags: ["shield", "defensive"],
    },
    STRAT_JUMP_PACK: {
        display_name: "Jump Pack",
        category: "backpack",
        tags: ["mobility", "utility"],
    },

    // ═══════════ Defensive / Emplacements ═══════════

    STRAT_HMG_EMPLACEMENT: {
        display_name: "HMG Emplacement",
        category: "defensive",
        tags: ["turret", "heavy"],
    },
    STRAT_SHIELD_GENERATOR: {
        display_name: "Shield Generator Relay",
        category: "defensive",
        tags: ["shield", "utility"],
    },
    STRAT_TESLA_TOWER: {
        display_name: "Tesla Tower",
        category: "defensive",
        tags: ["electric", "turret", "auto"],
    },
    STRAT_AUTOCANNON_SENTRY: {
        display_name: "Autocannon Sentry",
        category: "defensive",
        tags: ["turret", "anti_armor"],
    },
    STRAT_GATLING_SENTRY: {
        display_name: "Gatling Sentry",
        category: "defensive",
        tags: ["turret", "anti_infantry"],
    },
    STRAT_MORTAR_SENTRY: {
        display_name: "Mortar Sentry",
        category: "defensive",
        tags: ["turret", "explosive", "aoe"],
    },
    STRAT_ROCKET_SENTRY: {
        display_name: "Rocket Sentry",
        category: "defensive",
        tags: ["turret", "anti_armor"],
    },
    STRAT_MG_SENTRY: {
        display_name: "Machine Gun Sentry",
        category: "defensive",
        tags: ["turret", "anti_infantry"],
    },
    STRAT_EMS_MORTAR: {
        display_name: "EMS Mortar Sentry",
        category: "defensive",
        tags: ["turret", "stun", "aoe"],
    },
    STRAT_INCENDIARY_MINES: {
        display_name: "Incendiary Mines",
        category: "defensive",
        tags: ["mines", "incendiary"],
    },
    STRAT_ANTI_PERSONNEL_MINES: {
        display_name: "Anti-Personnel Minefield",
        category: "defensive",
        tags: ["mines", "explosive"],
    },

    // ═══════════ Vehicles ═══════════

    STRAT_EXO_PATRIOT: {
        display_name: "EXO-45 Patriot Exosuit",
        category: "vehicle",
        tags: ["mech", "heavy", "anti_armor"],
    },
    STRAT_EXO_EMANCIPATOR: {
        display_name: "EXO-49 Emancipator Exosuit",
        category: "vehicle",
        tags: ["mech", "heavy", "anti_tank"],
    },

    // ═══════════ Mission Support ═══════════

    STRAT_REINFORCE: {
        display_name: "Reinforce",
        category: "mission",
        tags: ["utility"],
    },
    STRAT_SOS_BEACON: {
        display_name: "SOS Beacon",
        category: "mission",
        tags: ["utility"],
    },
    STRAT_RESUPPLY: {
        display_name: "Resupply",
        category: "mission",
        tags: ["resupply", "utility"],
    },
};
