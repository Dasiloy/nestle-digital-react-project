import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { Loading } from "../components/Loading";
import {Clients} from '../components/Clients';

export const Home = () => {
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 3000);
  }, []);
  if (isloading) {
    return <Loading />;
  } else {
    return (
      <main>
        <Hero />
        <Clients/>
      </main>
    );
  }
};
