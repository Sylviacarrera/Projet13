import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileHeader from '../components/ProfileHeader';
import TransactionSection from '../components/TransactionSection';
import { selectToken, setUser } from '../features/user/userSlice';
import '../styles/Profile.scss';
import { useNavigate } from 'react-router-dom';
import { postUser } from '../features/user/userApi';

const Profile = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/sign-in')
    }

    postUser(token)
      .then(data => {
        dispatch(setUser(data.body))
      })
  }, [token, navigate, dispatch]);


  return (
    <div className="profile-page">
      <main className="main bg-dark">
        <ProfileHeader />
        <TransactionSection
          title="Argent Bank Checking (x8349)"
          amount="$1,570.79"
          description="Available Balance"
        />
        <TransactionSection
          title="Argent Bank Savings (x6712)"
          amount="$8,120.51"
          description="Available Balance"
        />
        <TransactionSection
          title="Argent Bank Credit Card (x8349)"
          amount="$104.24"
          description="Current Balance"
        />
      </main>
    </div>
  );
};

export default Profile;
