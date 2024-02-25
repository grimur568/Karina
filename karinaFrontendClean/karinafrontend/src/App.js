import React from 'react';
import './App.css';
import Login from './Pages/login';
import FrontPage from './Pages/frontPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './components/menuBar';
// Import the AuthProvider
import { AuthProvider } from './authContext'; // Adjust the path as necessary

function App() {
  return (
    <Router>
      <AuthProvider> {/* Wrap the part of your app that needs auth state */}
        <MenuBar />
        <Routes>
          <Route path="/" element={<FrontPage/>} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes here */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
