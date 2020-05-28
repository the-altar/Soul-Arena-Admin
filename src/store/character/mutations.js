const SET_NAME = function (state, name) {
    state.name = name
}

const SET_DESCRIPTION = function (state, description) {
    state.description = description
}

const SET_SKILL_BANNER = function (state, payload) {
    state.skills[payload.index].banner = payload.bannerName
}

const SET_FACE_PICTURE = function (state, facePicture) {
    state.facepic = facePicture
}

const SET_HP = function (state, hp) {
    state.hitPoints = hp
}

const SET_CHARACTER = function (state, char) {
    state.facepic = char.facepic
    state.banner = char.banner
    state.skills = char.skills
    state.description = char.description
    state.name = char.name
    state.energyGain = char.energyGain
    state.hitPoints = char.hitPoints
    state._id = char._id
    if(char.type === undefined){
        state.type = {}
    } else {
        state.type = char.type
    }
}

const ADD_SKILL = function (state) {
    const skill = {
        cost: [0, 0, 0, 0, 0],
        effects: [],
        disabled: false,
        id: Math.random()
            .toString(36)
            .substr(2, 10)
    }
    state.skills.push(skill)
}

const ADD_SKILL_EFFECT = function (state, x) {
    const effect = {
        type: {},
        activationType: {},
        id: Math.random()
            .toString(36)
            .substr(2, 10)
    }
    state.skills[x].effects.push(effect)
}

const SET_CHAR_BANNER = function (state, banner) {
    state.banner = banner
}

const START_DAMAGE_TYPE = function (state, payload) {
    state.skills[payload.sIndex].effects[
        payload.eIndex
    ].damageType = {}
}

const DELETE_EFFECT = function(state, payload){
    state.skills[payload.skillIndex].effects.splice(payload.effectIndex, 1)
}

export default {
    SET_DESCRIPTION,
    SET_FACE_PICTURE,
    SET_CHAR_BANNER,
    SET_SKILL_BANNER,
    SET_CHARACTER,
    SET_HP,
    SET_NAME,
    ADD_SKILL,
    DELETE_EFFECT,
    ADD_SKILL_EFFECT,
    START_DAMAGE_TYPE
}