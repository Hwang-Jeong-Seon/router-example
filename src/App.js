import './App.css';
import {Link} from "react-router-dom";
import {useState} from 'react'
import UserPage from "./page/UserPage";
import {Navigate} from "react-router-dom";

function App() {
    const [authenticate, setAuthenticate] = useState(false)
    const PrivateRoute = () => {
        return !!authenticate ? <UserPage /> :  <Navigate to='/login' />
    }

  return (
    <div className="App">
     <h1> hi!!1 hi1!!!</h1>
        <Link to='/home'>go to home</Link>
        <br />
        <Link to='/about'>go to about</Link>
    </div>
  );
}

export default App;
