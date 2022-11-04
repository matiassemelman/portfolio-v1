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
        <nav className={`sm:flex ${isNavbarOpen ? 'visible absolute top-20 left-40' : 'hidden'}`}>
          <ul className="sm:flex">
            <li className='hidden sm:px-2'>About</li>
            <li className='hidden sm:px-2'>Experience</li>
            <li className='hidden sm:px-2'>Work</li>
            <li className='hidden sm:px-2'>Contact</li>
          </ul>
          <div className="text-3xl mr-2">
            <a href="/">{isNavbarOpen && '💾' }Resume</a>
            <div className='my-2'></div>  
            <a href="http://wa.me/5491130332808" target="_blank" rel='noreferrer'>Whatsapp</a>
          </div>
        </nav>
      </header>
    )
}