import React from "react";

const Hero = () => {
  return (
    <main id='hero'>
      <div className='section hero-section'>
        <img
          src='img/hero-bg.png'
          alt='hero'
          className='hero-img'
        />
        <div className='hero-desc'>
          <h2 className='hero-heading'>
            Best solution for your business
          </h2>
          <h3 className='hero-para'>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Harum molestiae obcaecati
            aperiam eos esse provident ullam necessitatibus
            corrupti sapiente similique
          </h3>
          <button type='button' className='btn hero-btn'>
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
