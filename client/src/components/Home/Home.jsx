/* eslint-disable max-len */
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Home() {
  return (
    <Card style={{ width: '22rem' }} className="about-me">
      <Card.Img variant="top" src="https://raw.githubusercontent.com/mazaytsevs/business-card.github.io/main/image.png" />
      <Card.Body>
        <Card.Title>Welcome to my 4atik site!</Card.Title>
        <Card.Text>
          Hi! My name is Maria. I am a JavaScript developer. This site (backend and frontend) was developed by me.
          Thank you for visiting!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="icons-links">
          <a href="https://www.linkedin.com/in/mazaytsevs/"><img align="left" alt="mazaytsevs | LinkedIn" width="60px" src="https://img.icons8.com/color/344/linkedin-circled--v3.png" /></a>
          <a href="https://t.me/mazay_tseva"><img align="left" alt="mazaytsevs | Telegram" width="60px" src="https://img.icons8.com/fluency/48/000000/telegram-app.png" /></a>
          <a href="https://api.whatsapp.com/send/?phone=79126246550&text&type=phone_number&app_absent=0"><img align="left" alt="mazaytsevs | WA" width="60px" src="https://img.icons8.com/color/344/whatsapp--v5.png" /></a>
          <a href="https://instagram.com/mazay_tseva?igshid=YmMyMTA2M2Y="><img align="left" alt="mazaytsevs | Instagram" width="60px" src="https://img.icons8.com/fluency/48/000000/instagram-new.png" /></a>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://github.com/mazaytsevs?tab=repositories">more projects</Card.Link>
        <Card.Link href="https://mazaytsevs.github.io/Business-Card.github.io/">business card</Card.Link>

      </Card.Body>
    </Card>
  );
}

export default Home;
