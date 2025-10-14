import './App.css'
import Sidebar from './Components/Sidebar'
import Topbar from './Components/Topbar';
function App() {
  return(
    <div className="grid-container">
        <Sidebar/>
        <div className="main-area">
          <Topbar/>
        </div>
      </div>
  );

}

export default App
