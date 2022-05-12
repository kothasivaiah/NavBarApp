import React from 'react';
import { links, social } from './Data';
// import  {FaBars}  from "react-icons/fa";

import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = React.useState(false);
  const linksContainerRef = React.useRef(null);
  const linksRef = React.useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  React.useEffect(() => {
    // const linksHeight = linksRef.current.getBoundingClientRect().height;
    // if (showLinks) {
    //   linksContainerRef.style.height = `${linksHeight}px`;
    // } else {
    //   linksContainerRef.style.height = '0px';
    // }
  }, []);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            {/* <FaBars /> */}
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
