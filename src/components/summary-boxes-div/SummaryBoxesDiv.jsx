import { v4 } from "uuid"
import { SUMMARY_ELEMENT } from "../summary-element-box/summaryElement.JS"
import SummaryElementBox from "../summary-element-box/SummaryElementBox"

const SummaryBoxesDiv = () => {
    return <div>
        {SUMMARY_ELEMENT.map(statistics => <SummaryElementBox key={v4()} {...statistics}></SummaryElementBox>)}
    </div>
}
export default SummaryBoxesDiv