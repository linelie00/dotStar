import React, { useState } from 'react';
import importFile from '../../assets/images/import_file.svg';
import uploadFile from '../../assets/images/upload_file.svg';
import search_ic from '../../assets/images/search_ic.svg';
import folder_ic from '../../assets/images/folder.svg';
import file_ic from '../../assets/images/file.svg';
import add from '../../assets/images/add_round.svg';
import people_ic from '../../assets/images/people.svg';
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
        저널&핸드아웃
        <div className="chat-bar-button-container">
          <button className="button" onClick={addFolder}>
            <img src={importFile} alt=''/>
          </button>
          <button className="button">
            <img src={add} alt=''/>
          </button>
        </div>
      </div>
      <div className="chat-box etc">
        <div className="search-container">
          <img src={search_ic} alt=''/>
          <input className='search-input' />
        </div>
        <div className='topic-container'>
          <img src={people_ic} alt=''/>
          Characters
        </div>
        <div className='list-container'>
          {folders.map((folder, index) => (
            <Folder key={index} name={folder} />
          ))}
        </div>
        <div className='topic-container'>
          <img src={file_ic} alt=''/>
          Handouts
        </div>
      </div>
    </div>
  );
}
