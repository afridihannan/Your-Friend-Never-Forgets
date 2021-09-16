import { Grow } from '@material-ui/core';
import './App.css';
import memories from './Components/Images/memories.png'

function App() {
  return (
    <>
      <div className="container">
        <div className="head">
          <h2>Memories</h2>
          <img src={memories} />
        </div>
        
      </div>
    </>
  );
}

export default App;
