import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";


const Home = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="max-w-md mx-auto p-4 text-center border mt-5 bg-slate-300 rounded-3xl">
      <h1 className="text-3xl font-bold mb-4">Welcome to YourNote!</h1>
      <p className="text-lg mb-4">YourNote is a simple and elegant note-taking app.</p>
      <p className="text-lg mb-4">Quickly jot down your thoughts, ideas, and reminders, and keep them organized.</p>
      <p className="text-lg mb-4">Features:</p>
      <ul className="text-left mb-4">
        <li className="list-disc ml-4">Easy note creation and editing</li>
        <li className="list-disc ml-4">Organize notes into categories or tags</li>
        <li className="list-disc ml-4">Search functionality to find notes quickly</li>
        <li className="list-disc ml-4">Responsive design - works on desktop, tablet, and mobile</li>
      </ul>
      <Link to={`${token?`/addnotes`:`/login`}`} className="block bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded">
        Get Started
      </Link>

      
    </div>
  );
};

export default Home;
