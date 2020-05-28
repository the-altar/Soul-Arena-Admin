const getFiles = function (state) {

    let formData = new FormData()

    for (const i in state.files) {
        const newFile = new File([state.files[i]], i, {
            type: state.files[i].type,
        });
        console.log(newFile)

        formData.append(newFile.name, newFile)
    }

    return formData
}

export default {
    getFiles
}