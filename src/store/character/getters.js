const getName = function(state){ return state.name }

const getDescription = function(state){ return state.name }

const getFacePicture = function(state){ return state.facepic }

const getBanner = function(state){ return state.banner }

const getReleaseStatus = function(state){ return state.releaseStatus }

const getHp = function(state){ return state.hitPoints }

const getId = function(state){ return state._id }

const getSp = function(state){ return state.skillPoints }

const getSkills = function(state){ return state.skills }

const getSkillEffect = function(state){
    return (index) => {
        return state.skills[index].effects
    }
}

const getSkillId = function(state){
    return index =>{
        return state.skills[index].id
    }
}


export default {
    getDescription,
    getHp,
    getName,
    getBanner,
    getFacePicture,
    getReleaseStatus,
    getSkillEffect,
    getSkillId,
    getSp,
    getSkills,
    getId
}