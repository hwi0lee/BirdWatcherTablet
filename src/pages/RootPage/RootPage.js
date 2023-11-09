import { useNavigate } from "react-router"
import styles from "./RootPage.module.css";
import classNames from "classnames/bind"

const RootPage = () => {
    const history = useNavigate()
    const cx = classNames.bind(styles)
    return (
        <div className={cx("background")}>
            <button className="startBtn" onClick={() => history('/habitat')}/>
        </div>
    )
}

export default RootPage