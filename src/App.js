import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </React.StrictMode>
  );
}

export default App;
