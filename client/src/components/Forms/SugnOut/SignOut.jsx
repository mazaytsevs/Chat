import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../../redux/actions/user.action';

function SignOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  localStorage.clear();
  console.log('ldfjckdc');

  useEffect(() => {
    dispatch(signOut(navigate));
    navigate('/');
  }, []);

  return null;
}

export default SignOut;
