import classes from './App.module.css';
import Header from './Components_Home/Header/Header';
import Signup from './Pages/SignUp/Signup';
import Home from './Pages/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className={classes.app}>
        <Header />
        <main>
        <div >
          <Routes>
            <Route path='/' element={<Home/>} exact />
            <Route path='/Signup' element={<Signup/>} exact />
          </Routes>
        </div>
        </main>
      </div>
    </Router>
  );
};

export default App;