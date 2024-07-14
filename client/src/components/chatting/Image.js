import React, { useState } from 'react';
import importFile from '../../assets/images/import_file.svg';
import uploadFile from '../../assets/images/upload_file.svg';
import search_ic from '../../assets/images/search_ic.svg';
import folder_ic from '../../assets/images/folder.svg';
import file_ic from '../../assets/images/file.svg';
import Folder from './chatComponents/Folder'; // Import the Folder component

export default function App() {
  const [folders, setFolders] = useState([]);

  const addFolder = () => {
    const newFolderName = `Folder ${folders.length + 1}`;
    setFolders([...folders, newFolderName]);
  };

  return (
    <div className="chat-box-container">
      <div className="chat-bar">
        라이브러리
        <div className="chat-bar-button-container">
          <button className="button" onClick={addFolder}>
            <img src={importFile} alt=''/>
          </button>
          <button className="button">
            <img src={uploadFile} alt=''/>
          </button>
        </div>
      </div>
      <div className="chat-box etc">
        <div className="search-container">
          <img src={search_ic} alt=''/>
          <input className='search-input' />
        </div>
        <div className='topic-container'>
          <img src={folder_ic} alt=''/>
          Folder
        </div>
        <div className='list-container'>
          {folders.map((folder, index) => (
            <Folder key={index} name={folder} />
          ))}
        </div>
        <div className='topic-container'>
          <img src={file_ic} alt=''/>
          Recent Uploads
        </div>
      </div>
    </div>
  );
}
