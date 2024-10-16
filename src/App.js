import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Profile from './Components/Profile/Profile';

function App() {


  return (
    <div className='overflow-hidden no-scrollbar'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
