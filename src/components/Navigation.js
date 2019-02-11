import React from "react";
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <div>
      <NavLink to="/characters">characters</NavLink>
      <NavLink to="/creators">creators</NavLink>
      <NavLink to="/events">events</NavLink>
      <NavLink to="/series">series</NavLink>
      <NavLink to="/stories">stories</NavLink>
      <NavLink to="/comics">comics</NavLink>
    </div>
  );
};

export default Navigation;