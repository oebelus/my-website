import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [clicked, setClicked] = useState("");
  const location = useLocation();

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const noSidebarRoute = location.pathname.startsWith('/blog/') || location.pathname.startsWith('/gallery/');

  return (
    <div className="dark:bg-[#11181A] md:flex min-h-screen max-w-[100vw] overflow-hidden">
      {!noSidebarRoute && 
        <div className="top-0 left-0 w-64 md:h-screen bg-white dark:bg-[#11181A]">
          <Navbar clicked={clicked} setClicked={setClicked} />
        </div>
      }
      
      <div className="min-h-screen w-full overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
