import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'

function Nav() {
  return(
    <nav id="main-navigation" aria-label="Main navigation">

          <NavLink to="/Filter">    
            <button className='filter-button'>
                <i class="fa-solid fa-sliders fa-2x"></i>                    
            </button>          
          </NavLink>

    </nav>
  );
}
export default Nav;