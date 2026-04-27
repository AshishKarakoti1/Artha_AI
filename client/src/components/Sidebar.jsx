import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Wallet,
  Target,
  User,
  Lightbulb,
  LogOut,
} from "lucide-react";
import { useAuth } from "../store/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Expenses", path: "/expenses", icon: Wallet },
    { name: "Goals", path: "/goals", icon: Target },
    { name: "Recommendations", path: "/recommendations", icon: Lightbulb },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <div className="sticky left-0 top-0 w-64 bg-white border-r border-slate-200 h-screen p-5 flex flex-col">

      {/* Logo */}
      <h1 className="text-xl font-semibold text-slate-800 mb-8">
        Artha<span className="text-blue-600">AI</span>
      </h1>

      {/* Nav */}
      <div className="flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.path;

          return (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-all duration-200
                ${active
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                }`}
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          );
        })}
      </div>

      {/* Bottom Upgrade Card (optional but premium feel) */}
      {/* <div className="mt-auto bg-blue-50 rounded-xl p-4 text-sm text-slate-700">
        <p className="font-medium mb-1">Upgrade to Pro</p>
        <p className="text-xs text-slate-500 mb-3">
          Unlock advanced insights & analytics
        </p>
        <button className="w-full bg-blue-600 text-white rounded-lg py-2 text-sm hover:bg-blue-700 transition">
          Upgrade
        </button>
      </div> */}
      <div
        onClick={() => {
          if (confirm("Logout?")) logout();
        }}
        className={`mt-auto flex items-center gap-3 px-3 py-2 bg-red-50 text-red-600 rounded-xl cursor-pointer transition-all duration-200`}>
        <LogOut size={18} />
        <span className="text-sm font-medium">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;