import axios from "axios";

const url = "https://memories-app-yt-jsmastery.herokuapp.com";
// const url = "http://localhost:5000";

const API = axios.create({
  baseURL: url,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchPosts = () => API.get("/posts");
export const createPosts = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signin = (formData) => API.post("user/signin", formData);
export const signup = (formData) => API.post("user/signup", formData);
