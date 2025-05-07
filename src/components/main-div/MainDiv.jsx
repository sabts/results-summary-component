import styles from "./maindiv.module.css";

const MainDiv = ({children}) => {
    return <div className={styles["main-div"]}>{children}</div>
}
export default MainDiv