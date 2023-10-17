import styles from "./HabitatPage.module.css";
import classNames from "classnames/bind"
import { useState, useEffect, useContext } from "react"
import DataContext from "../../DataContext"
import { useNavigate } from "react-router"
import navTo from "../../navTo";

const HabitatPage = () => {
    const navigator = useNavigate()
    const {data, setData} = useContext(DataContext);
    const setCity = () => setData({...data, "habitat": "City"})
    const setOcean = () => setData({...data, "habitat": "Ocean"})
    const setSwamp = () => setData({...data, "habitat": "Swamp"})

    return (
        <div>
            <button onClick={setCity}>도시</button>
            <button onClick={setOcean}>바다</button>
            <button onClick={setSwamp}>습지</button>
            {data['habitat']}
            <button className="nextBtn" onClick={() => navTo(navigator, "habitat", data, "/size")}></button>
        </div>
    )
}

export default HabitatPage