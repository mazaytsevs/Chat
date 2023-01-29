/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

// import { useSelector } from 'react-redux';

function DialogueInput() {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  const socket = useRef();
  // const [connected, setConnected] = useState(false);
  // const [username, setUsername] = useState('');

  const user = JSON.parse(useSelector((state) => state.user) || localStorage.getItem('user'));

  function connect() {
    socket.current = new WebSocket('ws://localhost:8000');

    socket.current.onopen = () => {
      // setConnected(true);
      const message = {
        event: 'connection',
        username: user.nick,
        id: Date.now(),
      };
      socket.current.send(JSON.stringify(message));
    };
    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };
    socket.current.onclose = () => {
      console.log('Socket закрыт');
    };
    socket.current.onerror = () => {
      console.log('Socket произошла ошибка');
    };
  }

  useEffect(() => {
    connect();
  }, []);

  const sendMessage = async () => {
    const message = {
      username: user.nick,
      message: value,
      id: Date.now(),
      event: 'message',
    };
    socket.current.send(JSON.stringify(message));
    setValue('');
  };

  return (
    <>
      <div>
        {messages.map((mess) => (
          <Card key={mess.id} className={mess.username === user.nick ? 'user-message' : 'stranger-message'}>
            <Card.Header key={mess.id}>
              <strong className="me-auto">{mess.username}</strong>
            </Card.Header>
            {mess.event === 'connection'
                ? (
                  <Card.Body className="connection_message">
                    User connected.
                  </Card.Body>
                )
                : (
                  <Card.Body className="message">
                    {mess.message}
                  </Card.Body>
                )}
          </Card>
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

export default DialogueInput;
