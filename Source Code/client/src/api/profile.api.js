import axios from "./axios";

export const getProfileAPI = () => axios.get("/auth/profile");
export const updateProfileAPI = (data) =>
  axios.put("/auth/profile", data);