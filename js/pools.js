export const POOLS = {

    // ═══════════ COMBAT ROLES ═══════════

    anti_heavy: {
        display_name: "Titanbreaker",
        description: "For when liberty needs a big hole punched through something.",
        rationale: "Built around heavy-penetration primaries and anti-tank stratagems. Every weapon and stratagem is chosen to crack armor — from Recoilless Rifles and Railguns to Thermite grenades and the Senator. If it doesn't dent plating, it doesn't belong here.",
        color: "#ef5350",
        primaries: [
            "PRI_ERUPTOR", "PRI_DOUBLE_EDGE_SICKLE", "PRI_TORCHER_FLAM",
            "PRI_JAR_DOMINATOR", "PRI_SCORCHER_PLAS", "PRI_PURIFIER_PLAS",
            "PRI_SLUGGER", "PRI_EXPLODING_XBOW", "PRI_ADJUDICATOR",
            "PRI_COYOTE",
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
            "STRAT_EXO_EMANCIPATOR", "STRAT_LEVELLER",
            "STRAT_EAGLE_110MM", "STRAT_ORBITAL_PRECISION", "STRAT_SOLO_SILO",
            "STRAT_ANTI_MATERIEL", "STRAT_C4_PACK",
            "STRAT_ANTI_TANK_MINES", "STRAT_AT_EMPLACEMENT",
        ],
    },

    anti_chaff: {
        display_name: "Crowd Control Directive",
        description: "Converts enemy numbers into enemy statistics.",
        rationale: "Focused on clearing waves of light and medium enemies fast. Shotguns, flamers, and area-denial stratagems like Napalm, Gatling Sentries, and Incendiary Mines keep the horde thinned. Penetration takes a back seat to volume and splash damage.",
        color: "#ff9800",
        primaries: [
            "PRI_BREAKER", "PRI_BREAKER_SPNPR", "PRI_BREAKER_INCIN",
            "PRI_HALT", "PRI_DOUBLE_FREEDOM",
            "PRI_M90A_SGUN", "PRI_VARIABLE", "PRI_TORCHER_FLAM",
            "PRI_BLITZER", "PRI_PUNISHER_PLAS",
        ],
        secondaries: [
            "SEC_BUSHWACKER", "SEC_CRISPER", "SEC_REDEEMER",
            "SEC_SABER", "SEC_MACHETE", "SEC_GRENADE_PISTOL",
        ],
        throwables: [
            "THR_FRAG", "THR_PINEAPPLE", "THR_INCENDIARY",
            "THR_INCENDIARY_IMPACT", "THR_IMPACT", "THR_DYNAMITE",
            "THR_GAS", "THR_PYROTECH", "THR_ARC",
        ],
        stratagems: [
            "STRAT_EAGLE_CLUSTER", "STRAT_EAGLE_NAPALM",
            "STRAT_EAGLE_AIRSTRIKE", "STRAT_ORBITAL_GATLING",
            "STRAT_ORBITAL_AIRBURST", "STRAT_ORBITAL_NAPALM", "STRAT_ORBITAL_WALKING",
            "STRAT_FLAMETHROWER", "STRAT_HMG", "STRAT_GATLING_SENTRY",
            "STRAT_MG_SENTRY", "STRAT_MORTAR_SENTRY", "STRAT_FLAME_SENTRY",
            "STRAT_ANTI_PERSONNEL_MINES", "STRAT_INCENDIARY_MINES",
            "STRAT_GRENADE_LAUNCHER", "STRAT_STALWART", "STRAT_MACHINEGUN",
            "STRAT_MAXIGUN", "STRAT_GAS_MINES", "STRAT_HMG_EMPLACEMENT",
            "STRAT_AIRBURST_LAUNCHER",
        ],
    },

    support: {
        display_name: "Combat Quartermaster",
        description: "Because democracy runs best when someone remembers the ammo.",
        rationale: "The team-player loadout. Quiet primaries and utility secondaries pair with Shield Packs, Supply Packs, and smoke stratagems. The goal is keeping your squad alive and supplied, not topping the kill counter. Melee stuns and Stim Pistol round out the support toolkit.",
        color: "#26c6da",
        primaries: [
            "PRI_DEFENDER", "PRI_KNIGHT", "PRI_STA_SMG", "PRI_M7S_SMG",
            "PRI_LIBERATOR_CARB", "PRI_LIBERATOR", "PRI_STA_ASS_RIFLE",
            "PRI_LIBERATOR_PEN", "PRI_SUPPRESSOR",
        ],
        secondaries: [
            "SEC_STIM_PISTOL", "SEC_PEACEMAKER", "SEC_REDEEMER",
            "SEC_VERDICT", "SEC_SOCOM_PISTOL",
            "SEC_STUN_LANCE", "SEC_STUN_BATON",
        ],
        throwables: [
            "THR_SMOKE", "THR_SMOKESCREEN", "THR_STUN",
            "THR_SHIELD", "THR_LURE_MINE",
        ],
        stratagems: [
            "STRAT_MACHINEGUN", "STRAT_STALWART", "STRAT_HMG",
            "STRAT_AUTOCANNON", "STRAT_ANTI_MATERIEL", "STRAT_RECOILLESS",
            "STRAT_SUPPLY_PACK", "STRAT_SHIELD_PACK", "STRAT_SHIELD_GENERATOR",
            "STRAT_BALLISTIC_SHIELD", "STRAT_EMS_MORTAR", "STRAT_ORBITAL_SMOKE",
            "STRAT_EAGLE_SMOKE", "STRAT_EXPENDABLE_AT", "STRAT_BREACHING_HAMMER",
            "STRAT_SPEARGUN", "STRAT_DEFOLIATION_TOOL", "STRAT_ONE_TRUE_FLAG",
        ],
    },

    generalist: {
        display_name: "Jackboot Standard",
        description: "Jack of all trades, servant of Super Earth.",
        rationale: "A balanced all-rounder pool with no extreme specialization. Reliable rifles, versatile sidearms, and a broad mix of stratagems from support weapons to sentries and orbitals. Handles any mission profile without excelling at or neglecting any role.",
        color: "#78909c",
        primaries: [
            "PRI_LIBERATOR", "PRI_LIBERATOR_PEN", "PRI_ADJUDICATOR",
            "PRI_BREAKER", "PRI_SLUGGER", "PRI_SCORCHER_PLAS",
            "PRI_TENDERIZER", "PRI_JAR_DOMINATOR", "PRI_DILLIGENCE",
            "PRI_SICKLE_LAS", "PRI_DEFENDER", "PRI_VARIABLE",
            "PRI_DILLIGENCE_CS",
        ],
        secondaries: [
            "SEC_SENATOR", "SEC_VERDICT", "SEC_REDEEMER",
            "SEC_GRENADE_PISTOL", "SEC_BUSHWACKER",
        ],
        throwables: [
            "THR_FRAG", "THR_IMPACT", "THR_HIGH_EXPLOSIVE",
            "THR_INCENDIARY", "THR_STUN", "THR_THERMITE",
            "THR_SMOKE",
        ],
        stratagems: [
            "STRAT_MACHINEGUN", "STRAT_STALWART", "STRAT_HMG",
            "STRAT_AUTOCANNON", "STRAT_ANTI_MATERIEL", "STRAT_RECOILLESS",
            "STRAT_GRENADE_LAUNCHER", "STRAT_RAILGUN", "STRAT_QUASAR_CANNON",
            "STRAT_MG_SENTRY", "STRAT_GATLING_SENTRY", "STRAT_AUTOCANNON_SENTRY",
            "STRAT_MORTAR_SENTRY", "STRAT_ROCKET_SENTRY",
            "STRAT_HMG_EMPLACEMENT",
            "STRAT_GRENADIER_BATTLEMENT", "STRAT_BASTION", "STRAT_FAST_RECON",
            "STRAT_ORBITAL_PRECISION", "STRAT_ORBITAL_GATLING",
            "STRAT_ORBITAL_SMOKE", "STRAT_ORBITAL_120MM",
        ],
    },

    // ═══════════ DAMAGE TYPES ═══════════

    pyromaniac: {
        display_name: "Pyromaniac",
        description: "Applies liberty at extremely high temperatures.",
        rationale: "Everything burns. Flamethrowers, incendiary shotguns, napalm stratagems, and Thermite grenades make this pool a fire-damage commitment. Backed by the Flame Sentry and Hot Dog drone for passive area denial. Bring marshmallows.",
        color: "#ff5722",
        primaries: [
            "PRI_TORCHER_FLAM", "PRI_BREAKER_INCIN", "PRI_COOKOUT",
            "PRI_COYOTE", "PRI_DOUBLE_EDGE_SICKLE", "PRI_PURIFIER_PLAS",
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
            "STRAT_EXPENDABLE_NAPALM", "STRAT_EPOCH", "STRAT_BREACHING_HAMMER",
            "STRAT_EMS_MORTAR", "STRAT_EAGLE_110MM", "STRAT_ORBITAL_LASER",
        ],
    },

    grenadier: {
        display_name: "Ordinance Enthusiast",
        description: "Solves every problem by making it several smaller problems.",
        rationale: "Explosives in every slot. Plasma rifles, Grenade Pistols, and crossbows on the personal side; Grenade Launchers, Airburst, and orbital barrages on the stratagem side. Maximum blast radius, minimum subtlety. If it doesn't explode, it doesn't belong.",
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
        display_name: "Arcborne",
        description: "Introduces the enemy to the exciting future of electricity.",
        rationale: "Electric and stun-focused loadout built around the Arc Thrower, Tesla Tower, and EMS orbitals. Stun grenades, Stun Lances, and the Blitzer keep enemies locked down while the K-9 drone and mobility packs let you stay aggressive. Crowd control through voltage.",
        color: "#2196f3",
        primaries: [
            "PRI_BLITZER", "PRI_ACCELERATOR_RIFLE", "PRI_PACIFIER",
        ],
        secondaries: [
            "SEC_STUN_LANCE", "SEC_STUN_BATON", "SEC_LOYALIST",
        ],
        throwables: [
            "THR_ARC", "THR_STUN", "THR_URCHIN", "THR_SHIELD",
        ],
        stratagems: [
            "STRAT_ARC_THROWER", "STRAT_TESLA_TOWER", "STRAT_K9",
            "STRAT_ORBITAL_EMS", "STRAT_EMS_MORTAR", "STRAT_DE_ESCALATOR",
            "STRAT_JUMP_PACK", "STRAT_HOVER_PACK", "STRAT_SHIELD_GENERATOR",
            "STRAT_ORBITAL_LASER", "STRAT_WARP_PACK",
        ],
    },

    stinkbug: {
        display_name: "Biohazard Doctrine",
        description: "Turns the battlefield into an air quality emergency.",
        rationale: "Gas and area-denial themed. The entire primary and secondary pool is unlocked to compensate for the niche stratagem selection — Gas Mines, Orbital Gas, Sterilizer, and Dog Breath form the toxic core. Smoke and lure throwables add battlefield control. You win by making the air unbreathable.",
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
            "THR_LURE_MINE", "THR_THROWING_KNIFE", "THR_STUN",
        ],
        stratagems: [
            "STRAT_ORBITAL_GAS", "STRAT_GAS_MINES", "STRAT_STERILIZER",
            "STRAT_DOG_BREATH", "STRAT_EMS_MORTAR", "STRAT_SPEARGUN",
            "STRAT_TESLA_TOWER", "STRAT_FLAME_SENTRY", "STRAT_SUPPLY_PACK",
            "STRAT_HOVER_PACK",
        ],
    },

    laser_head: {
        display_name: "Proton Patriot",
        description: "Proof that concentrated light can carry concentrated freedom.",
        rationale: "All-energy loadout: lasers, plasma, and beam weapons across every slot. The Laser Cannon, Quasar, and Orbital Laser provide heavy damage while Rover and Laser Sentry add passive fire. Mobility packs synergize with heat-based weapons that never need ammo pickups.",
        color: "#29b6f6",
        primaries: [
            "PRI_SCYTHE_LAS", "PRI_SICKLE_LAS", "PRI_DOUBLE_EDGE_SICKLE",
            "PRI_ACCELERATOR_RIFLE", "PRI_TRIDENT",
        ],
        secondaries: [
            "SEC_DAGGER_LAS", "SEC_TALON",
        ],
        throwables: [
            "THR_STUN", "THR_IMPACT", "THR_SEEKER",
            "THR_SMOKE", "THR_SHIELD",
        ],
        stratagems: [
            "STRAT_LASER_CANNON", "STRAT_QUASAR_CANNON", "STRAT_ORBITAL_LASER",
            "STRAT_GUARD_DOG_ROVER", "STRAT_LASER_SENTRY",
            "STRAT_COMMANDO", "STRAT_SOLO_SILO", "STRAT_ORBITAL_RAILCANNON",
            "STRAT_HOVER_PACK", "STRAT_WARP_PACK",
        ],
    },

    // ═══════════ PLAYSTYLES ═══════════

    melee_maniac: {
        display_name: "Melee Maniac",
        description: "Why shoot the enemy from far away when you can terrify them personally?",
        rationale: "Close-quarters chaos. Shotguns and melee secondaries pair with mobility packs, shields, and smoke to get you into stabbing range. Breaching Hammer, Defoliation Tool, and One True Flag anchor the stratagem pool. The weapons are short-range because you should be too.",
        color: "#d32f2f",
        primaries: [
            "PRI_BREAKER", "PRI_BREAKER_SPNPR", "PRI_BREAKER_INCIN",
            "PRI_HALT", "PRI_DOUBLE_FREEDOM",
            "PRI_M90A_SGUN", "PRI_TORCHER_FLAM",
            "PRI_VARIABLE", "PRI_TRIDENT", "PRI_BLITZER",
        ],
        secondaries: [
            "SEC_SABER", "SEC_STUN_LANCE", "SEC_STUN_BATON",
            "SEC_HATCHET", "SEC_MACHETE", "SEC_BUSHWACKER", "SEC_CRISPER",
        ],
        throwables: [
            "THR_STUN", "THR_SMOKE", "THR_INCENDIARY",
            "THR_THROWING_KNIFE", "THR_URCHIN", "THR_LURE_MINE",
            "THR_SHIELD", "THR_THERMITE",
        ],
        stratagems: [
            "STRAT_BREACHING_HAMMER", "STRAT_DEFOLIATION_TOOL", "STRAT_ONE_TRUE_FLAG",
            "STRAT_SHIELD_PACK", "STRAT_BALLISTIC_SHIELD", "STRAT_DIRECTIONAL_SHIELD",
            "STRAT_JUMP_PACK", "STRAT_HOVER_PACK", "STRAT_WARP_PACK",
            "STRAT_SHIELD_GENERATOR", "STRAT_FLAMETHROWER",
            "STRAT_ARC_THROWER", "STRAT_STERILIZER", "STRAT_C4_PACK",
            "STRAT_ORBITAL_SMOKE", "STRAT_EAGLE_SMOKE", "STRAT_FLAME_SENTRY",
            "STRAT_SUPPLY_PACK", "STRAT_PORTABLE_HELLBOMB",
        ],
    },

    marksman: {
        display_name: "Deadeye Decree",
        description: "Delivers democracy one carefully placed round at a time.",
        rationale: "Precision-first loadout. Marksman rifles, scoped weapons, and the Senator provide accurate long-range fire. Stratagems focus on single-target elimination — Railgun, Spear, Orbital Railcannon, and Eagle 500kg. Smoke and stun grenades create the breathing room a marksman needs.",
        color: "#4caf50",
        primaries: [
            "PRI_AMENDMENT", "PRI_CONSTITUTION", "PRI_DEADEYE",
            "PRI_DILLIGENCE", "PRI_DILLIGENCE_CS", "PRI_CENSOR",
            "PRI_ADJUDICATOR", "PRI_SCYTHE_LAS", "PRI_ACCELERATOR_RIFLE",
        ],
        secondaries: [
            "SEC_SENATOR", "SEC_VERDICT", "SEC_WARRANT", "SEC_RE_EDUCATOR",
        ],
        throwables: [
            "THR_STUN", "THR_SEEKER", "THR_SMOKE",
            "THR_THROWING_KNIFE", "THR_SMOKESCREEN",
        ],
        stratagems: [
            "STRAT_ANTI_MATERIEL", "STRAT_RAILGUN", "STRAT_SPEARGUN",
            "STRAT_ORBITAL_PRECISION", "STRAT_ORBITAL_RAILCANNON",
            "STRAT_EAGLE_500KG", "STRAT_EAGLE_110MM",
            "STRAT_SPEAR", "STRAT_QUASAR_CANNON", "STRAT_WASP_LAUNCHER",
            "STRAT_SOLO_SILO", "STRAT_ORBITAL_LASER", "STRAT_LASER_SENTRY",
            "STRAT_HOVER_PACK",
        ],
    },

    stealth_diver: {
        display_name: "Blackout Operative",
        description: "Leaves nothing behind but completed objectives and confused survivors.",
        rationale: "Stealth and evasion focused. Suppressed weapons, compact SMGs, and smoke-based throwables keep your profile low. Mobility packs provide escape routes while Orbital Smoke and EMS cover your movement. The Railgun and Solo Silo handle threats quietly when stealth fails.",
        color: "#00695c",
        primaries: [
            "PRI_DEFENDER", "PRI_M7S_SMG", "PRI_SUPPRESSOR",
            "PRI_DILLIGENCE_CS", "PRI_LIBERATOR_CARB", "PRI_CENSOR",
        ],
        secondaries: [
            "SEC_SOCOM_PISTOL", "SEC_DAGGER_LAS", "SEC_VERDICT",
            "SEC_RE_EDUCATOR",
        ],
        throwables: [
            "THR_SMOKE", "THR_SMOKESCREEN", "THR_STUN",
            "THR_SHIELD", "THR_THROWING_KNIFE", "THR_LURE_MINE",
        ],
        stratagems: [
            "STRAT_ORBITAL_SMOKE", "STRAT_EAGLE_SMOKE", "STRAT_ORBITAL_EMS",
            "STRAT_JUMP_PACK", "STRAT_HOVER_PACK", "STRAT_WARP_PACK",
            "STRAT_SUPPLY_PACK", "STRAT_SHIELD_PACK",
            "STRAT_RAILGUN", "STRAT_SOLO_SILO", "STRAT_C4_PACK",
            "STRAT_ORBITAL_RAILCANNON", "STRAT_ANTI_PERSONNEL_MINES",
            "STRAT_DIRECTIONAL_SHIELD",
        ],
    },

    truffle_hunter: {
        display_name: "Rapid Acquisition Unit",
        description: "Digs up Super Earth's treasures before the enemy knows they were there.",
        rationale: "Speed-run and objective-focused. Light, fast primaries and mobility packs get you in and out of POIs. Eagle strikes provide rapid call-in support while Guard Dogs offer passive cover during looting. The pool is built for quick engagements, not prolonged firefights.",
        color: "#8d6e63",
        primaries: [
            "PRI_KNIGHT", "PRI_DEFENDER", "PRI_STA_SMG", "PRI_M7S_SMG",
            "PRI_LIBERATOR_CARB", "PRI_PUMMELER",
            "PRI_EXPLODING_XBOW", "PRI_SCYTHE_LAS", "PRI_TRIDENT",
            "PRI_LIBERATOR",
        ],
        secondaries: [
            "SEC_BUSHWACKER", "SEC_REDEEMER", "SEC_PEACEMAKER",
            "SEC_VERDICT", "SEC_SOCOM_PISTOL", "SEC_HATCHET",
            "SEC_MACHETE", "SEC_GRENADE_PISTOL", "SEC_LOYALIST",
        ],
        throwables: [
            "THR_STUN", "THR_INCENDIARY", "THR_THERMITE",
            "THR_URCHIN", "THR_FRAG", "THR_HIGH_EXPLOSIVE",
        ],
        stratagems: [
            "STRAT_JUMP_PACK", "STRAT_WARP_PACK",
            "STRAT_EAGLE_STRAFING", "STRAT_EAGLE_AIRSTRIKE", "STRAT_EAGLE_CLUSTER",
            "STRAT_EMS_MORTAR", "STRAT_FLAMETHROWER", "STRAT_FAST_RECON",
            "STRAT_ORBITAL_PRECISION", "STRAT_EAGLE_NAPALM",
            "STRAT_EAGLE_110MM", "STRAT_EAGLE_500KG",
            "STRAT_GUARD_DOG", "STRAT_GUARD_DOG_ROVER", "STRAT_K9",
        ],
    },

    // ═══════════ HARDWARE ═══════════

    mechdiver: {
        display_name: "Steel Cavalry",
        description: "When walking is not enough, arrive as a war crime with legs.",
        rationale: "Vehicle and mech-centered. Exosuits and the Fast Recon Vehicle anchor the stratagem pool, with Guard Dogs and auto-companions for sustained pressure. Personal weapons are versatile all-rounders since your mech does the heavy lifting. When the mech breaks, call another one.",
        color: "#546e7a",
        primaries: [
            "PRI_LIBERATOR", "PRI_DEFENDER", "PRI_KNIGHT",
            "PRI_BREAKER", "PRI_SLUGGER", "PRI_SICKLE_LAS",
            "PRI_SCORCHER_PLAS", "PRI_COYOTE", "PRI_PACIFIER",
            "PRI_ONETWO", "PRI_LIBERATOR_PEN", "PRI_DEADEYE",
            "PRI_REPRIMAND",
        ],
        secondaries: [
            "SEC_SENATOR", "SEC_VERDICT", "SEC_REDEEMER",
            "SEC_PEACEMAKER", "SEC_BUSHWACKER", "SEC_RE_EDUCATOR",
        ],
        throwables: [
            "THR_FRAG", "THR_HIGH_EXPLOSIVE",
            "THR_THERMITE", "THR_STUN", "THR_INCENDIARY",
            "THR_PINEAPPLE", "THR_SMOKESCREEN", "THR_SEEKER",
        ],
        stratagems: [
            "STRAT_EXO_PATRIOT", "STRAT_EXO_EMANCIPATOR",
            "STRAT_FAST_RECON", "STRAT_BASTION",
            "STRAT_GUARD_DOG", "STRAT_GUARD_DOG_ROVER", "STRAT_HOT_DOG",
            "STRAT_K9", "STRAT_DOG_BREATH", "STRAT_SUPPLY_PACK",
            "STRAT_MACHINEGUN", "STRAT_EXPENDABLE_AT", "STRAT_LASER_CANNON",
            "STRAT_HMG", "STRAT_DEFOLIATION_TOOL", "STRAT_ORBITAL_RAILCANNON",
            "STRAT_ANTI_TANK_MINES",
        ],
    },

    the_engineer: {
        display_name: "Fortification Specialist",
        description: "Why fight unfairly when turrets can do it for you?",
        rationale: "Turret and emplacement overload. Every sentry type is on the table alongside HMG Emplacements, Grenadier Battlements, and EMS Mortars. Personal weapons lean toward reliable mid-range options since your turrets handle the killing. The Supply Pack keeps the whole operation running.",
        color: "#fdd835",
        primaries: [
            "PRI_LIBERATOR", "PRI_LIBERATOR_PEN", "PRI_ADJUDICATOR",
            "PRI_DEFENDER", "PRI_TENDERIZER",
            "PRI_SCORCHER_PLAS", "PRI_SICKLE_LAS",
            "PRI_REPRIMAND", "PRI_DOUBLE_FREEDOM", "PRI_HALT",
            "PRI_DEADEYE", "PRI_JAR_DOMINATOR", "PRI_VARIABLE",
            "PRI_ERUPTOR",
        ],
        secondaries: [
            "SEC_VERDICT", "SEC_SENATOR", "SEC_REDEEMER",
            "SEC_GRENADE_PISTOL", "SEC_MACHETE", "SEC_STUN_BATON",
            "SEC_BUSHWACKER", "SEC_ULTIMATUM", "SEC_CRISPER",
        ],
        throwables: [
            "THR_STUN", "THR_SHIELD", "THR_SEEKER",
            "THR_IMPACT", "THR_THERMITE", "THR_ARC",
        ],
        stratagems: [
            "STRAT_ORBITAL_EMS",
            "STRAT_MG_SENTRY", "STRAT_GATLING_SENTRY", "STRAT_AUTOCANNON_SENTRY",
            "STRAT_MORTAR_SENTRY", "STRAT_ROCKET_SENTRY", "STRAT_TESLA_TOWER",
            "STRAT_EMS_MORTAR", "STRAT_FLAME_SENTRY", "STRAT_LASER_SENTRY",
            "STRAT_HMG_EMPLACEMENT", "STRAT_GRENADIER_BATTLEMENT", "STRAT_AT_EMPLACEMENT",
            "STRAT_GUARD_DOG", "STRAT_HOT_DOG", "STRAT_SUPPLY_PACK",
            "STRAT_ONE_TRUE_FLAG", "STRAT_RECOILLESS", "STRAT_AUTOCANNON",
            "STRAT_EXPENDABLE_AT",
        ],
    },

    // ═══════════ NEW POOLS ═══════════

    induction_kit: {
        display_name: "Induction Kit",
        description: "Everything a new Helldiver needs to spread democracy, panic responsibly, and survive at least one briefing.",
        rationale: "Starter-friendly with no trick weapons or niche picks. Straightforward rifles, basic grenades, and the broadest stratagem selection in the app. Eagles, orbitals, sentries, and the Jump Pack are all here — it is a sampler platter of everything Super Earth offers a fresh recruit.",
        color: "#4fc3f7",
        primaries: [
            "PRI_LIBERATOR", "PRI_LIBERATOR_PEN", "PRI_STA_ASS_RIFLE",
            "PRI_CONSTITUTION", "PRI_DILLIGENCE", "PRI_DEFENDER",
            "PRI_SLUGGER", "PRI_BREAKER",
        ],
        secondaries: [
            "SEC_PEACEMAKER", "SEC_VERDICT", "SEC_SENATOR",
            "SEC_HATCHET", "SEC_GRENADE_PISTOL",
        ],
        throwables: [
            "THR_FRAG", "THR_HIGH_EXPLOSIVE", "THR_STUN",
            "THR_SMOKE", "THR_THERMITE",
        ],
        stratagems: [
            "STRAT_MACHINEGUN", "STRAT_EXPENDABLE_AT", "STRAT_STALWART",
            "STRAT_ANTI_MATERIEL", "STRAT_GRENADE_LAUNCHER", "STRAT_FLAMETHROWER",
            "STRAT_ONE_TRUE_FLAG",
            "STRAT_ORBITAL_PRECISION", "STRAT_ORBITAL_GATLING",
            "STRAT_ORBITAL_120MM", "STRAT_ORBITAL_SMOKE", "STRAT_ORBITAL_RAILCANNON",
            "STRAT_EAGLE_STRAFING", "STRAT_EAGLE_AIRSTRIKE",
            "STRAT_EAGLE_CLUSTER", "STRAT_EAGLE_500KG",
            "STRAT_ANTI_PERSONNEL_MINES", "STRAT_ANTI_TANK_MINES",
            "STRAT_SHIELD_GENERATOR",
            "STRAT_MG_SENTRY", "STRAT_MORTAR_SENTRY",
            "STRAT_SUPPLY_PACK", "STRAT_JUMP_PACK",
            "STRAT_BALLISTIC_SHIELD", "STRAT_GUARD_DOG",
        ],
    },

    the_historian: {
        display_name: "The Historian",
        description: "Proves that even obsolete equipment can still produce modern casualties.",
        rationale: "Old-school and low-tech themed. Lever-actions, pump shotguns, and conventional firearms dominate the weapon pool. Stratagems lean toward classic call-ins — Airstrikes, Napalm, basic Machine Guns, and the humble Supply Pack. No lasers, no plasma, just lead and gunpowder.",
        color: "#a1887f",
        primaries: [
            "PRI_LIBERATOR", "PRI_LIBERATOR_CONC", "PRI_LIBERATOR_CARB",
            "PRI_COYOTE", "PRI_CONSTITUTION", "PRI_DEADEYE",
            "PRI_DOUBLE_FREEDOM", "PRI_BREAKER_SPNPR", "PRI_M90A_SGUN",
            "PRI_HALT", "PRI_VARIABLE",
        ],
        secondaries: [
            "SEC_VERDICT", "SEC_SENATOR", "SEC_REDEEMER",
            "SEC_HATCHET", "SEC_MACHETE", "SEC_BUSHWACKER",
        ],
        throwables: [
            "THR_FRAG", "THR_PINEAPPLE", "THR_DYNAMITE",
            "THR_STUN", "THR_THERMITE", "THR_SMOKE",
            "THR_THROWING_KNIFE",
        ],
        stratagems: [
            "STRAT_MACHINEGUN", "STRAT_ANTI_MATERIEL", "STRAT_FLAMETHROWER",
            "STRAT_GRENADE_LAUNCHER", "STRAT_SPEAR", "STRAT_SPEARGUN",
            "STRAT_EXPENDABLE_NAPALM", "STRAT_C4_PACK", "STRAT_ONE_TRUE_FLAG",
            "STRAT_ORBITAL_NAPALM", "STRAT_ORBITAL_GAS", "STRAT_ORBITAL_SMOKE",
            "STRAT_EAGLE_STRAFING", "STRAT_EAGLE_AIRSTRIKE",
            "STRAT_EAGLE_CLUSTER", "STRAT_EAGLE_SMOKE",
            "STRAT_EAGLE_NAPALM", "STRAT_EAGLE_110MM",
            "STRAT_HMG_EMPLACEMENT", "STRAT_GRENADIER_BATTLEMENT",
            "STRAT_ANTI_PERSONNEL_MINES", "STRAT_MORTAR_SENTRY",
            "STRAT_SUPPLY_PACK", "STRAT_BALLISTIC_SHIELD",
            "STRAT_FAST_RECON", "STRAT_BASTION",
        ],
    },

    problem_solver: {
        display_name: "Problem Solver Mk.II",
        description: "It's simple. Enemy East? Remove East.",
        rationale: "Maximum firepower, zero restraint. The biggest primaries, heaviest stratagems, and most destructive ordnance available. Orbital barrages, Exosuits, Portable Hellbombs, and the Bastion all make the list. Collateral damage is a feature, not a bug.",
        color: "#e53935",
        primaries: [
            "PRI_LIBERATOR_PEN", "PRI_COYOTE", "PRI_MAC5_ASS_RIFLE",
            "PRI_ADJUDICATOR", "PRI_ONETWO", "PRI_DEADEYE",
            "PRI_DILLIGENCE_CS", "PRI_AMENDMENT", "PRI_REPRIMAND",
            "PRI_SLUGGER", "PRI_HALT", "PRI_DOUBLE_FREEDOM",
            "PRI_BREAKER_INCIN", "PRI_EXPLODING_XBOW", "PRI_ERUPTOR",
            "PRI_PURIFIER_PLAS", "PRI_TRIDENT", "PRI_ACCELERATOR_RIFLE",
            "PRI_PUNISHER_PLAS", "PRI_TORCHER_FLAM", "PRI_JAR_DOMINATOR",
        ],
        secondaries: [
            "SEC_WARRANT", "SEC_SENATOR", "SEC_VERDICT",
            "SEC_STUN_LANCE", "SEC_SABER", "SEC_GRENADE_PISTOL",
            "SEC_ULTIMATUM", "SEC_CRISPER",
        ],
        throwables: [
            "THR_DYNAMITE", "THR_HIGH_EXPLOSIVE", "THR_PINEAPPLE",
            "THR_THERMITE", "THR_PYROTECH", "THR_SEEKER", "THR_GAS",
        ],
        stratagems: [
            "STRAT_GRENADE_LAUNCHER", "STRAT_AUTOCANNON",
            "STRAT_AIRBURST_LAUNCHER", "STRAT_EPOCH",
            "STRAT_EXPENDABLE_NAPALM", "STRAT_DE_ESCALATOR",
            "STRAT_SOLO_SILO", "STRAT_BELT_FED_GL", "STRAT_MAXIGUN",
            "STRAT_ORBITAL_120MM", "STRAT_ORBITAL_380MM",
            "STRAT_ORBITAL_AIRBURST", "STRAT_ORBITAL_WALKING",
            "STRAT_ORBITAL_NAPALM",
            "STRAT_EAGLE_AIRSTRIKE", "STRAT_EAGLE_CLUSTER",
            "STRAT_EAGLE_NAPALM", "STRAT_EAGLE_500KG",
            "STRAT_GRENADIER_BATTLEMENT", "STRAT_AT_EMPLACEMENT",
            "STRAT_AUTOCANNON_SENTRY", "STRAT_MORTAR_SENTRY",
            "STRAT_EMS_MORTAR", "STRAT_ROCKET_SENTRY",
            "STRAT_HOT_DOG", "STRAT_K9", "STRAT_PORTABLE_HELLBOMB",
            "STRAT_EXO_PATRIOT", "STRAT_EXO_EMANCIPATOR", "STRAT_BASTION",
        ],
    },

    democracys_intern: {
        display_name: "Democracy's Intern",
        description: "Here to learn, serve, and require constant supervision from a safe distance.",
        rationale: "Low-threat support role. Basic weapons, defensive throwables, and utility-heavy stratagems like shields, smoke, and mobility packs. No heavy ordnance — just enough firepower to contribute without endangering the squad. The training wheels loadout for cautious divers.",
        color: "#81c784",
        primaries: [
            "PRI_LIBERATOR", "PRI_LIBERATOR_PEN", "PRI_LIBERATOR_CARB",
            "PRI_PACIFIER", "PRI_AMENDMENT", "PRI_DILLIGENCE",
            "PRI_DEFENDER", "PRI_KNIGHT", "PRI_PUNISHER",
            "PRI_BREAKER", "PRI_SLUGGER", "PRI_SCYTHE_LAS",
            "PRI_SICKLE_LAS",
        ],
        secondaries: [
            "SEC_PEACEMAKER", "SEC_REDEEMER", "SEC_VERDICT",
            "SEC_STUN_BATON", "SEC_HATCHET", "SEC_STIM_PISTOL",
            "SEC_TALON", "SEC_DAGGER_LAS",
        ],
        throwables: [
            "THR_IMPACT", "THR_FRAG", "THR_STUN",
            "THR_SMOKE", "THR_THROWING_KNIFE", "THR_LURE_MINE",
            "THR_SHIELD", "THR_SMOKESCREEN",
        ],
        stratagems: [
            "STRAT_STALWART", "STRAT_EXPENDABLE_AT", "STRAT_COMMANDO",
            "STRAT_SPEAR", "STRAT_WASP_LAUNCHER",
            "STRAT_ORBITAL_PRECISION", "STRAT_ORBITAL_GAS",
            "STRAT_ORBITAL_SMOKE", "STRAT_ORBITAL_EMS",
            "STRAT_EAGLE_SMOKE", "STRAT_EAGLE_110MM",
            "STRAT_SHIELD_GENERATOR",
            "STRAT_MG_SENTRY", "STRAT_ROCKET_SENTRY",
            "STRAT_SUPPLY_PACK", "STRAT_JUMP_PACK", "STRAT_HOVER_PACK",
            "STRAT_BALLISTIC_SHIELD", "STRAT_SHIELD_PACK",
            "STRAT_DIRECTIONAL_SHIELD",
        ],
    },

    court_marshal: {
        display_name: "Court Marshal Candidate",
        description: "Proudly redefining \"acceptable losses\" one squadmate at a time.",
        rationale: "Friendly-fire maximizer. Every weapon and stratagem is chosen for its team-killing potential — arc weapons, flamers, explosive launchers, mine fields, and the Portable Hellbomb. If it can hurt your squad, it is in this pool. Bring extra reinforcements.",
        color: "#ff7043",
        primaries: [
            "PRI_PACIFIER", "PRI_COYOTE", "PRI_ADJUDICATOR",
            "PRI_TENDERIZER", "PRI_DOUBLE_FREEDOM", "PRI_HALT",
            "PRI_BREAKER_INCIN", "PRI_EXPLODING_XBOW", "PRI_ERUPTOR",
            "PRI_PUNISHER_PLAS", "PRI_BLITZER", "PRI_TRIDENT",
            "PRI_DOUBLE_EDGE_SICKLE", "PRI_TORCHER_FLAM",
        ],
        secondaries: [
            "SEC_STUN_LANCE", "SEC_STUN_BATON", "SEC_GRENADE_PISTOL",
            "SEC_ULTIMATUM", "SEC_CRISPER", "SEC_LOYALIST",
        ],
        throwables: [
            "THR_DYNAMITE", "THR_PINEAPPLE", "THR_INCENDIARY",
            "THR_INCENDIARY_IMPACT", "THR_GAS", "THR_PYROTECH", "THR_ARC",
        ],
        stratagems: [
            "STRAT_GRENADE_LAUNCHER", "STRAT_FLAMETHROWER",
            "STRAT_AIRBURST_LAUNCHER", "STRAT_ARC_THROWER",
            "STRAT_EPOCH", "STRAT_EXPENDABLE_NAPALM",
            "STRAT_AUTOCANNON", "STRAT_WASP_LAUNCHER",
            "STRAT_LEVELLER", "STRAT_SOLO_SILO",
            "STRAT_ORBITAL_120MM", "STRAT_ORBITAL_380MM",
            "STRAT_ORBITAL_WALKING", "STRAT_ORBITAL_LASER",
            "STRAT_ORBITAL_NAPALM",
            "STRAT_EAGLE_AIRSTRIKE", "STRAT_EAGLE_CLUSTER",
            "STRAT_EAGLE_NAPALM", "STRAT_EAGLE_500KG",
            "STRAT_ANTI_PERSONNEL_MINES", "STRAT_INCENDIARY_MINES",
            "STRAT_GAS_MINES",
            "STRAT_GATLING_SENTRY", "STRAT_MORTAR_SENTRY",
            "STRAT_TESLA_TOWER", "STRAT_LASER_SENTRY", "STRAT_FLAME_SENTRY",
            "STRAT_GUARD_DOG", "STRAT_GUARD_DOG_ROVER",
            "STRAT_HOT_DOG", "STRAT_K9", "STRAT_DOG_BREATH",
            "STRAT_PORTABLE_HELLBOMB", "STRAT_WARP_PACK",
        ],
    },
};
