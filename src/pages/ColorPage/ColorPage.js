import styles from "./ColorPage.module.css";
import { useNavigate } from "react-router"
import classNames from "classnames/bind"
import { useState, useEffect, useContext } from "react"
import DataContext from "../../DataContext"
import navTo from "../../navTo";

const ColorPage = () => {
    const MAXSEL = 3
    const [colorlist, setColorlist] = useState([])
    const navigator = useNavigate()
    const {data, setData} = useContext(DataContext)
    const cx = classNames.bind(styles)
    useEffect(() => {
        setData({...data, "color":colorlist})
    }, [colorlist])
    const setWhite = () => {
        if (!colorlist.includes("White")){
            if (colorlist.length >= MAXSEL){
                setColorlist([...colorlist, "White"].slice(1,MAXSEL+1))
            }
            else {
                setColorlist([...colorlist, "White"])
            }
        }
        else {
            setColorlist(colorlist.filter(item => item !== "White"))
        }
    }
    const setGray = () => {
        if (!colorlist.includes("Gray")){
            if (colorlist.length >= MAXSEL){
                setColorlist([...colorlist, "Gray"].slice(1,MAXSEL+1))
            }
            else {
                setColorlist([...colorlist, "Gray"])
            }
        }
        else {
            setColorlist(colorlist.filter(item => item !== "Gray"))
        }
    }
    const setRed = () => {
        if (!colorlist.includes("Red")){
            if (colorlist.length >= MAXSEL){
                setColorlist([...colorlist, "Red"].slice(1,MAXSEL+1))
            }
            else {
                setColorlist([...colorlist, "Red"])
            }
        }
        else {
            setColorlist(colorlist.filter(item => item !== "Red"))
        }
    }
    const setOrange = () => {
        if (!colorlist.includes("Orange")){
            if (colorlist.length >= MAXSEL){
                setColorlist([...colorlist, "Orange"].slice(1,MAXSEL+1))
            }
            else {
                setColorlist([...colorlist, "Orange"])
            }
        }
        else {
            setColorlist(colorlist.filter(item => item !== "Orange"))
        }
    }
    const setYellow = () => {
        if (!colorlist.includes("Yellow")){
            if (colorlist.length >= MAXSEL){
                setColorlist([...colorlist, "Yellow"].slice(1,MAXSEL+1))
            }
            else {
                setColorlist([...colorlist, "Yellow"])
            }
        }
        else {
            setColorlist(colorlist.filter(item => item !== "Yellow"))
        }
    }
    const setGreen = () => {
        if (!colorlist.includes("Green")){
            if (colorlist.length >= MAXSEL){
                setColorlist([...colorlist, "Green"].slice(1,MAXSEL+1))
            }
            else {
                setColorlist([...colorlist, "Green"])
            }
        }
        else {
            setColorlist(colorlist.filter(item => item !== "Green"))
        }
    }
    const setBlue = () => {
        if (!colorlist.includes("Blue")){
            if (colorlist.length >= MAXSEL){
                setColorlist([...colorlist, "Blue"].slice(1,MAXSEL+1))
            }
            else {
                setColorlist([...colorlist, "Blue"])
            }
        }
        else {
            setColorlist(colorlist.filter(item => item !== "Blue"))
        }
    }
    const setBrown = () => {
        if (!colorlist.includes("Brown")){
            if (colorlist.length >= MAXSEL){
                setColorlist([...colorlist, "Brown"].slice(1,MAXSEL+1))
            }
            else {
                setColorlist([...colorlist, "Brown"])
            }
        }
        else {
            setColorlist(colorlist.filter(item => item !== "Brown"))
        }
    }
    const setBlack = () => {
        if (!colorlist.includes("Black")){
            if (colorlist.length >= MAXSEL){
                setColorlist([...colorlist, "Black"].slice(1,MAXSEL+1))
            }
            else {
                setColorlist([...colorlist, "Black"])
            }
        }
        else {
            setColorlist(colorlist.filter(item => item !== "Black"))
        }
    }
    return (
        <div>
            <div className={cx("title")}>특징 검색</div>
            <div className={cx("statusbar")}/>
            <div className={cx("number")}>Question. 4</div>
            <div className={cx("question")}>마지막 질문입니다! 새의 주요 색상은 뭐였나요?</div>
            <button className={cx("white", {active: colorlist.includes("White")})} onClick={setWhite}></button>
            <button className={cx("gray", {active: colorlist.includes("Gray")})} onClick={setGray}></button>
            <button className={cx("red", {active: colorlist.includes("Red")})} onClick={setRed}></button>
            <button className={cx("orange", {active: colorlist.includes("Orange")})} onClick={setOrange}></button>
            <button className={cx("yellow", {active: colorlist.includes("Yellow")})} onClick={setYellow}></button>
            <button className={cx("green", {active: colorlist.includes("Green")})} onClick={setGreen}></button>
            <button className={cx("blue", {active: colorlist.includes("Blue")})} onClick={setBlue}></button>
            <button className={cx("brown", {active: colorlist.includes("Brown")})} onClick={setBrown}></button>
            <button className={cx("black", {active: colorlist.includes("Black")})} onClick={setBlack}></button>
            {colorlist}
            <button className="nextBtn" onClick={() => navTo(navigator, "color", data, "/result")}></button>
            <div className='backrec'/>
        </div>
    )
}

export default ColorPage