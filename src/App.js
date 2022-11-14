import './App.css';
import NavBar from './components/navbar/navbar'
import CreateAccount from './pages/createAccount/createAccount';
import Home from './pages/home/home'
import PostPage from './pages/postPage/postPage'

import WritePost from "./pages/writePost/writePost"
import Login from './pages/login/login'
import Settings from "./pages/settings/settings"
function App() {
  return (
    <div className="App">
      <NavBar/>
      <WritePost/>
    </div>
  );
}

export default App;
