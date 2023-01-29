import React from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AccessDenied from './components/AccessDenied/AccessDenied';
import Dialogues from './components/Dialogues/Dialogues';
import SignIn from './components/Forms/SignIn/SignIn';
import SignUp from './components/Forms/SignUp/SignUp';
import SignOut from './components/Forms/SugnOut/SignOut';
import Home from './components/Home/Home';
import Navbar from './components/Nav/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
// import { getUserSessionThunk } from './redux/actions/user.action';

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getUserSessionThunk());
  // }, []);
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/dialogues" element={<Dialogues />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/accessDenied" element={<AccessDenied />} />
      </Routes>
    </div>
  );
}

export default App;
