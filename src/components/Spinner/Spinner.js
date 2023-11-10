import styles from "./Spinner.module.css";
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

const Spinner = () => {
    return(
    <div className={cx("main")}>
        <div className={cx("droplet_spinner")}>
            <div className={cx("droplet")}></div>
            <div className={cx("droplet")}></div>
            <div className={cx("droplet")}></div>
            <div className={cx("droplet")}></div>
            <div className={cx("droplet")}></div>
        </div>
    </div>

    )
}

export default Spinner