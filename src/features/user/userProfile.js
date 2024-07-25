import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileHeader from '../components/ProfileHeader';
import TransactionSection from '../components/TransactionSection';
import { getUserProfile, fetchUserTransactions, selectUser, selectToken, selectTransactions, setUser } from '../features/user/userSlice';
import '../styles/Profile.scss';

const UserProfile = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const transactions = useSelector(selectTransactions);
  const [name, setName] = useState('');

  useEffect(() => {
    if (token) {
      dispatch(getUserProfile(token));
      dispatch(fetchUserTransactions(token));
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
    setName(`${newName.firstName} ${newName.lastName}`);
  };

  return (
    <div className="profile-page">
      <main className="main bg-dark">
        <ProfileHeader name={name} onSaveName={handleSaveName} />
        {transactions.map((transaction, index) => (
          <TransactionSection
            key={index}
            title={transaction.title}
            amount={transaction.amount}
            description={transaction.description}
          />
        ))}
      </main>
    </div>
  );
};

export default UserProfile;
