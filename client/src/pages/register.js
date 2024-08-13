import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Register = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [grade, setGrade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { name, surname, age, gender, grade };

        // Make a POST request to the backend
        axios.post('http://localhost:3001/create', userData)
            .then(response => {
                console.log(response.data);
                // Handle success (e.g., display a success message, clear form)
            })
            .catch(error => {
                console.error("There was an error submitting the form!", error);
                // Handle error (e.g., display an error message)
            });
    };

    return (
        <div className='reg-container'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Surname:</label>
                <input
                    type="text"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />
                <label>Age:</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <label>Gender:</label>
                <input
                    type="text"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
                <label>Grade:</label>
                <input
                    type="number"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
