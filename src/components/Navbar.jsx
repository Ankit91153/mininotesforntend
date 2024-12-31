import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../services/operations/auth";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";



const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);
  const { signupData } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.auth);

  const [humburgerShow,setHumburgerShow]=useState(true);

 
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  

  return (
    <div className="relative w-full bg-slate-500 text-white py-4">
      <div className="w-11/12 mx-auto flex flex-row justify-between items-center">
        <NavLink to="/">
          <span className="font-bold text-3xl">MiniNote</span>
        </NavLink>
        <div className="md:block hidden">
          <ul className="flex flex-row justify-between gap-4">
            {token ? (
              <>
                <NavLink
                  to="/allNotes"
                  style={({ isActive }) => {
                    return isActive ? { color: "rgb(3 7 18)" } : {};
                  }}
                  className="font-bold text-lg hover:text-slate-900 transition duration-100 ease-in-out "
                >
                  AllNotes
                </NavLink>
                <NavLink
                  to="/addnotes"
                  style={({ isActive }) => {
                    return isActive ? { color: "rgb(3 7 18)" } : {};
                  }}
                  className="font-bold text-lg hover:text-slate-900 transition duration-100 ease-in-out "
                >
                  AddNote
                </NavLink>
                <div className="font-bold text-lg ">{signupData.name}</div>
                <button onClick={handleLogout} className="font-bold text-lg hover:text-slate-900 transition duration-100 ease-in-out ">Logout</button>{" "}
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  style={({ isActive }) => {
                    return isActive ? { color: "rgb(3 7 18)" } : {};
                  }}
                  className="font-bold text-lg hover:text-slate-900 transition duration-100 ease-in-out "
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  style={({ isActive }) => {
                    return isActive ? { color: "rgb(3 7 18)" } : {};
                  }}
                  className="font-bold text-lg hover:text-slate-900 transition duration-100 ease-in-out "
                >
                  Signup
                </NavLink>
              </>
            )}
          </ul>
        </div>
        <div className="md:hidden block ">
          {
            humburgerShow?<span className="cursor-pointer 1" onClick={(prev)=>setHumburgerShow(false)}><GiHamburgerMenu /></span>:<span className="cursor-pointer 2" onClick={(prev)=>setHumburgerShow(true)}><RxCross1 />
            </span>
          }
          

        </div>
      </div>

      {
        !humburgerShow && (<>
        <div className="absolute top-[68px] w-full bg-slate-500  z-50 block md:hidden">
          <ul className="flex flex-col gap-4 text-center z-40">
            {token ? (
              <>
                <NavLink
                  to="/allNotes"
                  style={({ isActive }) => {
                    return isActive ? { color: "rgb(3 7 18)" } : {};
                  }}
                  className="font-bold text-lg hover:text-slate-900 transition duration-100 ease-in-out "
                  onClick={() => setHumburgerShow(true)}
                >
                  AllNotes
                </NavLink>
                <NavLink
                  to="/addnotes"
                  style={({ isActive }) => {
                    return isActive ? { color: "rgb(3 7 18)" } : {};
                  }}
                  className="font-bold text-lg hover:text-slate-900 transition duration-100 ease-in-out "
                  onClick={() => setHumburgerShow(true)}

                  
                >
                  AddNote
                </NavLink>
                <div className="font-bold text-lg ">{signupData.name}</div>
                <button onClick={handleLogout} className="font-bold text-lg hover:text-slate-900 transition duration-100 ease-in-out ">Logout</button>{" "}
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  style={({ isActive }) => {
                    return isActive ? { color: "rgb(3 7 18)" } : {};
                  }}
                  className="font-bold text-lg hover:text-slate-900 transition duration-100 ease-in-out "
                  onClick={() => setHumburgerShow(true)}

                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  style={({ isActive }) => {
                    return isActive ? { color: "rgb(3 7 18)" } : {};
                  }}
                  className="font-bold text-lg hover:text-slate-900 transition duration-100 ease-in-out "
                  onClick={() => setHumburgerShow(true)}

                >
                  Signup
                </NavLink>
              </>
            )}
          </ul>
        </div>
        </>)
      }
    </div>
  );
};

export default Navbar;
