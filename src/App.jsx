import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesConfig from "./Route";

function App() {
  const [globalUsername, setGlobalUsername] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setGlobalUsername(storedUser);
    }
  }, []);

  return (
    <Router>
      {/* ✅ Pass setGlobalUsername & globalUsername to Header */}
      <Header globalUsername={globalUsername} setGlobalUsername={setGlobalUsername} />
      <Routes>{RoutesConfig}</Routes>
      <Footer />
    </Router>
  );
}

export default App;
