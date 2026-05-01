import axios from "./axios";

export const getExpensesAPI = (params) =>
  axios.get("/expenses", { params });

export const createExpenseAPI = (data) =>
  axios.post("/expenses", data);

export const deleteExpenseAPI = (id) =>
  axios.delete(`/expenses/${id}`);