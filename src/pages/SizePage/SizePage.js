import styles from "./SizePage.module.css";
import { useNavigate } from "react-router"
import classNames from "classnames/bind"
import { useState, useEffect, useContext } from "react"
import DataContext from "../../DataContext"

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
        <div>
            <button onClick={sets0}>s0</button>
            <button onClick={sets1}>s1</button>
            <button onClick={sets2}>s2</button>
            <button onClick={sets3}>s3</button>
            <button onClick={sets4}>s4</button>
            <button onClick={sets5}>s5</button>
            {data['size']}
            <button onClick={() => navigator("/beak")}>다음</button>
        </div>
    )
}

export default SizePage