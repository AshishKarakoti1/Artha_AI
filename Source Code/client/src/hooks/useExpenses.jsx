import { useEffect, useState } from "react";
import {
  getExpensesAPI,
  createExpenseAPI,
  deleteExpenseAPI,
} from "../api/expense.api";

const useExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchExpenses = async () => {
    try {
      const { data } = await getExpensesAPI();
      setExpenses(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addExpense = async (form) => {
    await createExpenseAPI(form);
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await deleteExpenseAPI(id);
    setExpenses((prev) => prev.filter((e) => e._id !== id));
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return { expenses, loading, addExpense, deleteExpense };
};

export default useExpenses;