import styles from "./BeakPage.module.css";
import { useNavigate } from "react-router"
import classNames from "classnames/bind"
import { useState, useEffect, useContext } from "react"
import DataContext from "../../DataContext"

const BeakPage = () => {
    const navigator = useNavigate()
    const {data, setData} = useContext(DataContext)
    const cx = classNames.bind(styles)
    const sett0 = () => setData({...data, "beak": 0})
    const sett1 = () => setData({...data, "beak": 1})
    const sett2 = () => setData({...data, "beak": 2})
    const sett3 = () => setData({...data, "beak": 3})
    const sett4 = () => setData({...data, "beak": 4})
    return (
        <div>
            <button onClick={sett0}>t0</button>
            <button onClick={sett1}>t1</button>
            <button onClick={sett2}>t2</button>
            <button onClick={sett3}>t3</button>
            <button onClick={sett4}>t4</button>
            {data['beak']}
            <button onClick={() => navigator("/color")}>다음</button>
        </div>
    )
}

export default BeakPage