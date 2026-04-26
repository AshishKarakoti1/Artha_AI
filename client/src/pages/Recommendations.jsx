import { useEffect, useState } from "react";
import { getRecommendationsAPI } from "../api/recommendation.api";
import RecommendationList from "../features/recommendations/RecommendationList";
import { motion } from "motion/react";

const Recommendations = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await getRecommendationsAPI();
      setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-slate-100 min-h-screen space-y-6">

      {/* 🔹 HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Recommendations
        </h1>
        <p className="text-sm text-slate-500">
          Personalized insights to improve your financial health
        </p>
      </div>

      {/* 🔹 INSIGHTS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">

          <h3 className="text-sm font-medium text-slate-700 mb-4">
            Smart Insights
          </h3>

          {loading ? (
            <div className="space-y-3">
              <div className="h-12 bg-slate-200 rounded animate-pulse"></div>
              <div className="h-12 bg-slate-200 rounded animate-pulse"></div>
            </div>
          ) : data.length === 0 ? (
            <p className="text-sm text-slate-500">
              You're doing great 🎯 No recommendations for now.
            </p>
          ) : (
            <RecommendationList data={data} />
          )}

        </div>
      </motion.div>

    </div>
  );
};

export default Recommendations;