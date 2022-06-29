import Home from './pages/Home';
import Login from './pages/Login';
import Shop from './pages/Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log(BASE_URL)

export default function App() {
  return (
    <Router basename="/coffee-store/">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop/" element={<Shop/>} />
        <Route path="/login/" element={<Login/>} />
      </Routes>
    </Router>
  );
}
