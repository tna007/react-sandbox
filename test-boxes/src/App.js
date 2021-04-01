//import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import MainRouter from "./Main_router";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <MainRouter />
      <Footer />
    </Router>
  );
}

export default App;
