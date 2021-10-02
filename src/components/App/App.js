import Rol from '../Rol/Rol';
import LoginPage from '../LoginPage/LoginPage';

function App() {

  return (<>
    <div style={{
      position: "absolute",
      fontSize: "12px",
      backgroundColor: "black",
      color: "white",
      left: "100px"
    }}>v1</div>
    {!localStorage.getItem("user") && <LoginPage /> }
    {localStorage.getItem("user") && <Rol />}</> ); }

export default App;