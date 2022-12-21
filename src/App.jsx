import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";

function App() {
  

  return (
    <div className="App min-h-screen bg-background  " >
      <div className="mx-[50px] ">
        <Navbar/>
        <Hero/>
      </div>
    </div>
  );
}

export default App;
