import axios from "axios";
import { server } from "../fetch";

export const axiosInstance = axios.create({
    baseURL: `${server}`,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
})