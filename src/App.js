
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

  const collectionProducts=[
    {name:"jsTools", price:"$50" },
    {name:"PHPTools", price:"$50" },
    {name:"cssTools", price:"$50" }
  ]


 const nameArrays=["jannath","fahima","rita","mita","tina"]


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
        <h1>hi, My name is {name}</h1>
        <p>my id is {10+20}</p>
     <h1>ul start for ul li all list of product and nameArray</h1>
        <ul>
            {
          nameArrays.map(nameArray=><li>{nameArray}</li>)

            }
            {
              collectionProducts.map(collectionProduct=><li>{collectionProduct.name}</li>)
            }
            {
              collectionProducts.map(cProduct=><Product collectionProduct={cProduct}></Product>)
            }
        </ul>
        </div>
        <h1>another for object variable</h1>
        <h4 style={{backgroundColor:'tomato', color:'black', }}>ID:{person.id},  name: {person.name}</h4>

        <h1>for product component (name and price)</h1>
        <Product collectionProduct={collectionProducts[0]}></Product>
        <Product collectionProduct={collectionProducts[1]}></Product>

         <h1>for person component (name and price)</h1> 
          <Person proffession="Developer" paragraph="good to hear that.."></Person>
        <Person proffession="Teacher" paragraph="good to hear that..Novel prof."></Person>
        <Person proffession="Banker"></Person>
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
// person component

function Person(props){

  // var person2={
  //   name:"jannath",
  //   id:"33",
  //   section:"A",
  //   proffession:"developer"

  // }

const  personStyle={
  border:"1px solid red",
  boxShadow:"5px 5px 10px tomato" ,
   margin:"30px",
  width:"900px"
  }
  return(
    <div style={personStyle}>
      {/* Title<h1>{person2.proffession}</h1> */}
      Title<h1>{props.proffession}</h1>
      <p>{props.paragraph}</p>
    </div>

  );
}

// product component

function Product(props){
  const productStyle={
    border:"1px solid gray",
    broderRedius:"30px",
    backgroundColor:"light-gray",
    height:"300px",
    width:"600px",
    float:"left",
    marginTop:"50px"
  }

 

  const {name,price}=props.collectionProduct;
  return(
    <div style={productStyle}>
      <h6>props exp</h6>
      <h1>ProductName:{name}</h1>
      <p>price:{price}</p>
    </div>
  )
}




export default App;
