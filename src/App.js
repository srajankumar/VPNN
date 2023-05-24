import "./App.css";
let name = "Srajan";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <div className="container">
          <h1>Hello {name}</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            illo doloremque debitis laboriosam corrupti quod assumenda,
            doloribus dolor optio harum, at aspernatur.
          </p>
        </div>
      </nav>
    </>
  );
}

export default App;
