import styles from "./BeakPage.module.css";
import { useNavigate } from "react-router"
import classNames from "classnames/bind"
import { useState, useEffect, useContext } from "react"
import DataContext from "../../DataContext"
import navTo from "../../navTo";
import Modal from "../../components/Modal/Modal";

const BeakPage = () => {
    const navigator = useNavigate()
    const {data, setData} = useContext(DataContext)
    const cx = classNames.bind(styles)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
    const sett0 = () => setData({...data, "beak": "t0"})
    const sett1 = () => setData({...data, "beak": "t1"})
    const sett2 = () => setData({...data, "beak": "t2"})
    const sett3 = () => setData({...data, "beak": "t3"})
    const sett4 = () => setData({...data, "beak": "t4"})
    return (
        <div>
            <div className={cx("title")}>특징 검색</div>
            <div className={cx("statusbar")}/>
            <div className='backrec'>
                <div className={cx("number")}>Question. 3</div>
                <div className={cx("question")}>거의 다 왔어요! 새의 부리 모양은 어땠나요?</div>
                <div className="container">
                    <div className={cx("t0", {active: data['beak']=="t0"})} onClick={sett0}></div>
                    <div className={cx("t1", {active: data['beak']=="t1"})} onClick={sett1}></div>
                    <div className={cx("t2", {active: data['beak']=="t2"})} onClick={sett2}></div>
                    <div className={cx("t3", {active: data['beak']=="t3"})} onClick={sett3}></div>
                    <div className={cx("t4", {active: data['beak']=="t4"})} onClick={sett4}></div>
                </div>
                <button className="nextBtn" onClick={() => navTo(navigator, "beak", data, "/color", openModal)}></button>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
    )
}

export default BeakPage