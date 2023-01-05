import React, { Component }  from 'react';
import './App.css';
import NavBar from './components/navbar/navbar'
import CreateAccount from './pages/createAccount/createAccount';
import WritePost from "./pages/writePost/writePost"
import Home from './pages/home/home'
import PostPage from './pages/postPage/postPage'
import Login from './pages/login/login'
import Settings from "./pages/settings/settings"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const currentUser = false;
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/posts" element={<Home />}>
        </Route>
        <Route exact path="/createAccount" element={currentUser ? <Home /> : <CreateAccount />}>
        </Route>
        <Route exact path="/login" element={currentUser ? <Home /> : <login />}>
        </Route>
        <Route exact path="/post/:id" element={<PostPage />}>
        </Route>
        <Route exact path="/" element={currentUser ? <WritePost /> : <WritePost />}>
        </Route>
        <Route exact path="/" element={currentUser ? <Settings /> : <Settings />}>
        </Route>
        
                     
        
      </Routes>
      <Home/>
    </div>
    </Router>
  );
}

export default App;