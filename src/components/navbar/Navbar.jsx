import { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineWhatsApp} from 'react-icons/ai'

export const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header className="flex justify-between align-middle h-[70px] sm:h-[100px] py-[10px]">
      <div className="text-center">
        <h1 className="text-green font-bold text-2xl">Matias Semelman.</h1>
        <small className='text-lg'>Software Dev.</small>
      </div>
      <nav>
        <ul className='p-2 uppercase hidden md:flex'>
          <li className='p-2'><a href="/">Home</a></li>
          <li className='p-2'><a href="/">Blog</a></li>
          <li className='p-2'><a href="/">Projects</a></li>
          <li className='p-2'><a href="/">Contact</a></li>
          <li className='pt-3 px-2'><a target="_blank" href="http://wa.me/5491130332808"><AiOutlineWhatsApp className='text-green'/></a></li>
        </ul>
      </nav>
      <nav className={!nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-green bg-green ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-b-black text-bold'><a href="/">Home</a></li>
          <li className='p-4 border-b border-b-black text-bold'><a href="/">Blog</a></li>
          <li className='p-4 border-b border-b-black text-bold'><a href="/">Projects</a></li>
          <li className='p-4 border-b border-b-black text-bold'><a href="/">Contact</a></li>
          
        </ul>
      </nav>
      <div className="hidden ">
        <button>
          Current
          <ul>
            <li>Light</li>
            <li>Dark</li>
          </ul>
        </button>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={40} className="mt-2"/> : <AiOutlineMenu size={40} className="mt-2"/>}
      </div>
    </header>
  );
};
