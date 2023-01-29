/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import DialogueInput from './Dialogues.components/DialogueInput';

function Dialogues() {
  const user = useSelector((state) => state.user) || JSON.parse(localStorage.getItem('user'));

  return (
    <>
      { user.status === 'active'
        ? (
          <>
            <Card><Card.Body><h2>Dialogues</h2></Card.Body></Card>
            <DialogueInput />
          </>
        )
        : (
          <Card><Card.Body><h2>You was blocked. Please contact to support</h2></Card.Body></Card>)}
    </>
  );
}

export default Dialogues;
