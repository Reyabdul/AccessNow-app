import React from 'react';
import "./Footer.css";
import { NavLink } from "react-router-dom";


class Footer extends React.Component {

  render() {

    return(
      <footer id="footer">
        <div className='bezel-area'>
            <div className='bluebox'>
            </div>  
            <div className='location-text'>
                <p>Near By Location</p>
            </div>
        </div>
        <div className='flex-container'>
            <div>
                <NavLink to="/">
                  <button className='button'>
                  <i class="fa-regular fa-compass fa-3x"></i>                    
                  <p>Discover</p>
                  </button>
                </NavLink>
            </div>
            <div>
                  <button className='button'>
                  <i class="fa-regular fa-pen-to-square fa-3x"></i>                    
                      <p>Contribute</p>
                  </button>
            </div>
            <div>
              <NavLink to="/SignInSignUp">
                <button className='button'>
                <i class="fa-regular fa-user fa-3x"></i>                    
                    <p>Profile</p>
                </button>
              </NavLink>
            </div >
        </div>
      </footer>
      
    )
  }
}
export default Footer;