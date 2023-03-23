import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages & components
import Home from './pages/Home';
import About from './pages/About';
import Add from './pages/Add';
import Navbar from './components/Navbar';
//import NarrativeDetails from './components/NarrativeDetails';
//import NarrativeList from './components/NarrativeList';
import NarrativeDetails from './components/NarrativeDetails';

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
          <Route 
            path="/About"
            element={<About />}
          />
          <Route 
            path="/Narratives/:id"
            element={<NarrativeDetails />}
          />
          <Route 
            path="/Add"
            element={<Add />}
          />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
