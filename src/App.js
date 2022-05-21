import './App.css'
import MainDash from './Components/MainDash/MainDash';
import RightSIde from './Components/RightSide/RightSIde';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
       <div className="AppGlass">
      <Sidebar/>
      <MainDash/>
      <RightSIde/>
       </div>
    </div>
  );
}

export default App;
