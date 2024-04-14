import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allNote,deleteTask, showTask } from "../services/operations/auth";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import {Link} from "react-router-dom";
import EditModal from "./EditModal";
import Loading from "../components/Loading";

const Posts = () => {
  const dispatch = useDispatch();
  const { allTask } = useSelector((state) => state.task);
  const { loading } = useSelector((state) => state.auth);
  const [tasks, setTasks] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false); 

  const [updateData,setUpdateData]=useState({
    title:"",
    description:""
  })

  useEffect(() => {
    const id = "6614ee8787726c54f7e6627b";
    dispatch(allNote(id));
  }, [dispatch]);

  useEffect(() => {
    // Update tasks when allTask changes
    setTasks(allTask);
  }, [allTask]);


  const deleteTaskHandler=(id)=>{
    dispatch(deleteTask(id));
  }

  const updateTaskHandler = (id) => {
    setSelectedTaskId(id);
    dispatch(showTask(id,setUpdateData))
    setShowEditModal(true);

  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setSelectedTaskId(null);
  };



  return (
    <div className="w-[80%] mx-auto mt-4">
      {loading ? ( // If loading, display a loading message or spinner
      <div className="w-[100%] h-[100vh] flex justify-center">
        <Loading/>
      </div>
      ) : (
        <>
          {allTask && allTask.length > 0 ? (
            <div className="w-full flex flex-wrap gap-4">
              {allTask.map((task) => (
                <div
                  className="w-[100%] lg:w-[32%] md:w-[49%] md:max-w-md-[49%] border rounded-md bg-slate-500 text-white p-4"
                  key={task._id}
                >
                  <h4 className="font-bold">{task.title}</h4>
                  <p>{task.description}</p>
                  <div className="flex justify-end gap-3">
                    <span className="border border-red-500 rounded-full p-2 bg-red-500 text-white cursor-pointer hover:scale-105 transition duration-300 ease-in-out" onClick={() => deleteTaskHandler(task._id)}>
                      <MdDelete size={24} />
                    </span>
                    <span className="border border-blue-500 rounded-full p-2 bg-blue-500 text-white cursor-pointer hover:scale-105 transition duration-300 ease-in-out" onClick={() => updateTaskHandler(task._id)}>
                      <FaRegEdit size={24} />
                    </span>
                  </div>
                </div>
              ))}
              {showEditModal && <EditModal taskId={selectedTaskId} onClose={closeEditModal} updateData={updateData} />}
            </div>
          ) : (
            <div className="w-[500px] mx-auto bg-slate-300 py-5">
              <div className="flex flex-col items-center gap-4">
                <h1 className="font-bold text-3xl text-slate-900">Add Task</h1>
                <Link to="/addnotes">
                  <div className="w-[100px] px-2 py-4 bg-black text-white text-center rounded-lg">Add Task</div>
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};




export default Posts;
