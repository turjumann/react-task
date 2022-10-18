import LeftPanel from "./Components/Main/LeftPanel";
import MapsContainer from "./Components/Main/MapsContainer";
import ArabicPDF from "./Components/PDFs/ArabicPDF";
import EnglishPDF from "./Components/PDFs/EnglishPDF";
import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="left-panel">
          <LeftPanel />
        </div>
        <div className="maps-container">
          <MapsContainer />
        </div>
      </div>
      <div style={{ height: "100%", width: "100%" }}>
        <div style={{ height: "0px", overflowY: "scroll" }}>
          <ArabicPDF />
          <EnglishPDF />
        </div>
      </div>
    </>
  );
}

export default App;
