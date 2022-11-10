import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from './Nav'

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profile-body'>
            <h1>Your Profile</h1>
            <div className='profile-info'>
                <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
                    alt='avatar' 
                />
                <div className='profile-details'>
                  <h2>{user.email}</h2>
                  <div className='profile-plan'>
                    <h3>Premium 4K + HDR</h3>
                    <button 
                      className='profile-signOut'
                      onClick={() => auth.signOut()}
                    >
                        Sign Out
                    </button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen