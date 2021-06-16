import React from "react";
import data from "../Data/F-Q";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";

export const FandQ = () => {
  return (
    <section id='frequent'>
      <div className='section'>
        <header className='section-header'>
          <h2 className='heading'>
            frequently asked questions
          </h2>
        </header>
        <div className='frequent-body'>
          <p className='frequent-para'>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Libero non sequi fuga nobis
            voluptates fugit, necessitatibus Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
            Error sint nostrum maxime consequuntur null.
          </p>
        </div>
        <div className='frequent'>
          {data.map((item) => {
            return <Question key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

const Question = ({ title, info, id }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <article className='frequent-item'>
      <header>
        <h6 className='heading'>
          <span className='frequent-digit'>{id}</span>
          {title}
        </h6>
        <div
          className='frequent-icons'
          onClick={() => setIsShow(!isShow)}>
          {isShow ? <FaMinus /> : <FaPlus />}
        </div>
      </header>
      {isShow && <p className='frequent-text'>{info}</p>}
    </article>
  );
};
