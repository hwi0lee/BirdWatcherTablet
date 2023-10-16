import styles from "./ResultPage.module.css";
import { useNavigate } from "react-router"
import classNames from "classnames/bind"
import { useState, useEffect, useContext } from "react"
import DataContext from "../../DataContext"

const ResultPage = () => {
    const history = useNavigate()
    const cx = classNames.bind(styles)
    const navigator = useNavigate()
    const {data, setData} = useContext(DataContext)
    console.log(data)
    return (
        <div>
            ResultPage
        </div>
    )
}

export default ResultPage