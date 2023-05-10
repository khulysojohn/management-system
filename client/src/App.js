
import './App.css';
import {useState} from "react";
import axios from 'axios';

function App() {

  const[name,setName] = useState("");
  const[surname,setSurname] = useState("");
  const[email,setEmail] = useState("");
  const[age,setAge] = useState(0);
  const[grade,setGrade] = useState(0);
  const[gender,setGender] = useState("");

  const addStudent = () =>{
    axios.post("http://localhost:3001/create",
    {
      name: name,
      surname: surname,
      email: email,
      age: age,
      grade: grade,
      gender: gender,
    }).then(() =>{
      console.log("success");
    });
  }

  return (
    <div className="App">
        <div className="head">
          <h1>Management system</h1>
        </div>
        
        <div className="form">
          <label>name:</label>
          <input type="text"
          onChane = {(event) =>{
            setName(event.target.value)
          }
        }
        />
          <label>surname:</label>
          <input type="text"
          onChane = {(event) =>{
            setSurname(event.target.value)
          }
        }
          />
          <label>email:</label>
          <input type="text"
          onChane = {(event) =>{
            setEmail(event.target.value)
          }
        }
          />
          <label>age:</label>
          <input type="number"
          onChane = {(event) =>{
            setAge(event.target.value)
          }
        }
          />
          <labe>grade:</labe>
          <input type="number"
          onChane = {(event) =>{
            setGrade(event.target.value)
          }
        }
          />
          <label>gender:</label>
          <input type="text"
          onChane = {(event) =>{
            setGender(event.target.value)
          }
        }
          />
        </div>

        <div className="button">
          <button onClick={addStudent}>Add student</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button>Show student</button>
        </div>
        
    </div>
  );
}

export default App;
