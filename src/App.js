import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import Onboarding from './components/Onboarding';
import ChatBot from './components/ChatBot';

function App() {
  const [userProfile, setUserProfile] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ChatBot />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route 
            path="/onboarding" 
            element={<Onboarding setUserProfile={setUserProfile} />} 
          />
          <Route 
            path="/dashboard" 
            element={<Dashboard userProfile={userProfile} />} 
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
