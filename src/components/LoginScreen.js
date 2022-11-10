import { useState } from 'react';
import SignUpScreen from './SignUpScreen';

const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
        <div className='login-bg'>
            <img 
                className='login-logo'
                src='https://i.imgur.com/SfdB1Be.png'
                alt='login-screen-logo' 
            />
            <button 
                className='login-btn'
                onClick={() => setSignIn(true)}
            >
                Sign In
            </button>

            <div className='login-gradient' />
        </div>

        <div className='login-body'>
            {signIn ? (
                <SignUpScreen />
            ) : (
               <>
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                <div className='login-input'>
                    <form>
                        <input 
                            type='email' 
                            placeholder='Email address'
                        />
                        <button 
                            className='login-getStarted'
                            onClick={() => setSignIn(true)}
                        >
                            {`Get Started >`} 
                        </button>
                    </form>
                </div>
               </>
            )}
        </div>
    </div>
  )
}

export default LoginScreen