

import axios from "axios";

export const api = axios.create({
    baseURL: "https://backend-batch-6.vercel.app/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    withCredentials: true
})