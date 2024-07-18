import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileHeader from '../components/ProfileHeader';
import TransactionSection from '../components/TransactionSection';
import { selectUser, selectToken, setUser } from '../features/user/userSlice';
import '../styles/Profile.scss';

const Profile = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const [name, setName] = useState('');

  useEffect(() => {
    if (token) {
      dispatch(getUserProfile(token));
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (user) {
      setName(`${user.firstName} ${user.lastName}`);
    }
  }, [user]);

  const handleSaveName = (newName) => {
    const updatedUser = { ...user, ...newName };
    dispatch(setUser(updatedUser));
    // Here you would also want to update the backend with the new name
  };

  return (
    <div className="profile-page">
      <main className="main bg-dark">
        <ProfileHeader name={name} onSaveName={handleSaveName} />
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
