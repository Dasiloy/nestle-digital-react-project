import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Data from "../Data/AccordionData";

export const Why = () => {
  return (
    <section id='why'>
      <div className='section'>
        <div className='why-grid'>
          <img src='./img/why-us.png' alt='why-us' className='why-img' />
          <div className='second'>
            <header className='special-header'>
              <h4>
                Lorem ipsum dolor sit amet ipsum dolor.{" "}
                <span className='special-bold'>
                  Lorem ipsum dolor sit, amet consectetur
                </span>
              </h4>
            </header>
            <div className='why-body'>
              <p className='why-para'>
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Libero non sequi fuga
                nobis voluptates fugit, necessitatibus
              </p>
              <div className='why-display'>
                {Data.map((item) => {
                  return (
                    <SingleAcc {...item} key={item.id} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SingleAcc = ({ id, title, info }) => {
  const [show, setShow] = useState(false);
  return (
    <article className='display-item' key={id}>
      <header>
        <h6 className='heading'>
          <span className='display-digit'>{id}</span>
          {title}
        </h6>
        <div
          className='why-icons'
          onClick={() => setShow(!show)}>
          {show ? <FaMinus /> : <FaPlus />}
        </div>
      </header>
      {show && <p className='display-text'>{info}</p>}
    </article>
  );
};
