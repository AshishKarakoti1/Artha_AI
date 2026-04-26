import axios from "./axios";

export const getRecommendationsAPI = () =>
  axios.get("/recommendations");