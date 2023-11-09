import styles from "./SizePage.module.css";
import { useNavigate } from "react-router"
import classNames from "classnames/bind"
import { useState, useEffect, useContext } from "react"
import DataContext from "../../DataContext"
import navTo from "../../navTo";

const SizePage = () => {
    const navigator = useNavigate()
    const {data, setData} = useContext(DataContext)
    const sets0 = () => setData({...data, "size": 0})
    const sets1 = () => setData({...data, "size": 1})
    const sets2 = () => setData({...data, "size": 2})
    const sets3 = () => setData({...data, "size": 3})
    const sets4 = () => setData({...data, "size": 4})
    const sets5 = () => setData({...data, "size": 5})
    const cx = classNames.bind(styles)
    return (
        <div className="masterdiv">
            <div className={cx("title")}>특징 검색</div>
            <div className={cx("statusbar")}/>
            <div className='backrec'>
                <div className={cx("number")}>Question. 2</div>
                <div className={cx("question")}>새의 크기는 어땠나요?</div>
                <div className="container">
                    <div className={cx("s0", {active: data['size']===0})} onClick={sets0}></div>
                    <div className={cx("s1", {active: data['size']===1})} onClick={sets1}></div>
                    <div className={cx("s2", {active: data['size']===2})} onClick={sets2}></div>
                    <div className={cx("s3", {active: data['size']===3})} onClick={sets3}></div>
                    <div className={cx("s4", {active: data['size']===4})} onClick={sets4}></div>
                    <div className={cx("s5", {active: data['size']===5})} onClick={sets5}></div>
                </div>
                <button className="nextBtn" onClick={() =>navTo(navigator, "size", data, "/beak")}></button>
            </div>
        </div>
    )
}

export default SizePage