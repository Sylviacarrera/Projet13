import ProfileHeader from '../components/ProfileHeader';
import TransactionSection from '../components/TransactionSection';
import '../styles/Profile.scss';
import { postUser } from '../features/user/userApi';
import { useEffect } from 'react';
import { selectToken, setUser } from '../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
  const token = useSelector(selectToken)
  const dispatch = useDispatch()

  useEffect(() => {
    postUser(token)
      .then(data => {
        dispatch(setUser(data.body))
      })
  }, [])



  return (
    <div className="profile-page">
      <main className="main bg-dark">
        <ProfileHeader name="Captain America!" />
        <TransactionSection title="Argent Bank Checking (x8349)" amount="$1,570.79" description="Available Balance" />
        <TransactionSection title="Argent Bank Savings (x6712)" amount="$8,120.51" description="Available Balance" />
        <TransactionSection title="Argent Bank Credit Card (x8349)" amount="$104.24" description="Current Balance" />
      </main>
    </div>
  )
}

export default Profile;
