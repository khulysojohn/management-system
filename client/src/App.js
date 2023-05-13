
import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {

  const[name,setName] = useState("");
  const[surname,setSurname] = useState("");
  const[email,setEmail] = useState("");
  const[age,setAge] = useState(0);
  const[grade,setGrade] = useState(0);
  const[gender,setGender] = useState("");

  const[studentList,setStudentList] = useState([]);

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

    
  };
  const getStudent =() => {
    Axios.get("http://localhost:3001/student").then((response) =>{
      console.log(response);
    });
  };

  return (
    <div className="App">
        <div className="head">
          <h1>Management system</h1>
        </div>
        
        <div className="form">
          <label>name:</label>
          <input type="text"
          onChange = {(event) =>{
            setName(event.target.value)
          }
        }
        />
          <label>surname:</label>
          <input type="text"
          onChange = {(event) =>{
            setSurname(event.target.value)
          }
        }
          />
          <label>email:</label>
          <input type="text"
          onChange = {(event) =>{
            setEmail(event.target.value)
          }
        }
          />
          <label>age:</label>
          <input type="number"
          onChange = {(event) =>{
            setAge(event.target.value)
          }
        }
          />
          <label>grade:</label>
          <input type="number"
          onChange = {(event) =>{
            setGrade(event.target.value)
          }
        }
          />
          <label>gender:</label>
          <input type="text"
          onChange = {(event) =>{
            setGender(event.target.value)
          }
        }
          />
        </div>

        <div className="button">
          <button onClick={addStudent}>Add student</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={getStudent}>Show student</button>
        </div>
        <div className="student">
          
        </div>
        
    </div>
  );
}

export default App;
