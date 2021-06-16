import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { Loading } from "../components/Loading";
import { Clients } from "../components/Clients";
import { About } from "../components/About";
import { Why } from "../components/Why";
import { Skills } from "../components/Skills";
import { Service } from "../components/Service";
import { Action } from "../components/Action";
import { Portfolio } from "../components/Portfolio";
import { Team } from "../components/Team";
import  Contact  from "../components/Contact";
import { FandQ } from "../components/FandQ";
import Footer from "../components/Footer";
import { BackToTop } from "../components/BackToTop";
export const Home = () => {
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (isloading) {
    return <Loading />;
  } else {
    return (
      <main>
        <Hero />
        <Clients />
        <About />
        <Why />
        <Skills />
        <Service />
        <Action />
        <Portfolio />
        <Team />
        <Contact />
        <FandQ />
        <Footer />
        <BackToTop />
      </main>
    );
  }
};
