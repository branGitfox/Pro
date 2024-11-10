

import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Stats from './components/Stats/Stats';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import Info from './components/Info/Info';
import { Outlet } from 'react-router-dom';
function App() {

  return (
<>

    <div className="container sm relative flex justify-center m-auto">
        <Navbar/>
        <Outlet />
    </div>
</>
    
  )
}

export default App
