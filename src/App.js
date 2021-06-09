import "./App.css";
import { SpinnyThing } from "./SpinnyThing";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {["a", "b", "c", "d"].map((letter) => (
          <SpinnyThing key={letter} name={letter} />
        ))}
        <SpinnyThing name={"Hello"} />
        <SpinnyThing name={"World"} />
      </header>
    </div>
  );
}

export default App;
