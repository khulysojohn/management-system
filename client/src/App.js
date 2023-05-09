
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="head">
          <h1>Management system</h1>
        </div>
        
        <div className="form">
          <label>fullnames:</label>
          <input type="text"/>
          <label>surname:</label>
          <input type="text"/>
          <label>email:</label>
          <input type="text"/>
          <label>age:</label>
          <input type="number"/>
          <labe>class:</labe>
          <input type="text"/>
          <label>gender:</label>
          <input type="text"/>
        </div>
        <div className="button">
          <button>Add student</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button>Show student</button>
        </div>
        <hr/>
    </div>
  );
}

export default App;
