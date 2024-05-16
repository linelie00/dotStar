import React from 'react';
import './App.css';
import { socket } from './chatting/socket';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const id = event.target.id.value;
    const room = event.target.room.value;
    const user = { name: name, id: id };

    console.log(user, room);
    socket.emit('join', { user, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
    navigate('/room');
  }

  return (
    <div>
      TestLoginPage
      <form onSubmit={onSubmit}>
        <label>
          <p>Username:</p>
          <input type="text" name="name" />
          <p>id:</p>
          <input type="text" name="id" />
          <p>room:</p>
          <input type="text" name="room" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginPage;