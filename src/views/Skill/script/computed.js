const costTypes = function () {
    return this.$store.getters["enums/getEnum"]("costTypings");
}

const skillCost = function () {
    if (this.char) {
        return this.char.skills[this.skillIndex].cost
    }
    return false
}

const reiatsuCost = function(){
    return this.$store.getters['enums/getEnum']("reiatsuTypings")
}

const classes = function () {
    return this.$store.getters['enums/getEnum']("skillClassTypings")
}

const controlClasses = function(){
    return this.$store.getters['enums/getEnum']("controlTypings")
}

const targetClasses = function () {
    return this.$store.getters['enums/getEnum']("targetModeTypings")
}

const pokemonTypes = function () {
    return this.$store.getters['enums/getEnum']("pokemonTypings")
}

const effectTypes = function () {
    return this.$store.getters['enums/getEnum']("effectTypings")
}

const effectTypesEnums = function () {
    return this.$store.getters['enums/getEnum']("effectTypings")
}

const entities = function () {
    let b = {}
    for (const obj of this.charIds) {
        b[obj.id] = obj.name
    }
    return b
}

const skillEffects = function () {
    return this.skill.effects
}

export default {
    effectTypesEnums,
    targetClasses,
    pokemonTypes,
    reiatsuCost,
    controlClasses,
    skillEffects,
    effectTypes,
    skillCost,
    costTypes,
    entities,
    classes,
}