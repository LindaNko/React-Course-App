import './App.css'

function Greeting({name,career, age}) {
  return (
    <h1> Hello, I am {name} a {career} and I am {age} years old. </h1>
  );
}
//Component = is a function that returns JSX (JavaScript XML) which describes the UI of the component.
function App() {
  const showGreeting = true;
  return (
    <div>
        
      {showGreeting && <Greeting name={"Link"} career={"software engineer"} age={30}/>}
      {showGreeting && <Greeting name={"John"} career={"Pilot"} age={25}/>}
      
    </div>
  );
}

export default App
