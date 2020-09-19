import React from "react";
import "./App.css";
import CategoriesHeader from "./Components/CategoriesHeader/CategoriesHeader";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <CategoriesHeader />
      <Home />
    </div>
  );
}

export default App;
