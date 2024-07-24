
import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [grade, setGrade] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({ name, surname, age, gender, grade});
    };

    return (
        <div>
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
