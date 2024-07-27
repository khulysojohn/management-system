import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Display = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch data from the backend
        axios.get('http://localhost:3306/regstatus')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the student data!', error);
            });
    }, []);

    return (
        <div className="student">
            {students.map((student, index) => (
                <div className="display" key={index}>
                    <h3>Name:<br />{student.name}</h3>
                    <h3>Surname:<br /> {student.surname}</h3>
                    <h3>Age:<br /> {student.age}</h3>
                    <h3>Grade:<br /> {student.grade}</h3>
                    <h3>Gender:<br /> {student.gender}</h3>
                </div>
            ))}
        </div>
    );
};

export default Display;
