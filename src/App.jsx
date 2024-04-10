import {Routes,Route} from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage/homepage'
import Aboutpage from './pages/aboutpage/aboutpage';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Aboutpage />} />
    </Routes>
  );
}

export default App
