import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Addstudent from './components/Addstudent';
import Admin from './components/Admin';
import'./index.css';


function App() {
  return (
    
    <div className="App">
      {/* <Admin/> */}
     <Routes>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/addStudent'  element={<Addstudent/>}/>
     </Routes>
    </div>
  );
}

export default App;
