import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from '../src/views/landing/Landing';
import Home from '../src/views/home/Home';
import Detail from '../src/views/detail/Detail';
import Form from '../src/views/form/Form';
import Error from '../src/views/error/Error';
import NavBar from '../src/components/navBar/NavBar';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as actions from './redux/actions';



function App() {

  const location = useLocation();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(actions.setAllCountries());
  //   dispatch(actions.setAllActivities());
  // }, []);

  return (
    <div className="App">
         {location.pathname !== '/' && (<NavBar />)}
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/detail/:idPais" element={<Detail/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </div>
  );
};

export default App;
