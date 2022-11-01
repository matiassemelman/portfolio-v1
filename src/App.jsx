
function App() {
  

  return (
    <div className="App min-h-screen bg-background text-white">
      <div className="mx-[50px] ">
        <header className="flex justify-between align-middle h-[70px] sm:h-[100px] py-[10px]">
          <div className="text-center">
            <h1 className="text-orange">Matias Semelman</h1>
            <smal>Software Dev.</smal>
          </div>
          <nav className="hidden sm:flex">
            <ul className="flex">
              <li>About</li>
              <li>Experience</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
            <div className="ml-[24px]">
              <a href="/">Resume</a>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default App;
