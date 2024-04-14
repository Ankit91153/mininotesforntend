const BASE_URL = import.meta.env.VITE_BASE_URL;

console.log(BASE_URL);

// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
}
// NOTE ENDPOINTS
export const notespoints = {
  CREATE_NOTE_API: BASE_URL + "/post/createPost",
  FETCH_ALL_NOTE_API: BASE_URL + "/post/showPost",
  DELETE_NOTE_API: BASE_URL + "/post/deletePost",
  UPDATE_NOTE_API: BASE_URL + "/post/editPost",
  SHOW_NOTE_API: BASE_URL + "/post/showSinglePost",
}