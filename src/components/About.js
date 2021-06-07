import React from "react";
import { FaCheckDouble } from "react-icons/fa";
import {Link} from 'react-router-dom'

export const About = () => {
  return (
    <section id='about'>
      <div className='section'>
        <header className='section-header'>
          <h2 className='heading'>About us</h2>
        </header>
        <div className='about-body'>
          <article className='first'>
            <p className='about-para'>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aperiam sapiente enim,
              asperiores voluptatem necessitatib.
            </p>
            <br />
            <ul>
              <li className='about-list'>
                <p className='about-para'>
                  <FaCheckDouble className='about-icons' />
                  Lorem ipsum, dolor sit amet consectetur
                  adipisgiu
                </p>
              </li>
              <li className='about-list'>
                <p className='about-para'>
                  <FaCheckDouble className='about-icons' />
                  Lorem ipsum, dolor sit amet consectetur
                  adipisicing
                </p>
              </li>
              <li className='about-list'>
                <p className='about-para'>
                  <FaCheckDouble className='about-icons' />
                  Lorem ipsum, dolor sit amet consectetur
                </p>
              </li>
            </ul>
          </article>
          <article>
            <p className='about-para'>
              Ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <Link to='/' className='about-btn'>
              learn more
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};
