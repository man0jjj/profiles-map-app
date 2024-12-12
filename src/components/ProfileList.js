import React, { useState } from 'react';
import MapComponent from './MapComponent';
import AdminPanel from './AdminPanel';

// Mock profile data
const initialProfiles = [
  { id: 1, name: 'Alice', lat: 37.7749, lng: -122.4194 },
  { id: 2, name: 'Bob', lat: 40.7128, lng: -74.006 },
  { id: 3, name: 'Charlie', lat: 34.0522, lng: -118.2437 },
];

const ProfileList = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [profiles, setProfiles] = useState(initialProfiles);

  const handleViewOnMap = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div>
      <h1>Profiles</h1>
      <AdminPanel profiles={profiles} setProfiles={setProfiles} />

      <div>
        {profiles.map(profile => (
          <div key={profile.id} style={{ marginBottom: '10px' }}>
            <h3>{profile.name}</h3>
            <button onClick={() => handleViewOnMap(profile)}>View on Map</button>
          </div>
        ))}
      </div>

      {selectedProfile && (
        <div>
          <h2>Location of {selectedProfile.name}</h2>
          <MapComponent lat={selectedProfile.lat} lng={selectedProfile.lng} name={selectedProfile.name} />
        </div>
      )}
    </div>
  );
};

export default ProfileList;


