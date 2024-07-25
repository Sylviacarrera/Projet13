import { useState } from 'react';
import '../styles/EditNameForm.scss';
import { selectUser, setUser, setIsEditing, selectToken, selectIsEditing } from '../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { putUser } from '../features/user/userApi';


const EditNameForm = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const token = useSelector(selectToken)
  const isEditing = useSelector(selectIsEditing)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    putUser(token, { firstName, lastName })
      .then(data => {
        dispatch(setUser(data.body))
      }).finally(() => {
        dispatch(setIsEditing(false))
      })

  };


  return (
    <div className="edit-name-form">
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <input
            type="text"
            value={firstName}
            placeholder={user?.firstName}
            onChange={handleFirstNameChange}
            style={{ color: isEditing ? 'black' : 'gray' }}
          />
          <input
            type="text"
            value={lastName}
            placeholder={user?.lastName}
            onChange={handleLastNameChange}
            style={{ color: isEditing ? 'black' : 'gray' }}
          />
        </div>
        <div className="buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={() => dispatch(setIsEditing(false))}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditNameForm;
