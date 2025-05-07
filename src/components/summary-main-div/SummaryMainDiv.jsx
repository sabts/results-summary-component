import Button from "../button/Button"
import SummaryBoxesDiv from "../summary-boxes-div/SummaryBoxesDiv"
import styles from "./summarymaindiv.module.css"

const SummaryMainDiv = ({children}) => {
return <div className={styles["summary-container"]}>
    <h4 className={styles["text"]}>Summary</h4>
    <SummaryBoxesDiv>{children}</SummaryBoxesDiv>
    <Button/>
</div>
}
export default SummaryMainDiv