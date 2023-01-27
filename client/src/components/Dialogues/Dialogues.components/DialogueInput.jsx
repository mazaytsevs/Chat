/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';

// import { useSelector } from 'react-redux';

function DialogueInput() {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  const socket = useRef();
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState('');

  function connect() {
    socket.current = new WebSocket('ws://localhost:8000');

    socket.current.onopen = () => {
      setConnected(true);
      const message = {
        event: 'connection',
        username,
        id: Date.now(),
      };
      socket.current.send(JSON.stringify(message));
    };
    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [message, ...prev]);
    };
    socket.current.onclose = () => {
      console.log('Socket закрыт');
    };
    socket.current.onerror = () => {
      console.log('Socket произошла ошибка');
    };
  }

  const sendMessage = async () => {
    const message = {
      username,
      message: value,
      id: Date.now(),
      event: 'message',
    };
    socket.current.send(JSON.stringify(message));
    setValue('');
  };
  // const ws = new WebSocket('ws://127.0.0.1:8000');
  // const user = useSelector((state) => state.user) || localStorage.getItem('user');

  // const [message, setMessage] = useState({
  //   userNick: JSON.parse(user).nick,
  //   message: '',
  //   date: new Date(),
  // });

  // const changeHandler = (e) => {
  //   setMessage((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log('message', message);
  //   console.log('typeof user', typeof user);
  //   // ws.onmessage = () => {
  //   //   console.log('come message', message);
  //   // };
  //   ws.send(JSON.stringify({
  //     message,
  //   }));
  // };

  if (!connected) {
    return (
      <Form className="dialogue-input">
        <div className="form">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Введите ваше имя"
          />
          <Button onClick={connect}>Войти</Button>
        </div>
      </Form>
    );
  }

  return (
    <>
      <div className="messages">
        {messages.map((mess) => (
          <Toast key={mess.id}>
            <Toast.Header key={mess.id}>
              {' '}
              <strong className="me-auto">{mess.username}</strong>
            </Toast.Header>
            {mess.event === 'connection'
                ? (
                  <Toast.Body className="connection_message">
                    User connected .
                  </Toast.Body>
                )
                : (
                  <Toast.Body className="message">
                    {mess.message}
                  </Toast.Body>
                )}
          </Toast>
          ))}
      </div>
      <Form className="dialogue-input">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your message:</Form.Label>
          <Form.Control value={value} onChange={(e) => setValue(e.target.value)} type="text" />
        </Form.Group>
        <Button onClick={sendMessage} variant="dark" className="submit-Button">Send</Button>
      </Form>

    </>
  );
}

  // <Form className="dialogue-input">
  //   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  //     <Form.Label>Your message</Form.Label>
  //     <Form.Control
  //       as="textarea"
  //       name="message"
  //       onChange={changeHandler}
  //       rows={3}
  //     />
  //   </Form.Group>
  //   <Button type="Button" onClick={submitHandler} variant="dark" className="submit-Button">Send</Button>
  // </Form>;

export default DialogueInput;
