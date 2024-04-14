import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:false,
    allTask:[],
}
const taskSlice=createSlice({
    name:"task",
    initialState,

    reducers:{
        setLoading(state,value){
            state.loading=value.payload
        },
        setAllTask(state,value){
            state.allTask = value.payload;
        },
        filterOutDeletedTask(state,value){
            return {
                ...state,
                allTask: state.allTask.filter(task => task._id !== value.payload)
              };
        },
        filterOutUpdatedTask(state, action) {
            const { id, title, description } = action.payload;
            state.allTask = state.allTask.map(task =>
              task._id === id ? { ...task, title, description } : task
            );
          },
    }
})

export const {setLoading,setAllTask,filterOutDeletedTask,filterOutUpdatedTask}=taskSlice.actions;
export default taskSlice.reducer