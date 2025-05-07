import { v4 } from "uuid"
import { SUMMARY_ELEMENT } from "../summary-element-box/summaryElement.JS"
import SummaryElementBox from "../summary-element-box/SummaryElementBox"
import styles from "./summaryboxesdiv.module.css"

const SummaryBoxesDiv = () => {
    return <div className={styles["boxes-divs"]}>
        {SUMMARY_ELEMENT.map(statistics => <SummaryElementBox key={v4()} {...statistics}></SummaryElementBox>)}
    </div>
}
export default SummaryBoxesDiv