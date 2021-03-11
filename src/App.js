import logo from './logo.svg';
import './App.css';

function App() {
  var name="fahima";
  var person={
    name:"jannath",
    id:"33",
    section:"A",
    proffession:"developer"

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <h1>hi, My name is {name}</h1>
        <p>my id is {10+20}</p>

        <p>another for object variable</p>
        <h style={{backgroundColor:'tomato', color:'black', }}>ID:{person.id},  name: {person.name}</h>

  
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

 
    </div>
  );
}

function Person(){

  var person2={
    name:"jannath",
    id:"33",
    section:"A",
    proffession:"developer"

  }

const  personStyle={
  border:"1px solid red",
  boxShadow:"5px 5px 10px tomato" ,
   margin:"30px",
  width:"900px"
  }
  return(
    <div style={personStyle}>
      title: <h1>{person2.proffession}</h1>
      <p>good to hear that..</p>
    </div>

  );
}


export default App;
