
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
  const[contact,setContact] =useState(0);

  const[studentList,setStudentList] = useState([]);

  const addStudent = () =>{
    axios.post("http://localhost:3001/create",
    {
      name: name,
      surname: surname,
      email: email,
      contact: contact,
      age: age,
      grade: grade,
      gender: gender,
    }).then(() =>{
      console.log("success");
    });
};
  const getStudent =() => {
    axios.get("http://localhost:3001/infomation").then((response) =>{
      setStudentList(response.data);
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
          <label>gender:</label>
          <input type="text"
          onChange = {(event) =>{
            setGender(event.target.value)
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
             <label>contact:</label>
          <input type="number"
          onChange = {(event) =>{
            setContact(event.target.value)
          }
        }
        />
        </div>

        <div className="button">
          <button onClick={addStudent}>Add student</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={getStudent}>Show/Hide</button>
        </div>
        <div className="student">
          {studentList.map((val, key) =>{
            return<div className="display">
                <h3>Name:<br/>{val.name}</h3>
                <h3>Surname:<br/> {val.surname}</h3>
                <h3>Email:<br/> {val.email}</h3>
                <h3>Age:<br/> {val.age}</h3>
                <h3>Grade: <br/>{val.grade}</h3>
                <h3>Gender:<br/> {val.gender}</h3>
                <h3>Contact:<br/>{val.contact}</h3>
            </div>
          })}

        </div>
        
    </div>
  );
}

export default App;
