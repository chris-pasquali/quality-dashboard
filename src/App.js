import { BrowserRouter } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";
import Footer from "./Components/Footer"
import HearderComponent from "./Components/Header/HearderComponent";

const App = () => {
  return (
    <BrowserRouter>
      <HearderComponent />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
