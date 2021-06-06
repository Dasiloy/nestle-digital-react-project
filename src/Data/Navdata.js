import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaHome,
  FaFolderOpen,
  FaServicestack,
  FaAddressCard,
  FaUsers,
  FaWpforms,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/about",
    text: "about",
    icon: <FaWpforms />,
  },
  {
    id: 3,
    url: "/services",
    text: "services",
    icon: <FaServicestack />,
  },
  {
    id: 4,
    url: "/portfoloio",
    text: "portfolio",
    icon: <FaFolderOpen />,
  },
  {
    id: 5,
    url: "/team",
    text: "team",
    icon: <FaUsers />,
  },
  {
    id: 6,
    url: "/contact",
    text: "contact",
    icon: <FaAddressCard />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
];
