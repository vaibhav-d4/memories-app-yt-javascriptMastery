import axios from "axios";

const DEV_URL = process.env.REACT_APP_DEV_URL;
const PROD_URL = process.env.REACT_APP_PROD_URL;

const API = axios.create({
  baseURL: PROD_URL, // TO CHANGE FOR DEV OR PROD
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
