export const POOLS = {

    // ═══════════ COMBAT ROLES ═══════════

    anti_heavy: {
        display_name: "Anti-Heavy",
        description: "Heavy penetration. Bring down the big ones.",
        color: "#ef5350",
        primaries: [
            "PRI_ERUPTOR", "PRI_DOUBLE_EDGE_SICKLE", "PRI_TORCHER_FLAM",
            "PRI_JAR_DOMINATOR", "PRI_SCORCHER_PLAS", "PRI_PURIFIER_PLAS",
            "PRI_SLUGGER", "PRI_EXPLODING_XBOW", "PRI_ADJUDICATOR",
        ],
        secondaries: [
            "SEC_SENATOR", "SEC_ULTIMATUM", "SEC_RE_EDUCATOR",
            "SEC_VERDICT", "SEC_GRENADE_PISTOL",
        ],
        throwables: [
            "THR_THERMITE", "THR_HIGH_EXPLOSIVE", "THR_IMPACT", "THR_DYNAMITE",
        ],
        stratagems: [
            "STRAT_RECOILLESS", "STRAT_ORBITAL_RAILCANNON", "STRAT_AUTOCANNON",
            "STRAT_EAGLE_500KG", "STRAT_ORBITAL_LASER", "STRAT_SPEAR",
            "STRAT_RAILGUN", "STRAT_QUASAR_CANNON", "STRAT_EXPENDABLE_AT",
            "STRAT_EXO_EMANCIPATOR", "STRAT_COMMANDO", "STRAT_LEVELLER",
            "STRAT_EAGLE_110MM", "STRAT_ORBITAL_PRECISION", "STRAT_WASP_LAUNCHER",
            "STRAT_SPEARGUN", "STRAT_EPOCH", "STRAT_SOLO_SILO",
        ],
    },

    anti_chaff: {
        display_name: "Anti-Chaff",
        description: "Wide spread. Clear the swarm.",
        color: "#ff9800",
        primaries: [
            "PRI_BREAKER", "PRI_BREAKER_SPNPR", "PRI_BREAKER_INCIN",
            "PRI_PUNISHER", "PRI_COOKOUT", "PRI_HALT", "PRI_DOUBLE_FREEDOM",
            "PRI_M90A_SGUN", "PRI_VARIABLE", "PRI_TORCHER_FLAM",
            "PRI_BLITZER", "PRI_PUNISHER_PLAS",
        ],
        secondaries: [
            "SEC_BUSHWACKER", "SEC_CRISPER", "SEC_REDEEMER",
            "SEC_SABER", "SEC_MACHETE",
        ],
        throwables: [
            "THR_FRAG", "THR_PINEAPPLE", "THR_INCENDIARY",
            "THR_INCENDIARY_IMPACT", "THR_IMPACT", "THR_HIGH_EXPLOSIVE",
        ],
        stratagems: [
            "STRAT_EAGLE_CLUSTER", "STRAT_EAGLE_NAPALM", "STRAT_EAGLE_STRAFING",
            "STRAT_EAGLE_AIRSTRIKE", "STRAT_ORBITAL_GATLING", "STRAT_ORBITAL_120MM",
            "STRAT_ORBITAL_AIRBURST", "STRAT_ORBITAL_NAPALM", "STRAT_ORBITAL_WALKING",
            "STRAT_FLAMETHROWER", "STRAT_HMG", "STRAT_GATLING_SENTRY",
            "STRAT_MG_SENTRY", "STRAT_MORTAR_SENTRY", "STRAT_FLAME_SENTRY",
            "STRAT_ANTI_PERSONNEL_MINES", "STRAT_INCENDIARY_MINES",
            "STRAT_GRENADE_LAUNCHER", "STRAT_STALWART", "STRAT_MACHINEGUN",
            "STRAT_MAXIGUN",
        ],
    },

    support: {
        display_name: "Support",
        description: "Hold the team together. Supply and suppress.",
        color: "#26c6da",
        primaries: [
            "PRI_DEFENDER", "PRI_KNIGHT", "PRI_STA_SMG", "PRI_M7S_SMG",
            "PRI_LIBERATOR_CARB", "PRI_LIBERATOR", "PRI_STA_ASS_RIFLE",
            "PRI_LIBERATOR_PEN", "PRI_SUPPRESSOR",
        ],
        secondaries: [
            "SEC_STIM_PISTOL", "SEC_PEACEMAKER", "SEC_REDEEMER",
            "SEC_VERDICT", "SEC_SOCOM_PISTOL",
        ],
        throwables: [
            "THR_SMOKE", "THR_SMOKESCREEN", "THR_STUN",
            "THR_SHIELD", "THR_LURE_MINE",
        ],
        stratagems: [
            "STRAT_MACHINEGUN", "STRAT_STALWART", "STRAT_HMG",
            "STRAT_AUTOCANNON", "STRAT_ANTI_MATERIEL", "STRAT_RECOILLESS",
            "STRAT_SUPPLY_PACK", "STRAT_SHIELD_PACK", "STRAT_SHIELD_GENERATOR",
            "STRAT_BALLISTIC_SHIELD", "STRAT_REINFORCE", "STRAT_RESUPPLY",
            "STRAT_SOS_BEACON", "STRAT_EMS_MORTAR", "STRAT_ORBITAL_SMOKE",
            "STRAT_EAGLE_SMOKE",
        ],
    },

    generalist: {
        display_name: "Generalist",
        description: "Balanced kit. Ready for anything.",
        color: "#78909c",
        primaries: [
            "PRI_LIBERATOR", "PRI_LIBERATOR_PEN", "PRI_ADJUDICATOR",
            "PRI_BREAKER", "PRI_SLUGGER", "PRI_SCORCHER_PLAS",
            "PRI_TENDERIZER", "PRI_JAR_DOMINATOR", "PRI_DILLIGENCE",
            "PRI_SICKLE_LAS", "PRI_DEFENDER", "PRI_VARIABLE",
        ],
        secondaries: [
            "SEC_SENATOR", "SEC_VERDICT", "SEC_REDEEMER",
            "SEC_GRENADE_PISTOL", "SEC_BUSHWACKER",
        ],
        throwables: [
            "THR_FRAG", "THR_IMPACT", "THR_HIGH_EXPLOSIVE",
            "THR_INCENDIARY", "THR_STUN", "THR_THERMITE",
        ],
        stratagems: [
            "STRAT_MACHINEGUN", "STRAT_STALWART", "STRAT_HMG",
            "STRAT_AUTOCANNON", "STRAT_ANTI_MATERIEL", "STRAT_RECOILLESS",
            "STRAT_GRENADE_LAUNCHER", "STRAT_RAILGUN", "STRAT_QUASAR_CANNON",
            "STRAT_MG_SENTRY", "STRAT_GATLING_SENTRY", "STRAT_AUTOCANNON_SENTRY",
            "STRAT_MORTAR_SENTRY", "STRAT_ROCKET_SENTRY",
            "STRAT_HMG_EMPLACEMENT", "STRAT_AT_EMPLACEMENT",
            "STRAT_GRENADIER_BATTLEMENT", "STRAT_BASTION", "STRAT_FAST_RECON",
        ],
    },

    // ═══════════ DAMAGE TYPES ═══════════

    pyromaniac: {
        display_name: "Pyromaniac",
        description: "If it breathes, it burns.",
        color: "#ff5722",
        primaries: [
            "PRI_TORCHER_FLAM", "PRI_BREAKER_INCIN", "PRI_COOKOUT",
            "PRI_COYOTE",
        ],
        secondaries: [
            "SEC_CRISPER", "SEC_GRENADE_PISTOL", "SEC_ULTIMATUM",
        ],
        throwables: [
            "THR_INCENDIARY", "THR_INCENDIARY_IMPACT", "THR_THERMITE",
            "THR_PYROTECH",
        ],
        stratagems: [
            "STRAT_FLAMETHROWER", "STRAT_EAGLE_NAPALM", "STRAT_ORBITAL_NAPALM",
            "STRAT_INCENDIARY_MINES", "STRAT_HOT_DOG", "STRAT_FLAME_SENTRY",
            "STRAT_EXPENDABLE_NAPALM",
        ],
    },

    grenadier: {
        display_name: "Grenadier",
        description: "Everything explodes. No exceptions.",
        color: "#ffc107",
        primaries: [
            "PRI_ERUPTOR", "PRI_EXPLODING_XBOW", "PRI_SCORCHER_PLAS",
            "PRI_PURIFIER_PLAS", "PRI_PUNISHER_PLAS", "PRI_JAR_DOMINATOR",
            "PRI_ONETWO",
        ],
        secondaries: [
            "SEC_GRENADE_PISTOL", "SEC_ULTIMATUM", "SEC_LOYALIST",
        ],
        throwables: [
            "THR_FRAG", "THR_HIGH_EXPLOSIVE", "THR_IMPACT",
            "THR_DYNAMITE", "THR_PINEAPPLE", "THR_THERMITE",
        ],
        stratagems: [
            "STRAT_GRENADE_LAUNCHER", "STRAT_BELT_FED_GL", "STRAT_AIRBURST_LAUNCHER",
            "STRAT_EAGLE_CLUSTER", "STRAT_EAGLE_AIRSTRIKE", "STRAT_EAGLE_500KG",
            "STRAT_ORBITAL_120MM", "STRAT_ORBITAL_380MM", "STRAT_ORBITAL_AIRBURST",
            "STRAT_ORBITAL_WALKING", "STRAT_MORTAR_SENTRY", "STRAT_C4_PACK",
            "STRAT_DE_ESCALATOR", "STRAT_GRENADIER_BATTLEMENT",
        ],
    },

    shock_trooper: {
        display_name: "Shock Trooper",
        description: "Ride the lightning. Stun and fry.",
        color: "#2196f3",
        primaries: [
            "PRI_BLITZER",
        ],
        secondaries: [
            "SEC_STUN_LANCE", "SEC_STUN_BATON",
        ],
        throwables: [
            "THR_ARC", "THR_STUN", "THR_URCHIN",
        ],
        stratagems: [
            "STRAT_ARC_THROWER", "STRAT_TESLA_TOWER", "STRAT_K9",
            "STRAT_ORBITAL_EMS", "STRAT_EMS_MORTAR", "STRAT_DE_ESCALATOR",
        ],
    },

    stinkbug: {
        display_name: "Stinkbug",
        description: "Toxic. Corrosive. Breathe it in.",
        color: "#7cb342",
        primaries: [
            "PRI_LIBERATOR", "PRI_LIBERATOR_PEN", "PRI_LIBERATOR_CONC",
            "PRI_STA_ASS_RIFLE", "PRI_PACIFIER", "PRI_COYOTE",
            "PRI_MAC5_ASS_RIFLE", "PRI_LIBERATOR_CARB", "PRI_TENDERIZER",
            "PRI_ADJUDICATOR", "PRI_ONETWO", "PRI_SUPPRESSOR",
            "PRI_AMENDMENT", "PRI_CONSTITUTION", "PRI_DEADEYE",
            "PRI_DILLIGENCE", "PRI_DILLIGENCE_CS", "PRI_CENSOR",
            "PRI_KNIGHT", "PRI_STA_SMG", "PRI_M7S_SMG",
            "PRI_REPRIMAND", "PRI_DEFENDER", "PRI_PUMMELER",
            "PRI_PUNISHER", "PRI_SLUGGER", "PRI_HALT",
            "PRI_COOKOUT", "PRI_DOUBLE_FREEDOM", "PRI_M90A_SGUN",
            "PRI_BREAKER", "PRI_BREAKER_SPNPR", "PRI_BREAKER_INCIN",
            "PRI_SCYTHE_LAS", "PRI_SICKLE_LAS", "PRI_DOUBLE_EDGE_SICKLE",
            "PRI_SCORCHER_PLAS", "PRI_PURIFIER_PLAS", "PRI_PUNISHER_PLAS",
            "PRI_ACCELERATOR_RIFLE", "PRI_BLITZER",
            "PRI_VARIABLE", "PRI_TORCHER_FLAM", "PRI_JAR_DOMINATOR",
            "PRI_EXPLODING_XBOW", "PRI_ERUPTOR",
        ],
        secondaries: [
            "SEC_WARRANT", "SEC_PEACEMAKER", "SEC_REDEEMER",
            "SEC_VERDICT", "SEC_SOCOM_PISTOL", "SEC_SENATOR",
            "SEC_STUN_LANCE", "SEC_SABER", "SEC_STUN_BATON",
            "SEC_HATCHET", "SEC_MACHETE", "SEC_STIM_PISTOL",
            "SEC_BUSHWACKER", "SEC_TALON", "SEC_CRISPER",
            "SEC_GRENADE_PISTOL", "SEC_DAGGER_LAS", "SEC_ULTIMATUM",
            "SEC_LOYALIST", "SEC_RE_EDUCATOR",
        ],
        throwables: [
            "THR_GAS", "THR_SMOKE", "THR_SMOKESCREEN",
        ],
        stratagems: [
            "STRAT_ORBITAL_GAS", "STRAT_GAS_MINES", "STRAT_STERILIZER",
            "STRAT_DOG_BREATH", "STRAT_EMS_MORTAR",
        ],
    },

    laser_head: {
        display_name: "Laser Head",
        description: "Focused beams. Precision burns.",
        color: "#29b6f6",
        primaries: [
            "PRI_SCYTHE_LAS", "PRI_SICKLE_LAS", "PRI_DOUBLE_EDGE_SICKLE",
            "PRI_ACCELERATOR_RIFLE",
        ],
        secondaries: [
            "SEC_DAGGER_LAS", "SEC_TALON",
        ],
        throwables: [
            "THR_STUN", "THR_IMPACT", "THR_FRAG", "THR_INCENDIARY",
        ],
        stratagems: [
            "STRAT_LASER_CANNON", "STRAT_QUASAR_CANNON", "STRAT_ORBITAL_LASER",
            "STRAT_GUARD_DOG_ROVER", "STRAT_LASER_SENTRY",
        ],
    },

    // ═══════════ PLAYSTYLES ═══════════

    melee_maniac: {
        display_name: "Melee Maniac",
        description: "Get close. Stay close. Hit harder.",
        color: "#d32f2f",
        primaries: [
            "PRI_BREAKER", "PRI_BREAKER_SPNPR", "PRI_BREAKER_INCIN",
            "PRI_PUNISHER", "PRI_COOKOUT", "PRI_HALT", "PRI_DOUBLE_FREEDOM",
            "PRI_M90A_SGUN", "PRI_SLUGGER", "PRI_TORCHER_FLAM",
            "PRI_VARIABLE",
        ],
        secondaries: [
            "SEC_SABER", "SEC_STUN_LANCE", "SEC_STUN_BATON",
            "SEC_HATCHET", "SEC_MACHETE", "SEC_BUSHWACKER", "SEC_CRISPER",
        ],
        throwables: [
            "THR_STUN", "THR_SMOKE", "THR_INCENDIARY",
            "THR_THROWING_KNIFE", "THR_URCHIN",
        ],
        stratagems: [
            "STRAT_BREACHING_HAMMER", "STRAT_DEFOLIATION_TOOL", "STRAT_ONE_TRUE_FLAG",
            "STRAT_SHIELD_PACK", "STRAT_BALLISTIC_SHIELD", "STRAT_DIRECTIONAL_SHIELD",
            "STRAT_JUMP_PACK", "STRAT_HOVER_PACK", "STRAT_WARP_PACK",
            "STRAT_SHIELD_GENERATOR", "STRAT_FLAMETHROWER",
        ],
    },

    marksman: {
        display_name: "Marksman",
        description: "One shot. One kill. Long range dominance.",
        color: "#4caf50",
        primaries: [
            "PRI_AMENDMENT", "PRI_CONSTITUTION", "PRI_DEADEYE",
            "PRI_DILLIGENCE", "PRI_DILLIGENCE_CS", "PRI_CENSOR",
            "PRI_ERUPTOR", "PRI_JAR_DOMINATOR", "PRI_ADJUDICATOR",
        ],
        secondaries: [
            "SEC_SENATOR", "SEC_VERDICT", "SEC_WARRANT", "SEC_RE_EDUCATOR",
        ],
        throwables: [
            "THR_IMPACT", "THR_HIGH_EXPLOSIVE", "THR_THERMITE",
        ],
        stratagems: [
            "STRAT_ANTI_MATERIEL", "STRAT_RAILGUN", "STRAT_SPEARGUN",
            "STRAT_ORBITAL_PRECISION", "STRAT_ORBITAL_RAILCANNON",
            "STRAT_EAGLE_500KG", "STRAT_EAGLE_110MM",
        ],
    },

    stealth_diver: {
        display_name: "Stealth Diver",
        description: "Silent. Unseen. In and out.",
        color: "#00695c",
        primaries: [
            "PRI_DEFENDER", "PRI_M7S_SMG", "PRI_KNIGHT", "PRI_SUPPRESSOR",
            "PRI_DILLIGENCE_CS", "PRI_LIBERATOR_CARB",
        ],
        secondaries: [
            "SEC_SOCOM_PISTOL", "SEC_DAGGER_LAS", "SEC_VERDICT",
        ],
        throwables: [
            "THR_SMOKE", "THR_SMOKESCREEN", "THR_STUN",
            "THR_SHIELD", "THR_THROWING_KNIFE",
        ],
        stratagems: [
            "STRAT_ORBITAL_SMOKE", "STRAT_EAGLE_SMOKE", "STRAT_ORBITAL_EMS",
            "STRAT_JUMP_PACK", "STRAT_HOVER_PACK", "STRAT_WARP_PACK",
            "STRAT_SUPPLY_PACK", "STRAT_SHIELD_PACK",
        ],
    },

    truffle_hunter: {
        display_name: "Truffle Hunter",
        description: "Fast in. Fast out. Grab and go.",
        color: "#8d6e63",
        primaries: [
            "PRI_KNIGHT", "PRI_DEFENDER", "PRI_STA_SMG", "PRI_M7S_SMG",
            "PRI_LIBERATOR_CARB", "PRI_PUMMELER",
        ],
        secondaries: [
            "SEC_BUSHWACKER", "SEC_REDEEMER", "SEC_PEACEMAKER",
        ],
        throwables: [
            "THR_SMOKE", "THR_SMOKESCREEN", "THR_STUN",
            "THR_INCENDIARY",
        ],
        stratagems: [
            "STRAT_JUMP_PACK", "STRAT_HOVER_PACK", "STRAT_WARP_PACK",
            "STRAT_EAGLE_STRAFING", "STRAT_EAGLE_AIRSTRIKE", "STRAT_EAGLE_CLUSTER",
            "STRAT_EAGLE_SMOKE", "STRAT_ORBITAL_SMOKE", "STRAT_ORBITAL_EMS",
            "STRAT_EMS_MORTAR", "STRAT_FLAMETHROWER", "STRAT_FAST_RECON",
        ],
    },

    // ═══════════ HARDWARE ═══════════

    mechdiver: {
        display_name: "Mechdiver",
        description: "Mount up. Mechanical superiority.",
        color: "#546e7a",
        primaries: [
            "PRI_LIBERATOR", "PRI_DEFENDER", "PRI_KNIGHT",
            "PRI_BREAKER", "PRI_SLUGGER", "PRI_SICKLE_LAS",
            "PRI_SCORCHER_PLAS",
        ],
        secondaries: [
            "SEC_SENATOR", "SEC_VERDICT", "SEC_REDEEMER",
            "SEC_PEACEMAKER",
        ],
        throwables: [
            "THR_FRAG", "THR_IMPACT", "THR_HIGH_EXPLOSIVE",
            "THR_THERMITE", "THR_STUN",
        ],
        stratagems: [
            "STRAT_EXO_PATRIOT", "STRAT_EXO_EMANCIPATOR",
            "STRAT_FAST_RECON", "STRAT_BASTION",
            "STRAT_GUARD_DOG", "STRAT_GUARD_DOG_ROVER", "STRAT_HOT_DOG",
            "STRAT_K9", "STRAT_DOG_BREATH", "STRAT_SUPPLY_PACK",
        ],
    },

    the_engineer: {
        display_name: "The Engineer",
        description: "Build the fortress. Let the turrets do the work.",
        color: "#fdd835",
        primaries: [
            "PRI_LIBERATOR", "PRI_LIBERATOR_PEN", "PRI_ADJUDICATOR",
            "PRI_DEFENDER", "PRI_TENDERIZER", "PRI_DILLIGENCE",
            "PRI_SCORCHER_PLAS", "PRI_SICKLE_LAS",
        ],
        secondaries: [
            "SEC_VERDICT", "SEC_SENATOR", "SEC_REDEEMER",
            "SEC_GRENADE_PISTOL",
        ],
        throwables: [
            "THR_STUN", "THR_SHIELD", "THR_LURE_MINE",
        ],
        stratagems: [
            "STRAT_ORBITAL_EMS",
            "STRAT_MG_SENTRY", "STRAT_GATLING_SENTRY", "STRAT_AUTOCANNON_SENTRY",
            "STRAT_MORTAR_SENTRY", "STRAT_ROCKET_SENTRY", "STRAT_TESLA_TOWER",
            "STRAT_EMS_MORTAR", "STRAT_FLAME_SENTRY", "STRAT_LASER_SENTRY",
            "STRAT_HMG_EMPLACEMENT", "STRAT_GRENADIER_BATTLEMENT", "STRAT_AT_EMPLACEMENT",
            "STRAT_GUARD_DOG", "STRAT_GUARD_DOG_ROVER", "STRAT_HOT_DOG",
            "STRAT_K9", "STRAT_DOG_BREATH", "STRAT_SUPPLY_PACK",
        ],
    },
};
