import { AlertTriangle, Info, TrendingUp, Lightbulb } from "lucide-react";

const typeConfig = {
  alert: {
    style: "bg-red-50 text-red-700 border-red-100",
    icon: AlertTriangle,
  },
  warning: {
    style: "bg-yellow-50 text-yellow-700 border-yellow-100",
    icon: AlertTriangle,
  },
  advice: {
    style: "bg-blue-50 text-blue-700 border-blue-100",
    icon: Info,
  },
  investment: {
    style: "bg-green-50 text-green-700 border-green-100",
    icon: TrendingUp,
  },
  "goal-risk": {
    style: "bg-red-50 text-red-700 border-red-100",
    icon: AlertTriangle,
  },
  "goal-warning": {
    style: "bg-yellow-50 text-yellow-700 border-yellow-100",
    icon: AlertTriangle,
  },
  insight: {
    style: "bg-purple-50 text-purple-700 border-purple-100",
    icon: Lightbulb,
  },
};

const RecommendationCard = ({ rec }) => {
  const config = typeConfig[rec.type] || typeConfig.advice;
  const Icon = config.icon;

  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-2xl border ${config.style} transition hover:shadow-sm`}
    >
      {/* Icon */}
      <div className="mt-0.5">
        <Icon size={18} />
      </div>

      {/* Content */}
      <div>
        <p className="text-sm font-medium leading-relaxed">
          {rec.message}
        </p>
      </div>
    </div>
  );
};

export default RecommendationCard;