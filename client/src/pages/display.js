import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const Display = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch data from the backend
        axios.get('http://localhost:3001/users')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the student data!', error);
            });
    }, []);

    return (
        <div className="student-container">
            <h1 className="student-header">Students</h1>
            {students.map((student, index) => (
                <div className="student-card" key={index}>
                    <h3>Name:  {student.name}</h3>
                    <h3>Surname: {student.surname}</h3>
                    <h3>Age:  {student.age}</h3>
                    <h3>Grade: {student.grade}</h3>
                    <h3>Gender:  {student.gender}</h3>
                </div>
            ))}
        </div>
    );
};

export default Display;

