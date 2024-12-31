import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import OpenRoute from "./components/OpenRoute";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Posts = lazy(() => import("./pages/Posts"));
const AddPost = lazy(() => import("./pages/AddPost"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="text-center mt-5"><Loading/></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/allNotes"
            element={
              <OpenRoute>
                <Posts />
              </OpenRoute>
            }
          />
          <Route
            path="/addnotes"
            element={
              <OpenRoute>
                <AddPost />
              </OpenRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
