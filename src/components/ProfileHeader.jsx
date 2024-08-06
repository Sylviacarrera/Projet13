import EditNameForm from './EditNameForm';
import '../styles/ProfileHeader.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsEditing, selectUser, setIsEditing } from '../features/user/userSlice';

const ProfileHeader = () => {
  // const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch()
  const isEditing = useSelector(selectIsEditing)
  const user = useSelector(selectUser)

  return (
    <div className="profile-header">
      <h1>Welcome back!</h1>
      {!isEditing && <h2>{user?.firstName} {user?.lastName}</h2>}
      {isEditing ? (
        <EditNameForm />
      ) : (
        <button className="edit-button" onClick={() => dispatch(setIsEditing(true))}>Edit Name</button>
      )}
    </div>
  );
};


export default ProfileHeader;
