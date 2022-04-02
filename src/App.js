import classes from './App.module.css';
import Header from './Components_Home/Header/Header';
import Signup from './Pages/SignUp/Signup';
import Login from './Pages/Login/Login';
import Activate from './Pages/ActivateAcc/Activate';
import Home from './Pages/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';
import MainLay2 from './MainLayout/MainLay2';


function App() {
  return (
    <Router>
      <div className={classes.app}>
        <main>
        <div >
          <Routes>
            <Route path='/' element={<MainLayout><Home/></MainLayout>} exact />
            <Route path='/Signup' element={<MainLay2><Signup/></MainLay2>} exact />
            <Route path='/Login' element={<MainLay2><Login/></MainLay2>} exact />
            <Route path='/Activate' element={<MainLay2><Activate/></MainLay2>} exact />
          </Routes>
        </div>
        </main>
      </div>
    </Router>
  );
};

export default App;