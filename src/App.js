import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Employee from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Employee} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
