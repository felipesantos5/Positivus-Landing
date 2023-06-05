import React from "react";
// import { useState } from "react";
import FirstPage from "./components/introductionpage/fistpage";
import Header from "./components/header/header";
import CardPage from "./components/card/cardPage";
import FirstCta from "./components/firstcta/firstCta";
import { CasesStudies } from "./components/caseStudies/casestudies";
import { WorkingProcess } from "./components/workingProcess/workingProcess";
import { TeamPage } from "./components/team/teamPage";
import { TestimonialsCarousel } from "./components/testimonials/carousel/carousel";
import { ContactUs } from "./components/contactUs/contactUs";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="mx-24">
        <Header></Header>
        <FirstPage></FirstPage>
        <CardPage></CardPage>
        <FirstCta></FirstCta>
        <CasesStudies></CasesStudies>
        <WorkingProcess></WorkingProcess>
        <TeamPage></TeamPage>
        <TestimonialsCarousel></TestimonialsCarousel>
        <ContactUs></ContactUs>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
