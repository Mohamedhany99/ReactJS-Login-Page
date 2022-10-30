import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "pass123"
  }
  const [user,setUser] = useState({name:"",email:""});
  const [error,setError] = useState("");
  const Login = details => {
    console.log(details);
    if (details.email==adminUser.email &&details.password==adminUser.password)
    {
      console.log("admin logged in");
      setUser({
        name:details.name,
        email:details.email
      });
    }
    else{
      console.log("details do not match");
      setError("details do not match");
    }
  }
  const Logout = () =>{
    console.log("logout");
    setUser({name:"",email:""});
  }
  return (
    <div className="App">
      {(user.email !=="")? (
        <div className='welcome'>
          <h2> welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
        // <Login/>
      ):(
        <LoginForm Login={Login} error={error}/> 
      )}
    </div>
  );
}

export default App;
