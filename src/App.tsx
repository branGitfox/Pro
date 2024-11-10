
import Navbar from './components/Navbar/Navbar';
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
