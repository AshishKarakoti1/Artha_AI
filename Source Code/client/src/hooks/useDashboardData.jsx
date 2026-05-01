import { useEffect, useState } from "react";
import { getSummaryAPI, getCategoryAPI, getTrendAPI } from "../api/analytics.api";
import { getRecommendationsAPI } from "../api/recommendation.api";
import { getGoalPlansAPI } from "../api/goal.api";

const useDashboardData = () => {
  const [data, setData] = useState({
    summary: null,
    categories: [],
    trend: [],
    recommendations: [],
    goals: [],
  });

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [summary, categories, trend, recs, goals] = await Promise.all([
        getSummaryAPI(),
        getCategoryAPI(),
        getTrendAPI(),
        getRecommendationsAPI(),
        getGoalPlansAPI(),
      ]);

      setData({
        summary: summary.data,
        categories: categories.data,
        trend: trend.data,
        recommendations: recs.data,
        goals: goals.data,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { ...data, loading };
};

export default useDashboardData;