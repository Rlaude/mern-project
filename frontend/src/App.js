import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter> {/*surrounds whatever need the routing system*/}
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
