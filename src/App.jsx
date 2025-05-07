import MainDiv from "./components/main-div/MainDiv";
import SummaryMainDiv from "./components/summary-main-div/SummaryMainDiv";
import TotalStatsDiv from "./components/totalstats-div/TotalStatsDiv";

const App = () => {
  return (
    <MainDiv>
    <TotalStatsDiv></TotalStatsDiv>
    <SummaryMainDiv></SummaryMainDiv>
    </MainDiv>
  );
};

export default App;
