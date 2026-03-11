export const POOLS = {

    // ═══════════ COMBAT ROLES ═══════════

    anti_heavy: {
        display_name: "Titanbreaker",
        description: "For when liberty needs a big hole punched through something.",
        rationale: "Approved for the immediate correction of oversized enemies. This pool prioritizes heavy-penetration weapons, anti-tank stratagems, and anything capable of arguing with armor plating on equal terms. Recoilless Rifles, Railguns, Thermite, and other hard-hitting tools ensure that if it is large, hostile, and heavily armored, it can still be made to regret existing.",
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
        rationale: "For Helldivers who understand that quantity is a quality all its own. This pool specializes in deleting swarms with high volume fire, flame, splash damage, and area denial. Shotguns, flamers, sentries, and anti-horde stratagems keep the enemy population at manageable patriotic levels, even if armor penetration is not the primary concern.",
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
        rationale: "Victory is easier when the squad is still standing. This pool is built around support-minded weapons, supply tools, shield options, smoke cover, and utility picks that keep your team fighting longer. It is less concerned with personal glory and more concerned with the continued operation of everyone else's firearms.",
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
        rationale: "The dependable standard for Helldivers who prefer flexibility over theatrics. This pool maintains a balanced mix of rifles, sidearms, support options, sentries, and offensive stratagems without leaning too heavily into any one specialty. It may not dominate a single role, but it remains ready for nearly any battlefield inconvenience.",
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
        rationale: "Fire remains one of Super Earth's most persuasive diplomatic tools. This pool commits fully to incendiary weapons, flamethrowers, napalm, thermite, and flame-based denial systems that turn chokepoints into cautionary tales. It is ideal for divers who believe every engagement benefits from additional heat.",
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
        rationale: "Precision is optional. Explosions are mandatory. This pool concentrates on explosive primaries, grenade-capable secondaries, launchers, barrages, and high-yield stratagems designed to solve most problems by removing the surrounding terrain. Best employed by personnel comfortable with blast radii and official incident forms.",
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
        rationale: "A proud celebration of electricity, disruption, and involuntary enemy compliance. This pool uses arc weapons, stun tools, Tesla-based defenses, and EMS support to lock down enemy advances while delivering sustained electrical punishment. It trades raw simplicity for control, aggression, and the occasional reminder that spacing matters.",
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
        rationale: "The battlefield belongs to whoever makes it least habitable. This pool is centered on gas, corrosive denial, lingering hazards, and control-oriented tools that punish movement and occupation of key areas. Because its stratagem identity is more specialized, the weapon pool remains broader to preserve mission flexibility while the air itself handles the killing.",
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
        rationale: "Concentrated energy, officially sanctioned. This pool focuses on lasers, plasma, beam weapons, and heat-based systems that provide sustained damage without the usual dependence on ammunition resupply. Supported by energy stratagems, beam weapons, and passive laser companions, it favors mobility, target discipline, and a healthy respect for heat management.",
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
        rationale: "Recommended for Helldivers who believe personal space is an undemocratic concept. This pool is built for close-quarters aggression with short-range weapons, melee-focused support choices, mobility tools, shields, and smoke to help close distance quickly. It does not ask whether engaging at knife range is wise, only whether you are committed.",
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
        rationale: "Accuracy is liberty delivered efficiently. This pool emphasizes precision rifles, scoped weapons, high-damage single-target tools, and stratagems suited for removing priority threats before they become immediate problems. Smoke, stuns, and other spacing tools help maintain the breathing room required for disciplined marksmanship.",
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
        rationale: "Sometimes the most effective Helldiver is the one the enemy never notices until it is too late. This pool favors compact firearms, quieter weapon profiles, smoke tools, mobility packs, and controlled-response stratagems that support stealth, repositioning, and clean objective work. When subtlety fails, it still carries enough force to restore order quickly.",
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
        rationale: "Efficiency is patriotism measured in extracted valuables. This pool is built for speed, objective completion, and sample recovery, using light weapons, fast-response stratagems, and mobility options to get in and out before the local population becomes difficult. It is less concerned with prolonged engagements and more concerned with finishing the job before anyone can object.",
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
        rationale: "Why walk into danger when several tons of armored democracy can arrive first. This pool revolves around exosuits, vehicles, and automated support systems that project force through durability and sustained firepower. Personal weapons remain practical and versatile, but the real intent is simple: let the machine do the talking until it explodes.",
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
        rationale: "Some Helldivers advance. Others improve the terrain. This pool is dedicated to sentries, emplacements, mortars, and layered defensive tools that transform open ground into a supervised kill zone. Personal weapons provide dependable mid-range coverage, while packs and support tools keep the defensive network operating at full patriotic efficiency.",
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
        rationale: "The officially recommended introduction to enthusiastic overreaction. This pool avoids overly niche or complicated gear in favor of straightforward rifles, common explosives, dependable utility tools, and a broad sampling of offensive and defensive stratagems. It is designed to give new Helldivers access to a little of everything without immediately requiring advanced judgment.",
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
        rationale: "A proud reminder that older methods are still perfectly capable of producing modern casualties. This pool leans into conventional firearms, classic support weapons, and simpler stratagems built around lead, explosives, and direct application of force. It avoids the flashier ends of Super Earth's arsenal in favor of gear that feels traditional, proven, and only slightly outdated.",
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
        rationale: "For situations requiring immediate, overwhelming, and highly visible solutions. This pool gathers some of the heaviest weapons, most destructive stratagems, and least subtle battlefield options available, including barrages, mechs, siege tools, and catastrophic utility items. It is ideal for Helldivers who believe restraint is just delayed victory.",
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
        rationale: "Every great Helldiver begins with supervised enthusiasm. This pool favors simple weapons, defensive throwables, shields, smoke, mobility tools, and other utility-focused options that allow newer or more cautious players to contribute without constantly endangering nearby personnel. It keeps the stakes low, the tools useful, and the learning experience mostly survivable.",
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
        rationale: "A powerful reminder that friendly fire is still fire, and therefore still technically effective. This pool is built from weapons and stratagems notorious for collateral damage, including arc systems, flamers, explosives, mines, and other tools that do not always distinguish between enemy positions and squad formation errors. Best deployed by Helldivers with strong reflexes, poor impulse control, or a large reinforcement budget.",
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
