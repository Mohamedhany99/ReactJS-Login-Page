import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Login from './components/Login';
function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "pass123"
  }
  const [user,setUser] = useState({name:"",email:""});
  const [error,setError] = useState("");
  const login = details => {
    console.log(details);
  }
  const logout = () =>{
    console.log("logout");
  }
  return (
    <div className="App">
      {(user.email !="")? (
        <div className='welcome'>
          <h2> welcome, <span>{user.name}</span></h2>
          <button>Logout</button>
        </div>
        // <Login/>
      ):(
        <Login/>
      )}
    </div>
  );
}

export default App;
