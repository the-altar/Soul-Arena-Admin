const ADD_FILE = function(state, payload){
    state.files[payload.filename] = payload.file
}

const RESET = function(state){
    state.files = {}
}

export default {
    ADD_FILE,
    RESET
}