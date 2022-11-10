import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // Persistent signed-in user against refresh
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // When Logged In, goes to userSlice and updates payload to user
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        // When Logged Out, reset the user back to null
        dispatch(logout());
      }
    });

    // cleanup
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {
          !user ? (
            <LoginScreen />
          ) : (
            <Routes>
              <Route exact path='/' element = {<HomeScreen />} />
              <Route path = '/profile' element = {<ProfileScreen />} />
            </Routes>
          )
        }
      </Router>
    </div>
  );
}

export default App;
