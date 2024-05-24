import React from 'react';
import user from '../../../assets/user1.jpg';

function Events({ onCharSelect }) {

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const char = {id: `${selectedValue}-id`, name: selectedValue};
    onCharSelect(char); // 콜백 함수 호출하여 선택한 값을 전달
  };

  return (
    <div className="select-component">
        <img src={user} alt="user" />
      <select onChange={handleChange}>
        <option value="user1">User 1</option>
        <option value="user2">User 2</option>
        <option value="user3">User 3</option>
        {/* 추가적인 사용자 옵션을 여기에 추가할 수 있습니다. */}
      </select>
    </div>
  );
}

export default Events;
