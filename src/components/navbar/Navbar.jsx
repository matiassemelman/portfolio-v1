import { Menu } from 'react-feather';
import {useState} from 'react'

export const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const handleOpen = () => {
    setNavbarOpen(!isNavbarOpen);
  };

    return (
        <header className="flex justify-between align-middle h-[70px] sm:h-[100px] py-[10px]">
        <div className="text-center">
          <h1 className="text-orange">Matias Semelman</h1>
          <smal>Software Dev.</smal>
        </div>
        
        <Menu className='sm:hidden' size={'48px'} onClick={handleOpen}/>
        <nav className={`sm:flex ${isNavbarOpen ? 'visible' : 'hidden'}`}>
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
    )
}