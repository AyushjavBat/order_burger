import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-a1f10-default-rtdb.firebaseio.com/",
});

export default instance;
