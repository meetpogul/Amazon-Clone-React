import axios from "axios";

const instance = axios.create({
  baseURL: "Fire Base API Link",
  // "http://localhost:5001/clone-80380/us-central1/api", // The API (Cloud function)
});

export default instance;
