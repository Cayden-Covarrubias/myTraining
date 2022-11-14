import './App.css';
import NavBar from './components/navbar/navbar'
import CreateAccount from './pages/createAccount/createAccount';
import Home from './pages/home/home'
import PostPage from './pages/postPage/postPage'
import Login from './pages/login/login'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Login/>
    </div>
  );
}

export default App;
