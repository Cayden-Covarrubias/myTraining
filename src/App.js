import './App.css';
import NavBar from './components/navbar/navbar'
import CreateAccount from './pages/createAccount/createAccount';
import Home from './pages/home/home'
import PostPage from './pages/postPage/postPage'

import WritePost from "./pages/writePost/writePost"
import Login from './pages/login/login'
import Settings from "./pages/settings/settings"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const currentUser = false;
  console.log(currentUser);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path ="/" element={<Home />}>
        </Route>
        <Route path ="/posts" element={<Home />}>
        </Route>
        <Route exact path ="/login" element={currentUser ? <Home /> : <Login />}>
        </Route>
        <Route exact path ="/post/:id" element={<PostPage />}>
        </Route>
        <Route exact path ="/write" element={currentUser ? <WritePost /> : <WritePost />}>
        </Route>
        <Route exact path ="/settings" element={currentUser ? <Settings /> : <Settings />}>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
