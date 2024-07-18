import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/EditNameForm.scss';

const EditNameForm = ({ currentFirstName, currentLastName, onSave, onCancel }) => {
  const [firstName, setFirstName] = useState(currentFirstName);
  const [lastName, setLastName] = useState(currentLastName);
  const [isFirstNameEdited, setIsFirstNameEdited] = useState(false);
  const [isLastNameEdited, setIsLastNameEdited] = useState(false);

  useEffect(() => {
    setFirstName(currentFirstName);
    setLastName(currentLastName);
  }, [currentFirstName, currentLastName]);

  const handleFirstNameFocus = () => {
    if (!isFirstNameEdited) {
      setFirstName('');
    }
  };

  const handleLastNameFocus = () => {
    if (!isLastNameEdited) {
      setLastName('');
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setIsFirstNameEdited(true);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setIsLastNameEdited(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ firstName, lastName });
  };

  return (
    <div className="edit-name-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onFocus={handleFirstNameFocus}
            onChange={handleFirstNameChange}
            style={{ color: isFirstNameEdited ? 'black' : 'gray' }}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onFocus={handleLastNameFocus}
            onChange={handleLastNameChange}
            style={{ color: isLastNameEdited ? 'black' : 'gray' }}
          />
        </div>
        <div className="buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

EditNameForm.propTypes = {
  currentFirstName: PropTypes.string.isRequired,
  currentLastName: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditNameForm;
