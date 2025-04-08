import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [clicked, setClicked] = useState("");
  const location = useLocation();

  // Dark mode setup
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const noSidebarRoute = location.pathname.startsWith('/blog/') || location.pathname.startsWith('/gallery/');

  return (
    <div className="dark:bg-[#11181A] md:flex min-h-screen max-w-[100vw] overflow-hidden">
      {!noSidebarRoute && 
        <div className="md:fixed top-0 left-0 md:w-64 md:z-50">
          <Navbar clicked={clicked} setClicked={setClicked} />
        </div>
      }
      {!noSidebarRoute &&
        <div className="md:block hidden ml-64 border-l border-gray-500 dark:border-gray-300"></div>
      }
      <div className="min-h-screen w-full overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
