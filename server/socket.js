/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
const ws = require('ws');

const wss = new ws.Server({
  port: 8000,
}, () => console.log('Server started on 8000'));

function broadcastMessage(message) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(message));
  });
}

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    message = JSON.parse(message);
    switch (message.event) {
      case 'message':
        broadcastMessage(message);
        break;
      case 'connection':
        broadcastMessage(message);
        break;
    }
  });
});

// /* eslint-disable no-shadow */
// /* eslint-disable guard-for-in */
// const { Server } = require('ws');
// const { v4: uuidv4 } = require('uuid');

// const { writeFile, readFileSync, existsSync } = require('fs');

// const wss = new Server({ port: 8000 });

// wss.on('open', () => {
//   wss.send('something');
// });

// const clients = {};
// const log = existsSync('log') && readFileSync('log', 'utf-8');
// const messages = log ? JSON.parse(log) : [];

// wss.on('connection', (ws) => {
//   const id = uuidv4();
//   clients[id] = ws;

//   console.log(`New client ${id}`);
//   ws.send(JSON.stringify(messages));

//   ws.on('message', (rawMessage) => {
//     const { name, message } = JSON.parse(rawMessage);
//     messages.push({ name, message });
//     console.log(message);
//     // eslint-disable-next-line no-restricted-syntax
//     for (const id in clients) {
//       clients[id].send(JSON.stringify([{ name, message }]));
//     }
//   });

//   ws.on('close', () => {
//     delete clients[id];
//     console.log(`Client is closed ${id}`);
//   });
// });

// process.on('SIGINT', () => {
//   wss.close();
//   writeFile('log', JSON.stringify(messages), (err) => {
//     if (err) {
//       console.log(err);
//     }
//     process.exit();
//   });
// });
