import GoogleLogin from 'react-google-login';

const LoginPage = () => {

  const responseGoogle = (response) => {
    console.log(response.profileObj);
    if (response.profileObj) {
      localStorage.setItem("user", JSON.stringify(response.profileObj));
      window.location.reload(); }
    else window.alert("OH NO. SOMETHING IS WRONG."); }

  return (
    <GoogleLogin
      // buttonText="Login"
      // render={renderProps => (
      //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
      // )}
      // clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      clientId="557149397568-tid2cbi3kdaln9egknki6s64501h44en.apps.googleusercontent.com"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'} /> ); }

export default LoginPage;