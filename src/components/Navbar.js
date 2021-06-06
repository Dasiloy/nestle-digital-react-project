import React, { useEffect, useState } from "react";
import { links, social } from "../Data/Navdata";
import { FaBars, FaTimes } from "react-icons/fa";
import { UseGlobalContext } from "../context/Context";
import {Link} from 'react-router-dom'

export const Navbar = () => {
  const [link, setLink] = useState([]);
  const [Social, setSocial] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { setNavIndex, navIndex } = UseGlobalContext();

  const checkScrolled = () => {
    if (!isScrolled && window.pageYOffset > 50) {
      setIsScrolled(true);
    } else if (isScrolled && window.pageYOffset <= 50) {
      setIsScrolled(false);
    }
  };

  const handleMenuLinks = (id) => {
    setNavIndex(id)
    setShowSidebar(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScrolled);
    return () => {
      window.removeEventListener("scroll", checkScrolled);
    };
  });

  useEffect(() => {
    setLink(links);
    setSocial(social);
  }, []);
  return (
    <nav
      className={
        isScrolled ? "nav-scrolled" : "nav-unscroll"
      }>
      <div className='section nav-section'>
        <div className='nav-header'>
          <div className='nav-logo'>
            <span>Nestle</span>
            <span>Digital</span>
          </div>
          <FaBars
            className='nav-toggle'
            onClick={() => setShowSidebar(true)}
          />
        </div>
        <div
          className={
            showSidebar ? "nav-body show" : "nav-body"
          }>
          <div className='nav-logo-small'>
            <span>Nestle</span>
            <span>Digital</span>
          </div>
          <FaTimes
            className='close-sidebar'
            onClick={() => setShowSidebar(false)}
          />
          <ul className='nav-links'>
            {link.map((menu) => {
              const { id, url, text, icon } = menu;
              return (
                <li className='nav-menu-link' key={id}>
                  <Link to={url}
                    id='a'
                      className={`${
                        navIndex === id
                          ? "nav-active"
                          : "nav-unactive"
                      }`}
                      onClick={() => handleMenuLinks(id)}>
                      <span className='nav-menu-icon'>
                        {icon}
                      </span>
                      {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className='nav-social'>
            {Social.map((item) => {
              const { id, url, icon } = item;
              return (
                <li className='social-link' key={id}>
                  <a
                    href={url}
                    onClick={() => setShowSidebar(false)}>
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
