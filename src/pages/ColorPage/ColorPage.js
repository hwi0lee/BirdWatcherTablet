import styles from "./ColorPage.module.css";
import { useNavigate } from "react-router"
import classNames from "classnames/bind"
import { useState, useEffect, useContext } from "react"
import DataContext from "../../DataContext"

// class limList extends Array {
//     constructor(maxlen) {
//         super()
//         this.maxlen = maxlen
//     }

//     maxAppend = (num) => {
//         if (this.length <= this.maxlen-1){
//             this.push(num)
//         }
//         else{
//             this.shift()
//             this.push(num)
//         }
//     }
// }

const ColorPage = () => {
    const MAXSEL = 3
    const [colorlist, setColorlist] = useState([])
    const navigator = useNavigate()
    const {data, setData} = useContext(DataContext)
    const cx = classNames.bind(styles)
    useEffect(() => {
        setData({...data, "color":colorlist})
        console.log(data['color'])
    }, [colorlist])
    const setWhite = () => {
        if (colorlist.length >= MAXSEL){
            setColorlist([...colorlist, "White"].slice(1,MAXSEL+1))
        }
        else {
            setColorlist([...colorlist, "White"])
        }
    }
    const setGray = () => {
        if (colorlist.length >= MAXSEL){
            setColorlist([...colorlist, "Gray"].slice(1,MAXSEL+1))
        }
        else {
            setColorlist([...colorlist, "Gray"])
        }
    }
    const setRed = () => {
        if (colorlist.length >= MAXSEL){
            setColorlist([...colorlist, "Red"].slice(1,MAXSEL+1))
        }
        else {
            setColorlist([...colorlist, "Red"])
        }
    }
    const setOrange = () => {
        if (colorlist.length >= MAXSEL){
            setColorlist([...colorlist, "Orange"].slice(1,MAXSEL+1))
        }
        else {
            setColorlist([...colorlist, "Orange"])
        }
    }
    const setYellow = () => {
        if (colorlist.length >= MAXSEL){
            setColorlist([...colorlist, "Yellow"].slice(1,MAXSEL+1))
        }
        else {
            setColorlist([...colorlist, "Yellow"])
        }
    }
    const setGreen = () => {
        if (colorlist.length >= MAXSEL){
            setColorlist([...colorlist, "Green"].slice(1,MAXSEL+1))
        }
        else {
            setColorlist([...colorlist, "Green"])
        }
    }
    const setBlue = () => {
        if (colorlist.length >= MAXSEL){
            setColorlist([...colorlist, "Blue"].slice(1,MAXSEL+1))
        }
        else {
            setColorlist([...colorlist, "Blue"])
        }
    }
    const setBrown = () => {
        if (colorlist.length >= MAXSEL){
            setColorlist([...colorlist, "Brown"].slice(1,MAXSEL+1))
        }
        else {
            setColorlist([...colorlist, "Brown"])
        }
    }
    const setBlack = () => {
        if (colorlist.length >= MAXSEL){
            setColorlist([...colorlist, "Black"].slice(1,MAXSEL+1))
        }
        else {
            setColorlist([...colorlist, "Black"])
        }
    }
    return (
        <div>
            <button onClick={setWhite}>White</button>
            <button onClick={setGray}>Gray</button>
            <button onClick={setRed}>Red</button>
            <button onClick={setOrange}>Orange</button>
            <button onClick={setYellow}>Yellow</button>
            <button onClick={setGreen}>Green</button>
            <button onClick={setBlue}>Blue</button>
            <button onClick={setBrown}>Brown</button>
            <button onClick={setBlack}>Black</button>
            {colorlist}
            <button onClick={() => navigator("/result")}>다음</button>
        </div>
    )
}

export default ColorPage