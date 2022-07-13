import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages & components
import Admin from './pages/Admin';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="App">
      <Router basename="coffee">
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
