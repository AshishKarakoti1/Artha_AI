import { useEffect, useState } from "react";
import {
  getGoalPlansAPI,
  createGoalAPI,
  deleteGoalAPI,
} from "../api/goal.api";

const useGoals = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGoals = async () => {
    try {
      const { data } = await getGoalPlansAPI();
      setGoals(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addGoal = async (form) => {
    await createGoalAPI(form);
    fetchGoals();
  };

  const deleteGoal = async (id) => {
    await deleteGoalAPI(id);
    setGoals((prev) => prev.filter((g) => g._id !== id));
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return { goals, loading, addGoal, deleteGoal };
};

export default useGoals;