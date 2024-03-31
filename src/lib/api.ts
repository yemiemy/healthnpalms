import axios from "axios";

export const API_BASE_URL = "http://127.0.0.1:8000/api/v1";

export default axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
