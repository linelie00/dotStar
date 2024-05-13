import React, { useState } from 'react';
import user from './user1.jpg';

function Events() {
  const [selectedUser, setSelectedUser] = useState('user1'); // 기본 사용자 선택

  const handleChange = (event) => {
    setSelectedUser(event.target.value);
  };

  return (
    <div className="select-component">
        <img src={user} alt="user" />
      <select value={selectedUser} onChange={handleChange}>
        <option value="user1">User 1</option>
        <option value="user2">User 2</option>
        <option value="user3">User 3</option>
        {/* 추가적인 사용자 옵션을 여기에 추가할 수 있습니다. */}
      </select>
    </div>
  );
}

export default Events;
