import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const LoginPage = () => {

  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);
    const glr = response as GoogleLoginResponse;
    if (glr) {
      localStorage.setItem("user", JSON.stringify(glr.profileObj));
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
      // uxMode="redirect"
      cookiePolicy={'single_host_origin'} /> ); }

export default LoginPage;