import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProfileHeader.scss';

const ProfileHeader = ({ name }) => (
  <div className="profile-header">
    <h1>Welcome back,<br />{name}!</h1>
    <button className="edit-button">Edit Name</button>
  </div>
);

ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProfileHeader;
