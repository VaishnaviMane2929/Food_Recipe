import logo from './logo.svg';
import './App.css';
import Mainpage from './Components/Mainpage';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Mainpage/>
    <Routes>
      <Route path='/' element={<Mainpage/>}/>

    </Routes>
    </>
    

    

  );
}

export default App;
