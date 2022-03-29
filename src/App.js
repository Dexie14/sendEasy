import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div >
        <Header />
        <main>
        <div >
          <Routes>
            <Route path='/' element={<Home/>} exact />
          </Routes>
        </div>
        </main>
      </div>
    </Router>
  );
};

export default App;