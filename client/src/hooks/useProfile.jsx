import { useEffect, useState } from "react";
import { getProfileAPI, updateProfileAPI } from "../api/profile.api";

const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const { data } = await getProfileAPI();
      setProfile(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (form) => {
    const { data } = await updateProfileAPI(form);
    setProfile(data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return { profile, loading, updateProfile };
};

export default useProfile;