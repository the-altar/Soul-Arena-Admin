const submitHandler = async function () {
    const isNew = (this.$route.params.id === "new")
    try {
        if(isNew) await this.$axios.post("/skill/new", [this.skill])
        else await this.$axios.post("/skill/update", [this.skill, this.skillId, this.assignedEntity, this.priority])
        alert("Uploaded")
    } catch (err) {
        alert(err)
    }
}

const saveNewEffect = async function () {
    this.skill.effects.push(this.newEffect)
    try {
        await this.$axios.post("/character/update", this.char)
    } catch (err) {
        alert(err)
    }
}

const deleteEffect = async function (effectIndex) {
    this.skill.effects.splice(effectIndex, 1)
    console.log(this.skill.effects)
    try {
        await this.$axios.post("/character/update", this.char)
    } catch (err) {
        alert(err)
    }
}

const displayEffects = async function(e){
    e.preventDefault();
    this.effectDisplay = true;
}

const createNewEffect = function(){
    if(this.newEffect !== null) {
        console.log(this.skill.effects)
        this.skill.effects.push({type:this.newEffect})
    }
}

export default {
    createNewEffect,
    displayEffects,
    submitHandler,
    saveNewEffect,
    deleteEffect,
}