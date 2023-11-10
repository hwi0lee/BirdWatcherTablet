import styles from "./Spinner.module.css";
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

const Spinner = () => {
    return(
    <div class={cx("main")}>
        <div class={cx("droplet_spinner")}>
            <div class={cx("droplet")}></div>
            <div class={cx("droplet")}></div>
            <div class={cx("droplet")}></div>
            <div class={cx("droplet")}></div>
            <div class={cx("droplet")}></div>
        </div>
    </div>

    )
}

export default Spinner