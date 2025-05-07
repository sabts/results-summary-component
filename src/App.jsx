import Button from "./components/button/Button";
import SummaryBoxesDiv from "./components/summary-boxes-div/SummaryBoxesDiv";

const App = () => {
  return (
    <>
    <div>
      <p>Your Result</p>
      <div>
        <h2>76</h2>
        <p>of 100</p>
      </div>
      <div>
        <h4>Summary</h4>
        <SummaryBoxesDiv></SummaryBoxesDiv>
        <Button/>
      </div>
    </div>
    </>
  );
};

export default App;
