import style from "./summaryElement.module.css"

const SummaryElementBox = ({color, icon, title, userpoints, overpoint}) => {
  const textClass = style[`text${color}`];
  const summarycardcolor = `${style.summariesbox} ${style[color]}`;
    return  <div className={summarycardcolor}>
         <div className={style["text-icon-container"]}>
         <img src={icon} alt={`${title} icon`}/>
         <span className={textClass}>{title}</span>
            </div>
            <div>
                <span>{userpoints}</span>
                <span> / </span>
                <span>{overpoint}</span>
                </div>
  </div>
}
export default SummaryElementBox