const navTo = (navigator, key, data, url, openModal) => {

    const isFalse =  (value) => {
        if (Array.isArray(value)) {
            if (value.length <= 0){
                return false
            }
        }
        else {
            if (typeof value !== "number" && !value){
                return false
            }
        }
        return true
    }
    if (key in data && isFalse(data[key])){
        return navigator(url)
    }
    else {
        return openModal()
    }
}
export default navTo