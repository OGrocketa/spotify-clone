import axios from "axios";
import { create } from "zustand";
const BASE_URL = 'http://127.0.0.1:8000/'

export const axiosPrivate = axios.create({
    baseURL:BASE_URL,
    withCredentials:true,
    headers: {"Content-Type":"application/json"}
})