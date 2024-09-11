import axios from "axios";

export const createRequest = () => axios.create({ baseURL: "http://localhost:3001/" });
