import React from "react";

export const Skills = () => {
  return (
    <section id='skills'>
      <div className='section'>
        <div className='skills-grid'>
          <img
            src='./img/skills.png'
            alt='our skills'
            className='skills-img'
          />
          <div className='second'>
            <header className='special-header'>
              <h4>
                Lorem ipsum dolor sit amet ipsum dolor.{" "}
                <span className='special-bold'>
                  Lorem ipsum dolor sit, amet consectetur
                </span>
              </h4>
            </header>
            <div className='skills-body'>
              <p className='skills-para'>
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Libero non sequi fuga
                nobis voluptates fugit, necessitatibus
              </p>
            </div>
            <div className='skills-list'>
              <div className='single-skill'>
                <h6>
                  <span>SALES</span>
                  <span>100%</span>
                </h6>
                <article className='skill-bcg'>
                  <div className='skill-progress-100'></div>
                </article>
              </div>
              <div className='single-skill'>
                <h6>
                  <span>PRODUCT AWARENESS</span>
                  <span>90%</span>
                </h6>
                <article className='skill-bcg'>
                  <div className='skill-progress-90'></div>
                </article>
              </div>
              <div className='single-skill'>
                <h6>
                  <span>DIGITAL MARKETTING</span>
                  <span>80%</span>
                </h6>
                <article className='skill-bcg'>
                  <div className='skill-progress-80'></div>
                </article>
              </div>
              <div className='single-skill'>
                <h6>
                  <span>AFFILATE MARKETING</span>
                  <span>75%</span>
                </h6>
                <article className='skill-bcg'>
                  <div className='skill-progress-75'></div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
