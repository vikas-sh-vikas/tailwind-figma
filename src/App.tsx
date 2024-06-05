import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompanyProfile from './Page/CompanyProfile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CompanyProfile />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
