import "./App.css";
import MainContent from "./components/MainContent";
import { Navbar } from "./components/Navbar";
import { Slider } from "./components/Slider";

function App() {
  return (
    <>
      <div className="mainContainer">
        <Navbar />
        <Slider />
        <MainContent />
      </div>
    </>
  );
}

export default App;
