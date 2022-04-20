import React from 'react';
import './Login.css';
import logo from '../asssets/images/logo.png';

function Login() {
    return (
        <div>
            

            <div className='extra-margin'></div>

            <img id="logo-small" src={logo} alt={'logo'} />
            <p className='title'>Sign in</p>

            <div className='container-form signin-form'>
                <form method='post' action='#'>
                    <div>
                        <input className='form-input' id='username' name='username' type='text' placeholder='Username' />
                    </div>
                    <div>
                        <input className='form-input' id='password-signin' name='password' type='password' placeholder='Password' />
                    </div>
                    <a href='#' id='forgot-pass'>Forgot password</a>
                    <div>
                        <button className='btn btn-signin' id='signin' type='button'>Sign in</button>
                    </div>
                </form>
                <div id='no-account'>
                    <p>Don't have an account?</p>
                    <a href='#'>Sign up</a>
                </div>
            </div>

            <div className='blue-background'></div>



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


        </div>

    );
}

export default Login;