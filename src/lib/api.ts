import axios from "axios";

export const API_BASE_URL = "https://9d8d805bbe15.ngrok-free.app/api/v1";

export default axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
