import React, { useState } from 'react';
import plus_ic from '../../../assets/images/plus.svg';
import minus_ic from '../../../assets/images/minus.svg';

function Folder({ name }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [folderName, setFolderName] = useState(name);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  const handleNameClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (e) => {
    setFolderName(e.target.value);
  };

  const handleNameBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className="folder-container">
      <div className="folder-header">
        <img src={isOpen ? minus_ic : plus_ic} alt='' onClick={toggleFolder}/>
        {isEditing ? (
          <input
            type="text"
            value={folderName}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            autoFocus
          />
        ) : (
          <span onClick={handleNameClick}>{folderName}</span>
        )}
      </div>
      {isOpen && (
        <div className="folder-content">
          {/* Folder contents go here */}
        </div>
      )}
    </div>
  );
}

export default Folder;
