import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../../redux/actions/user.action';

function SignOut() {
  localStorage.clear();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log('ldfjckdc');
  useEffect(() => {
    dispatch(signOut());
    navigate('/');
  }, []);

  return null;
}

export default SignOut;
