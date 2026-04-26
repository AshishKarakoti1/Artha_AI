import axios from "./axios";

export const getSummaryAPI = () => axios.get("/analytics/summary");
export const getCategoryAPI = () => axios.get("/analytics/categories");
export const getTrendAPI = () => axios.get("/analytics/trend");