import axios from "axios";

export const API_BASE_URL = "https://e2c16c652bb7.ngrok-free.app/api/v1";

export default axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
