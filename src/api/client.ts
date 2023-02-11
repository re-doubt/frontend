import axios from "axios";
import { API_ROOT } from "src/constants/api";

export const apiClient = axios.create({
  baseURL: API_ROOT,
  headers: {
    "Content-type": "application/json",
  },
});
