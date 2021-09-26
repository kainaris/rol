import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import Rol from '../Rol/Rol';

function App() {

  const responseGoogle = (response) => {
    console.log(response.profileObj);
    if (response.profileObj){
      localStorage.setItem("user", JSON.stringify(response.profileObj));
      window.location.reload();
    }
    else window.alert("OH NO. SOMETHING IS WRONG.");
  }

  return (
    <div className="App">
      {!localStorage.getItem("user") && < GoogleLogin
        // clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com" buttonText="Login"
        clientId="557149397568-tid2cbi3kdaln9egknki6s64501h44en.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        // render={renderProps => (
        //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
        // )}
        />}
      {localStorage.getItem("user") && <Rol />}
    </div>
  );
}

export default App;
