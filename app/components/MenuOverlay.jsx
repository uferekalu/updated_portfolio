import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ links, scrollToSection }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index} onClick={() => scrollToSection(link.path.slice(1))}>
          <NavLink title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
