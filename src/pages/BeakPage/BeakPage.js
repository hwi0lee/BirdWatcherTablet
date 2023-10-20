import styles from "./BeakPage.module.css";
import { useNavigate } from "react-router"
import classNames from "classnames/bind"
import { useState, useEffect, useContext } from "react"
import DataContext from "../../DataContext"
import navTo from "../../navTo";

const BeakPage = () => {
    const navigator = useNavigate()
    const {data, setData} = useContext(DataContext)
    const cx = classNames.bind(styles)
    const sett0 = () => setData({...data, "beak": "t0"})
    const sett1 = () => setData({...data, "beak": "t1"})
    const sett2 = () => setData({...data, "beak": "t2"})
    const sett3 = () => setData({...data, "beak": "t3"})
    const sett4 = () => setData({...data, "beak": "t4"})
    return (
        <div>
            <div className={cx("title")}>특징 검색</div>
            <div className={cx("statusbar")}/>
            <div className={cx("number")}>Question. 3</div>
            <div className={cx("question")}>거의 다 왔어요! 새의 부리 모양은 어땠나요?</div>
            <button className={cx("t0", {active: data['beak']=="t0"})} onClick={sett0}></button>
            <button className={cx("t1", {active: data['beak']=="t1"})} onClick={sett1}></button>
            <button className={cx("t2", {active: data['beak']=="t2"})} onClick={sett2}></button>
            <button className={cx("t3", {active: data['beak']=="t3"})} onClick={sett3}></button>
            <button className={cx("t4", {active: data['beak']=="t4"})} onClick={sett4}></button>
            {data['beak']}
            <button className="nextBtn" onClick={() => navTo(navigator, "beak", data, "/color")}></button>
            <div className='backrec'/>
        </div>
    )
}

export default BeakPage