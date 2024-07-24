import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import StudentList from './pages/display';
import Navbar from './pages/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/students" element={<StudentList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
