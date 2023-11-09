const navTo = (navigator, key, data, url) => {
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
        return alert('항목을 선택해 주세요!')
    }
}
export default navTo