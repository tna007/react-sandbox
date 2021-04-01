import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
