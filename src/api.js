import axios from "axios";

export const api = axios.create({
  baseURL: "https://pitagoras-backend.herokuapp.com/",
});
