const submitHandler = async function (data) {
    
    this.character.description = data.description
    this.character.name = data.name
    this.character.type = data.type.map(v => parseInt(v, 10));
    this.character.energyGain = this.character.energyGain.map(v => parseInt(v, 10));

    let charData = { ...this.character }
    delete charData.id
    delete charData.released
    delete charData.isFree
    
    try {
        if (this.newChar) await this.$axios.post("/character/new", [this.character.released, charData, data.isFree])
        else await this.$axios.post("/character/update", [this.character.id, this.character.released, charData, data.isFree])
    } catch (err) {
        alert(err)
    }
}
export default {
    submitHandler
}