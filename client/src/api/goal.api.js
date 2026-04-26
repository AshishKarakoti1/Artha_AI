import axios from "./axios";

export const getGoalPlansAPI = () => axios.get("/goals/plans");
export const createGoalAPI = (data) => axios.post("/goals", data);
export const deleteGoalAPI = (id) => axios.delete(`/goals/${id}`);