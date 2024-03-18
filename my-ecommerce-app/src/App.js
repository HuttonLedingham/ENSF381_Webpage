import './App.css';
import Homepage from "./components/Homepage";
import Productpage from "./components/Productpage";
import Loginpage from "./components/Loginpage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return(
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Productpage" element={<Productpage />} />
      <Route path="/Login" element={<Loginpage />} />

    </Routes>
    </BrowserRouter>

  </div>
  );
  }

export default App;
