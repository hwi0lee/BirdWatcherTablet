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
            <button onClick={sett0}>t0</button>
            <button onClick={sett1}>t1</button>
            <button onClick={sett2}>t2</button>
            <button onClick={sett3}>t3</button>
            <button onClick={sett4}>t4</button>
            {data['beak']}
            <button className="nextBtn" onClick={() => navTo(navigator, "beak", data, "/color")}></button>
        </div>
    )
}

export default BeakPage