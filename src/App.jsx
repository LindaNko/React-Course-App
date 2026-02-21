import './App.css'

function Greeting() {
  return <h1>Hello, World! I am Link</h1>;
}
//Component = is a function that returns JSX (JavaScript XML) which describes the UI of the component.
function App() {
 const career= "Software Engineer";
 const age = 33;

  return (
    <div>
      
        <Greeting />
        <p> A {career} and I am {age} years old.</p>
      
    </div>
  );
}

export default App
