import React, { useState } from 'react';
import AdminPanel from './AdminPanel';
import LoginPage from './LoginPage';
import MapComponent from './MapComponent';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div>
      {!isAuthenticated ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <AdminPanel onProfileSelect={handleProfileSelect} />
          {selectedProfile && <MapComponent profile={selectedProfile} />}
        </div>
      )}
    </div>
  );
}

export default App;





