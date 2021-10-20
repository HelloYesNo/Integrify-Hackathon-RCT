import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const activeStyle = { color: '#F15B2A' };
  return (
    <nav>
      <NavLink to='/' activeStyle={activeStyle} exact>
        Home
      </NavLink>
      <NavLink to='/activities' activeStyle={activeStyle}>
        Activities
      </NavLink>
      <NavLink to='/events' activeStyle={activeStyle}>
        Events
      </NavLink>
      <NavLink to='/places' activeStyle={activeStyle}>
        Place
      </NavLink>
    </nav>
  );
}
