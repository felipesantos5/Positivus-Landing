import React from "react";
// import { useState } from "react";
import FirstPage from "./components/introductionpage/fistpage";
import Header from "./components/header/header";
import CardPage from "./components/card/cardPage";
import FirstCta from "./components/firstcta/firstCta";

function App() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="mx-24">
        <Header></Header>
        <FirstPage></FirstPage>
        <CardPage></CardPage>
        <FirstCta></FirstCta>
      </div>
    </div>
  );
}

export default App;
