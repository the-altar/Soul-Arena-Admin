import axios from 'axios'

const fileUpload = function (event) {
    this.preview = URL.createObjectURL(event.target.files[0]);
    let filename;

    if (this.charFacepic) {
        console.log("update");
        filename = this.charFacepic;
    } else {
        filename = Math.random()
            .toString(36)
            .substr(2, 5);
        this.setCharFacepic(filename);
    }

    this.$store.commit("files/ADD_FILE", {
        filename: filename,
        file: event.target.files[0]
    });
}

const deleteChar = function () {
    const url = "/character/delete"
    const char = this.$store.state.character
    axios.post(url, char)
        .then(res => {
            if (res.data.code) {
                this.$router.push({ name: 'Home' });
            }
        })
        .catch(err => { alert(err) })
}

const showProgress = function () {
    let url;
    let c = this.$store.state.character
    for (const i in this.$store.state.character.skills) {
        if (this.$store.state.character.skills[i].id === undefined) {
            this.$store.state.character.skills[i].id = Math.random()
                .toString(36)
                .substr(2, 15);
        }
    }

    if (!this.$store.state.character._id) {
        url = "/character/new"
        delete c['_id']
    }
    else url = "/character/update";

    axios
        .post(url, c)
        .then(() => {
            this.$router.push({ name: 'Home' });
        })
        .catch(err => {
            console.log(err);
        });
}

const checkUploads = function () {
    let form = this.$store.getters["files/getFiles"];

    form.append("json", JSON.stringify(this.$store.state.character));

    axios({
        method: "post",
        url: "/character/upload",
        data: form,
        headers: { "Content-Type": "multipart/form-data" }
    })
        .then(response => {
            //handle success
            this.$store.commit("files/RESET")
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}

const emitCompSelection = function (comp) {
    this.$emit('comp-selection', comp)
}

export default {
    fileUpload,
    deleteChar,
    showProgress,
    checkUploads,
    emitCompSelection
}