import React from 'react';
import './ChatComponents.css';

export function CharacterSelect() {

  return (
    <div className="select-component">
        <div className="image"></div>
      <select>
        <option value="user1">user1</option>
        <option value="char1">char1</option>
        <option value="char2">char2</option>
      </select>
    </div>
  );
}