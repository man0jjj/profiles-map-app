// src/api.js
export const API_URL = 'http://localhost:5000';

export const fetchProfiles = async () => {
  const response = await fetch(`${API_URL}/profiles`);
  return response.json();
};

export const addProfile = async (profile) => {
  const response = await fetch(`${API_URL}/profiles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profile),
  });
  return response.json();
};
