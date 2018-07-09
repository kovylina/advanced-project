import axios from "axios";

axios.defaults.baseURL = "http://webdev-api.loftschool.com";
axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

export default axios;
