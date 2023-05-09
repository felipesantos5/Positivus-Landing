import React from "react";
// import { useState } from "react";
import FirstPage from "./components/introductionpage/fistpage";
import Header from "./components/header/header";
import CardPage from "./components/cardPage/cardPage";
import FirstCta from "./components/firstcta/firstCta";

function App() {
  return (
    <div className="mx-28">
      <Header></Header>
      <FirstPage></FirstPage>
      <CardPage></CardPage>
      <FirstCta></FirstCta>
    </div>
  );
}

export default App;
