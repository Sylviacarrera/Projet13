import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditNameForm from './EditNameForm';
import '../styles/ProfileHeader.scss';

const ProfileHeader = ({ name, onSaveName }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (newName) => {
    onSaveName(newName);
    setIsEditing(false);
  };

  return (
    <div className="profile-header">
      <h1>Welcome back!</h1>
      {!isEditing && <h2>{name}</h2>}
      {isEditing ? (
        <EditNameForm
          currentFirstName={name.split(' ')[0]}
          currentLastName={name.split(' ')[1]}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>
      )}
    </div>
  );
};

ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  onSaveName: PropTypes.func.isRequired,
};

export default ProfileHeader;
