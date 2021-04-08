import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Main from "./Component/Main";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
