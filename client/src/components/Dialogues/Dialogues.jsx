import React from 'react';
import Card from 'react-bootstrap/Card';
import DialogueInput from './Dialogues.components/DialogueInput';

function Dialogues() {
  return (
    <>
      <Card><Card.Body><h2>Dialogue</h2></Card.Body></Card>
      <DialogueInput />
    </>
  );
}

export default Dialogues;
