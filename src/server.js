const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock database
let profiles = [
  { id: '1', name: 'John Doe', lat: 37.7749, lng: -122.4194 },
  { id: '2', name: 'Jane Smith', lat: 40.7128, lng: -74.0060 }
];

// Routes
app.get('/profiles', (req, res) => {
  res.json(profiles);
});

app.post('/profiles', (req, res) => {
  const newProfile = { id: Date.now().toString(), ...req.body };
  profiles.push(newProfile);
  res.status(201).json(newProfile);
});

app.put('/profiles/:id', (req, res) => {
  const { id } = req.params;
  const updatedProfile = { ...req.body };
  profiles = profiles.map(profile => (profile.id === id ? updatedProfile : profile));
  res.json(updatedProfile);
});

app.delete('/profiles/:id', (req, res) => {
  profiles = profiles.filter(profile => profile.id !== req.params.id);
  res.status(200).json({ message: 'Profile deleted' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
