const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const messages = [];

// API endpoint for sending a message
app.post('/api/send-message', (req, res) => {
  const { sender, recipient, text } = req.body;
  const message = { sender, recipient, text, timestamp: new Date() };
  messages.push(message);
  res.json({ success: true });
});

// API endpoint for retrieving messages
app.get('/api/messages/:recipient', (req, res) => {
  const { recipient } = req.params;
  const recipientMessages = messages.filter(
    (message) => message.recipient === recipient
  );
  res.json(recipientMessages);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
