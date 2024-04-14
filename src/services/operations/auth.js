import { endpoints,notespoints } from "../api";
import Cookies from 'js-cookie';
import { setLoading, setToken, setSignupData } from "../../slices/authSlice";
import { apiConnector } from "../apiConnector";
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios';
import { setAllTask,filterOutDeletedTask, filterOutUpdatedTask } from "../../slices/taskSlice";
// import { navigate } from "react-router-dom"; // Import navigate from react-router-dom

const { SIGNUP_API, LOGIN_API } = endpoints;
const { CREATE_NOTE_API ,FETCH_ALL_NOTE_API,DELETE_NOTE_API,UPDATE_NOTE_API,SHOW_NOTE_API} = notespoints;
export function signUp({ name, email, password }, navigate) {
  return async (dispatch) => {
    // const navigate = useNavigate();
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        name,
        email,
        password,
      });

      console.log("SIGNUP API RESPONSE............", response);

      if (!response.data.success) {
        toast.error(response.data.message);
        throw new Error(response.data.message);
      } else {
        toast.success("Sign up Successfully");
      }
      navigate("/login");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      navigate("/signup");
    }
    dispatch(setLoading(false));
  };
}

export function login({ email, password }, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });
      console.log("LOGIN API RESPONSE............", response);
      if (!response.data.success) {
        toast.error(response.data.message);
        throw new Error(response.data.message);
      } else {
        dispatch(setToken(response.data.token));
        dispatch(setSignupData(response.data.emailPresent));
        localStorage.setItem("token", JSON.stringify(response.data.token));
        Cookies.set('token', response.data.token, { expires: 7 }); // Expires in 7 days

        localStorage.setItem(
          "user",
          JSON.stringify(response.data.emailPresent)
        );
        toast.success("Sign In Successfully");
      }
      navigate("/");
    } catch (err) {
      console.log("LOGIN API ERROR............", err);
      navigate("/login");
    }

    dispatch(setLoading(false));
  };
}

export function logout() {
  return async (dispatch) => {
    // Remove token and user data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(setToken(null));
    dispatch(setSignupData(null));

    dispatch({ type: "LOGOUT_SUCCESS" });
  };
}

export function addNote({title,description,userId},navigate){
    return async(dispatch)=>{
        dispatch(setLoading(true));
        try {
            console.log("Hello");
            console.log(title,description,userId);
            console.log(CREATE_NOTE_API);
            const token = Cookies.get('token');
            console.log(token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const headers = {
              'Authorization': `Bearer ${token}`,
              'Custom-Header': 'Custom-Value'
          };

          console.log("header",headers);
          
            const response = await apiConnector("POST", CREATE_NOTE_API, {
                title,description,userId
            },headers);
            console.log("CREATE POST API RESPONSE............", response);
            if (!response.data.success) {
              toast.error(response.data.message);
              throw new Error(response.data.message);
            } else {
              
              toast.success("Create Post Successfully");
            }
            navigate("/addnotes");
          } catch (err) {
            console.log("CREATE POST API ERROR............", err);
            navigate("/addnotes");
          }
        dispatch(setLoading(false));
    }
}


export function allNote({id}){
  return async(dispatch)=>{
    dispatch(setLoading(true));
    try {
        
        const token = Cookies.get('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Custom-Header': 'Custom-Value'
      };

      
        const response = await apiConnector("POST", FETCH_ALL_NOTE_API, {
            id
        },headers);
        console.log("FETCH TASK API RESPONSE............", response);
        if (!response.data.success) {
          toast.error(response.data.message);
          throw new Error(response.data.message);
        } else {

          // dispatch(setAllTask([]))
          dispatch(setAllTask(response.data.data))
        }
      } catch (err) {
        console.log("FETCH ALL TASK API ERROR............", err);
      }
    dispatch(setLoading(false));
  }
}

export function deleteTask(id){
  return async(dispatch)=>{
    dispatch(setLoading(true));
    try {
        const token = Cookies.get('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Custom-Header': 'Custom-Value'
      };

      
        const response = await apiConnector("POST", DELETE_NOTE_API, {
            id
        },headers);
        console.log("DELETE TASK API RESPONSE............", response);
        if (!response.data.success) {
          toast.error(response.data.message);
          throw new Error(response.data.message);
        } else {

          dispatch(filterOutDeletedTask(id));
          toast.success("Delete successfully");
          // setTasks()
        }
      } catch (err) {
        console.log("DELETE TASK API ERROR............", err);
      }
    dispatch(setLoading(false));
  }
}
export function showTask(id,setUpdateData){
  return async(dispatch)=>{
    dispatch(setLoading(true));
    try {
        const token = Cookies.get('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Custom-Header': 'Custom-Value'
      };

      
        const response = await apiConnector("POST", SHOW_NOTE_API, {
            id
        },headers);
        console.log("DELETE TASK API RESPONSE............", response);
        if (!response.data.success) {
          toast.error(response.data.message);
          throw new Error(response.data.message);
        } else {
          setUpdateData(response.data.data)
          // setTasks()
        }
      } catch (err) {
        console.log("DELETE TASK API ERROR............", err);
      }
    dispatch(setLoading(false));
  }
}
export function udpateTask(id,title,description){
  return async(dispatch)=>{
    dispatch(setLoading(true));
    try {
        const token = Cookies.get('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Custom-Header': 'Custom-Value'
      };

      
        const response = await apiConnector("POST", UPDATE_NOTE_API, {
            id,title,description
        },headers);
        console.log("UPDATE TASK API RESPONSE............", response);
        if (!response.data.success) {
          toast.error(response.data.message);
          throw new Error(response.data.message);
        } else {
          dispatch(filterOutUpdatedTask({id,title,description}));
          toast.success("Update successfully");

          // setTasks()
        }
      } catch (err) {
        console.log("UPDATE TASK API ERROR............", err);
      }
    dispatch(setLoading(false));
  }
}