import React, { useRef } from 'react'
import { auth } from '../firebase';

const SignUpScreen = () => {
  // useRef points to the current html element, here email and pwd
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch((err) => {
      alert(err.message);
    });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch((err) => {
      alert(err.message)
    });
  };
  

  return (
    <div className='signUp'>
        <form>
          <h1>Sign In</h1>
          <input 
            type="email"
            placeholder='Email address'
            ref={emailRef}
          />
          <input 
            placeholder='Password'
            type="password"
            ref={passwordRef}
          />
          <button 
            type='submit'
            onClick={signIn}
          >
            Sign In
          </button>

          <h4>
            <span className='signUp-gray'>New to Netflix? </span>
            <span className='signUp-link' onClick={register}>Sign Up now.</span>
          </h4>
        </form>
    </div>
  )
}

export default SignUpScreen