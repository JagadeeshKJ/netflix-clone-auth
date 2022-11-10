import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();
    // navigate between the pages (here, profile screen)

    const transitionNavBar = () => {
       (window.scrollY > 100) ? handleShow(true) : handleShow(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        // clean-up
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <div className='nav-content'>
            <img
                onClick={() => navigate('/')}
                src='https://i.imgur.com/SfdB1Be.png'
                alt='netflix-logo'
                className='navbar-logo'
            />
            
            <img 
                onClick={() => navigate('/profile')}
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt = "avatar"
                className='navbar-avatar'
            />
        </div>

    </div>
  )
}

export default Nav