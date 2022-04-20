import React from 'react';
import './Login.css';
import logo from '../asssets/images/logo.png';
import { NavLink } from "react-router-dom";




function SignInSignUp() {

    return (


        <div>
            
            <div className='blue-background'></div>

            <div className='extra-margin'></div>

                <div className='container-form login-form'>
                    <img id="logo-form" src={logo} alt={'logo'} />
                    <p id='login-text'>When we work together, nothing can stop us from creating an accessible world.</p>
                    <NavLink to="/Login">
                        <button className='btn btn-signin' href='#'>Sign in</button>
                    </NavLink>
                    <div>
                        <div className='line'></div>
                        <p id='text-or'>or</p>
                        <div className='line'></div>
                    </div>
                    <NavLink to="/SignUp">
                        <button className='btn' id='btn-signup' href='#'>Sign up</button>
                    </NavLink>
                </div>

                <div className='signup-guest'>
                    <p>
                        Continue as guest
                        <i class="fa-solid fa-arrow-right signup-guest-icon"></i>
                    </p>
                </div>
        </div>

    );
}

export default SignInSignUp;