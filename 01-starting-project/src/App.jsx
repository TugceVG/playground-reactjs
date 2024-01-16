import CoreConcepts from "./components/CoreConcepts.jsx";
import Example from "./components/Example.jsx";
import Header from "./components/header/Header.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Example />
      </main>
    </div>
  );
}

export default App;
