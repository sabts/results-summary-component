import styles from "./totalstatsdiv.module.css"

const TotalStatsDiv = () => {
    return <div className={styles["stats-box"]}>
        <p className={styles["results-title"]}>Your Result</p>
        <div className={styles["total-stats"]}>
            <h2 className={styles["total-number"]}>76</h2>
            <p className={styles["total-overpoint"]}>of 100</p>
        </div>
        <h3 className={styles["score"]}>Great</h3>
        <p className={styles["score-description"]}>Your performance exceed 65% of the people conducting the test here!</p>
    </div>
}
export default TotalStatsDiv