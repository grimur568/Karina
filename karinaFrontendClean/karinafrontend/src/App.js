import React from 'react';
import './App.css';
import Login from './Pages/login';
import FrontPage from './Pages/frontPage';
import ServicePage from './Pages/servicePage';
import MachinePage from './Pages/machinePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './components/navBar';
// Import the AuthProvider
import { AuthProvider } from './authContext'; // Adjust the path as necessary
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <AuthProvider> 
        <MenuBar />
        <Routes>
          <Route path="/" element={<FrontPage/>} />
          <Route path="/Service" element={<ServicePage />} />
          ' <Route path="/Machines" element={<MachinePage />} />
          <Route path="/Assignments" element={<Login />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
