import React from 'react';
import './Login.css';
import logo from '../asssets/images/logo.png';

function Signup() {
    return (
        <div>

            <div className='blue-background'></div>


            <div className='extra-margin'></div>

            <img id="logo-small" src={logo} alt={'logo'} />
            <p className='title'>Sign up</p>

            <div className='container-form signup-form'>
                <form method='post' action='#'>
                    <div>
                        <input className='form-input' id='name' name='name' type='text' placeholder='Name' />
                    </div>
                    <div>
                        <input className='form-input' id='email-signup' name='email' type='email' placeholder='Email' />
                    </div>
                    <div>
                        <input className='form-input' id='password-signup' name='password' type='password' placeholder='Password' />
                    </div>
                    <div>
                        <button className='btn btn-signin' id='create-account' type='button'>Create Account</button>
                    </div>
                </form>
                <div id='have-account'>
                    <p>Already have an account?</p>
                    <a href='#'>Sign in</a>
                </div>
            </div>

            <div className='signup-option'>
                <a>
                    Sign up with Google
                    <i class="fa-brands fa-google signup-option-logo"></i>
                </a>
            </div>

            <div className='signup-option'>
                <a>
                    Sign up with Apple
                    <i class="fa-brands fa-apple signup-option-logo"></i>
                </a>
            </div>

            <div className='signup-guest'>
                <a>
                    Continue as guest
                    <i class="fa-solid fa-arrow-right signup-guest-icon"></i>
                </a>
            </div>

            <div className='extra-margin'></div>

        </div>

    );
}

export default Signup;