import Navbar from "./components/Navbar"

import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Posts from "./pages/Posts";
import AddPost from "./pages/AddPost";
import Logout from "./pages/Logout";
import OpenRoute from "./components/OpenRoute";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/allNotes" element={<OpenRoute><Posts/></OpenRoute>}/>
        <Route path="/addnotes" element={<OpenRoute><AddPost/></OpenRoute>}/>
        {/* <Route path="/logout" element={<OpenRoute><Logout/></OpenRoute>}/> */}
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
