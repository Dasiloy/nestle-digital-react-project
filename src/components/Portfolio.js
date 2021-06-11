import React, { useState } from "react";
import { PortfolioData } from "../Data/PortfolioData";

const portData = PortfolioData.map((item) => {
  return item.category;
});
const portSet = new Set(portData);
const portCategory = ["all", ...portSet];

export const Portfolio = () => {
  const [port, setPort] = useState(PortfolioData);

  const filterPort = (category) => {
    if (category === "all") {
      setPort(PortfolioData);
    } else {
      const filtered = PortfolioData.filter(
        (item) => item.category === category
      );
       setPort(filtered);
    }
  };
  return (
    <section id='portfolio'>
      <div className='section'>
        <header className='section-header'>
          <h2 className='heading'>Portfoloio</h2>
        </header>
        <div className='portfolio-body'>
          <p className='portfolio-para'>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Libero non sequi fuga nobis
            voluptates fugit, necessitatibus Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
            Error sint nostrum maxime consequuntur nulla
            quidem consequatur facilis delectus explicabo
            quos.
          </p>
        </div>
        <div className='btn-container'>
          {portCategory.map((item, index) => {
            return (
              <button
                type='button'
                key={index}
                className='filter-btn'
                onClick={() => filterPort(item)}>
                {item}
              </button>
            );
          })}
        </div>
        <div className='portfolios'>
          {port.map((item) => {
            const { id, name, img, category } = item;
            return (
              <div className='port-item' key={id}>
                <img
                  src={img}
                  alt={name}
                  className='port-img'
                />
                <div className='port-info'>
                  <h6>{name}</h6>
                  <p>{category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
