import axios from "axios";

export const requests = axios.create({
  baseURL: "https://api.github.com/",
});
