const reiatsuTypes = function(){
    const costs = {}
    const c = this.$store.getters['enums/getEnum']("reiatsuTypings")
    for(const key in Object.keys(c).slice(0,5)){
        costs[key]=c[key]
    }
    return costs
}

const newChar=function(){
    if(this.$route.params.id === "new") return true
    return false
}

export default {
    newChar,
    reiatsuTypes
}