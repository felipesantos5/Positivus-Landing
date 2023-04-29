import React from "react";
// import { useState } from "react";
import FirstPage from "./components/introductionpage/fistpage";
import Header from "./components/header/header";
import CardPage from "./components/cardPage/cardPage";

function App() {
  return (
    <div>
      <Header></Header>
      <FirstPage></FirstPage>
      <CardPage></CardPage>
    </div>
  );
}

export default App;
