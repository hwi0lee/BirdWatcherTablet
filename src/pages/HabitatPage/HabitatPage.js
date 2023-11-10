import styles from "./HabitatPage.module.css";
import classNames from "classnames/bind"
import { useState, useEffect, useContext } from "react"
import DataContext from "../../DataContext"
import { useNavigate } from "react-router"
import navTo from "../../navTo";
import Modal from "../../components/Modal/Modal";

const cx = classNames.bind(styles)


const HabitatPage = () => {
    const navigator = useNavigate()
    const {data, setData} = useContext(DataContext);
    const setCity = () => setData({...data, "habitat": "City"})
    const setOcean = () => setData({...data, "habitat": "Ocean"})
    const setSwamp = () => setData({...data, "habitat": "Swamp"})

    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <div className="masterdiv">
            <div className={cx("title")}>특징 검색</div>
            <div className={cx("statusbar")}/>
            <div className='backrec'>
                <div className={cx("number")}>Question. 1</div>
                <div className={cx("question")}>새를 관찰한 서식지는 어디였나요?</div>
                <div className={cx("container")}>
                    <div className={cx("city", {active: data['habitat']==="City"})} onClick={setCity}></div>
                    <div className={cx("ocean", {active: data['habitat']==="Ocean"})} onClick={setOcean}></div>
                    <div className={cx("swamp", {active: data['habitat']==="Swamp"})} onClick={setSwamp}></div>
                </div>
                <button className="nextBtn" onClick={() => navTo(navigator, "habitat", data, "/size", openModal)}></button>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} />;
        </div>
    )
}

export default HabitatPage