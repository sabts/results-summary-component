import style from "./summaryElement.module.css"

const SummaryElementBox = ({color, icon, title, userpoints, overpoint}) => {
    return  <div>
         <div className={`text${color}`}>
            <img className={icon}/>
            <span>{title}</span>
            </div>
            <div>
                <span>{userpoints}</span>
                <span> / </span>
                <span>{overpoint}</span>
                </div>
  </div>
}
export default SummaryElementBox