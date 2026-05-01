import useProfile from "../hooks/useProfile";
import ProfileForm from "../features/profile/ProfileForm";
import { motion } from "framer-motion";

const Profile = () => {
  const { profile, loading, updateProfile } = useProfile();

  return (
    <div className="p-6 bg-slate-100 min-h-screen space-y-6">

      {/* 🔹 HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Profile
        </h1>
        <p className="text-sm text-slate-500">
          Manage your personal and financial settings
        </p>
      </div>

      {/* 🔹 PROFILE SUMMARY CARD */}
      {!loading && profile && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-center gap-4">
            
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-semibold">
              {profile.name?.[0]}
            </div>

            <div>
              <h2 className="text-slate-800 font-semibold">
                {profile.name}
              </h2>
              <p className="text-sm text-slate-500">
                {profile.employmentType}
              </p>
            </div>

          </div>
        </motion.div>
      )}

      {/* 🔹 FORM CARD */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">

          <h3 className="text-sm font-medium text-slate-700 mb-4">
            Update Profile
          </h3>

          {loading ? (
            <div className="space-y-3">
              <div className="h-10 bg-slate-200 rounded animate-pulse"></div>
              <div className="h-10 bg-slate-200 rounded animate-pulse"></div>
            </div>
          ) : (
            <ProfileForm data={profile} onUpdate={updateProfile} />
          )}

        </div>
      </motion.div>

    </div>
  );
};

export default Profile;