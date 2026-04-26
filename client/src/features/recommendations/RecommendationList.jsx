import RecommendationCard from "./RecommendationCard";

const RecommendationList = ({ data }) => {
  if (!data.length) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <p className="text-sm text-slate-600 font-medium">
          You're doing great 🎯
        </p>
        <p className="text-xs text-slate-400 mt-1">
          No recommendations at the moment
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">

      {/* Optional section label */}
      <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">
        Insights for you
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {data.map((rec, i) => (
          <RecommendationCard key={i} rec={rec} />
        ))}
      </div>

    </div>
  );
};

export default RecommendationList;