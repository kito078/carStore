import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TopNav from "./components/TopNav/TopNav";
import Hero from "./components/Hero/Hero";
import Chemical from "./components/Chemical/Chemical";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container-side">
        <Navbar />
        {/* <Chemical /> */}
      </div>
      {/* <Hero /> */}
    </div>
  );
}

export default App;
