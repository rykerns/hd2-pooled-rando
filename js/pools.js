export const POOLS = {
    tank_killer: {
        display_name: "Tank Killer",
        description: "Heavy anti-armor. Penetrate everything.",
        color: "#ef5350",
        primaries: [
            "PRI_ERUPTOR", "PRI_DOUBLE_EDGE_SICKLE", "PRI_TORCHER_FLAM",
            "PRI_EXPLODING_XBOW", "PRI_JAR_DOMINATOR", "PRI_SCORCHER_PLAS",
            "PRI_PURIFIER_PLAS", "PRI_SLUGGER",
        ],
        secondaries: [
            "SEC_SENATOR", "SEC_ULTIMATUM", "SEC_GRENADE_PISTOL", "SEC_VERDICT",
        ],
        throwables: [
            "THR_THERMITE", "THR_HIGH_EXPLOSIVE", "THR_IMPACT", "THR_DYNAMITE",
        ],
        stratagems: [
            "STRAT_RECOILLESS", "STRAT_ORBITAL_RAILCANNON", "STRAT_AUTOCANNON",
            "STRAT_EAGLE_500KG", "STRAT_ORBITAL_LASER", "STRAT_SPEAR",
            "STRAT_RAILGUN", "STRAT_QUASAR_CANNON", "STRAT_EXPENDABLE_AT",
            "STRAT_EXO_EMANCIPATOR", "STRAT_COMMANDO",
        ],
    },

    fire_support: {
        display_name: "Fire Support",
        description: "Rain fire from above. Burn it all down.",
        color: "#ff9800",
        primaries: [
            "PRI_COOKOUT", "PRI_BREAKER_INCIN", "PRI_TORCHER_FLAM",
            "PRI_COYOTE", "PRI_SCORCHER_PLAS", "PRI_PUNISHER_PLAS",
        ],
        secondaries: [
            "SEC_CRISPER", "SEC_GRENADE_PISTOL", "SEC_ULTIMATUM", "SEC_LOYALIST",
        ],
        throwables: [
            "THR_INCENDIARY", "THR_INCENDIARY_IMPACT", "THR_THERMITE", "THR_PYROTECH",
        ],
        stratagems: [
            "STRAT_EAGLE_NAPALM", "STRAT_FLAMETHROWER", "STRAT_EAGLE_AIRSTRIKE",
            "STRAT_ORBITAL_LASER", "STRAT_EAGLE_500KG", "STRAT_ORBITAL_NAPALM",
            "STRAT_INCENDIARY_MINES", "STRAT_ORBITAL_120MM", "STRAT_EAGLE_CLUSTER",
        ],
    },

    energy_weapons: {
        display_name: "Energy Weapons",
        description: "Lasers, plasma, and arc tech. No ammo problems.",
        color: "#42a5f5",
        primaries: [
            "PRI_SCYTHE_LAS", "PRI_SICKLE_LAS", "PRI_DOUBLE_EDGE_SICKLE",
            "PRI_SCORCHER_PLAS", "PRI_PURIFIER_PLAS", "PRI_PUNISHER_PLAS",
            "PRI_BLITZER", "PRI_ACCELERATOR_RIFLE",
        ],
        secondaries: [
            "SEC_DAGGER_LAS", "SEC_TALON", "SEC_LOYALIST",
        ],
        throwables: [
            "THR_INCENDIARY", "THR_STUN", "THR_IMPACT", "THR_FRAG",
        ],
        stratagems: [
            "STRAT_ORBITAL_LASER", "STRAT_ARC_THROWER", "STRAT_LASER_CANNON",
            "STRAT_QUASAR_CANNON", "STRAT_TESLA_TOWER", "STRAT_GUARD_DOG_ROVER",
            "STRAT_ORBITAL_EMS", "STRAT_SHIELD_PACK",
        ],
    },

    crowd_control: {
        display_name: "Crowd Control",
        description: "Stun, slow, and suppress. Hold the line.",
        color: "#ab47bc",
        primaries: [
            "PRI_PACIFIER", "PRI_PUMMELER", "PRI_HALT", "PRI_BLITZER",
            "PRI_BREAKER", "PRI_BREAKER_SPNPR", "PRI_LIBERATOR_CONC",
        ],
        secondaries: [
            "SEC_STUN_LANCE", "SEC_STUN_BATON", "SEC_BUSHWACKER", "SEC_SABER",
        ],
        throwables: [
            "THR_STUN", "THR_GAS", "THR_SMOKE", "THR_URCHIN",
        ],
        stratagems: [
            "STRAT_ARC_THROWER", "STRAT_HMG_EMPLACEMENT", "STRAT_TESLA_TOWER",
            "STRAT_SHIELD_GENERATOR", "STRAT_SHIELD_PACK", "STRAT_EMS_MORTAR",
            "STRAT_ORBITAL_EMS", "STRAT_ORBITAL_GAS", "STRAT_GATLING_SENTRY",
            "STRAT_ANTI_PERSONNEL_MINES",
        ],
    },
};
