import Rol from '../Rol/Rol';
import LoginPage from '../LoginPage/Login';

function App() {

  return (<>
    {!localStorage.getItem("user") && <LoginPage /> }
    {localStorage.getItem("user") && <Rol />}</> ); }

export default App;