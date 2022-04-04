import classes from './App.module.css';
import Header from './Components_Home/Header/Header';
import Signup from './Pages/SignUp/Signup';
import Login from './Pages/Login/Login';
import Activate from './Pages/ActivateAcc/Activate';
import Selectplan from './Pages/Selectplan/Selectplan';
import Profile from './Pages/Profile/Profile';
import AddAddress from './Pages/AddAddress/AddAddress';
import Contacts from './Pages/Contacts/Contacts';
import Dashboard from './Pages/Dashboard/Dashboard';
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
            <Route path='/Selectplan' element={<Selectplan/>} exact />
            <Route path='/Profile' element={<Profile/>} exact />
            <Route path='/AddAddress' element={<AddAddress/>} exact />
            <Route path='/Contacts' element={<Contacts/>} exact />
            <Route path='/Dashboard' element={<Dashboard/>} exact /> 
          </Routes>
        </div>
        </main>
      </div>
    </Router>
  );
};

export default App;