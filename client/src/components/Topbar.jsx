import { Bell, Search } from "lucide-react";
import { useAuth } from "../store/AuthContext";

const Topbar = () => {
  const { user, logout } = useAuth();
  return (
    <div className="sticky top-0 flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
      
      {/* Search */}
      <div className="flex items-center bg-slate-100 px-3 py-2 rounded-xl w-80">
        <Search size={16} className="text-slate-400 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        
        <Bell className="text-slate-500 cursor-pointer" />

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">
            {user?.name?.[0]}
          </div>
          <span className="text-sm text-slate-700 font-medium">
            {user?.name}
          </span>
        </div>

      </div>
    </div>
  );
};

export default Topbar;