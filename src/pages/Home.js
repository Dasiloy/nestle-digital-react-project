import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { Loading } from "../components/Loading";
import { Clients } from '../components/Clients';
import { About } from '../components/About'
import { Why } from '../components/Why'
import { Skills } from '../components/Skills'
import {Service} from '../components/Service'
export const Home = () => {
  const [isloading, setIsloading] = useState(true);
  

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    window.scroll(0,0)
  }, [])
  
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
        <Service/>
      </main>
    );
  }
};
