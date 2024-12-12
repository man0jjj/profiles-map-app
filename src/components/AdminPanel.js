import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// AdminPanel Component
const AdminPanel = ({ onProfileSelect }) => {
  const [profiles, setProfiles] = useState([]); // State to manage profile list
  const [searchTerm, setSearchTerm] = useState(''); // State to manage search input

  // Function to handle adding a new profile
  const handleAddProfile = () => {
    const newProfile = {
      id: uuidv4(),
      name: 'John Doe',
      lat: 37.7749, // Default coordinates (San Francisco)
      lng: -122.4194,
    };
    setProfiles([...profiles, newProfile]);
  };

  // Function to delete a profile
  const handleDeleteProfile = (id) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
  };

  // Function to edit a profile
  const handleEditProfile = (id) => {
    const name = prompt('Enter new name:');
    const lat = parseFloat(prompt('Enter new latitude:'));
    const lng = parseFloat(prompt('Enter new longitude:'));

    if (!isNaN(lat) && !isNaN(lng)) {
      const updatedProfiles = profiles.map(profile =>
        profile.id === id ? { ...profile, name, lat, lng } : profile
      );
      setProfiles(updatedProfiles);
    } else {
      alert('Invalid latitude/longitude!');
    }
  };

  // Function to trigger map view for a selected profile
  const selectProfile = (profile) => {
    onProfileSelect(profile);
  };

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter profiles based on the search term
  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3>Admin Panel</h3>
      {/* Button to Add Profile */}
      <button onClick={handleAddProfile}>Add Profile</button>
      <div>
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div>
        <h4>Profiles</h4>
        {/* List of Profiles */}
        <ul>
          {filteredProfiles.map((profile) => (
            <li key={profile.id}>
              {profile.name}
              {/* View Profile on Map */}
              <button onClick={() => selectProfile(profile)}>View on Map</button>
              {/* Edit Button */}
              <button onClick={() => handleEditProfile(profile.id)}>Edit</button>
              {/* Delete Button */}
              <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;







