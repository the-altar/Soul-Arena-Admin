import axios from 'axios'

const sendData = async function (data) {
    // (in the demo we show the data object at this point)
    // Send data to your server
    await axios.put('/upload', data)
}

const deleteChar = async function(id){
    try {
       const res = await this.$axios.post("/character/delete", id) 
       if(res) this.$router.go()
    }catch(err){
        alert(err)
    }
}


export default {
    sendData,
    deleteChar,
}