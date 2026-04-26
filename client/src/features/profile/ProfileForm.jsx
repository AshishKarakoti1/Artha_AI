import { useState, useEffect } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const ProfileForm = ({ data, onUpdate }) => {
  const [form, setForm] = useState({
    name: "",
    monthlyIncome: "",
    employmentType: "student",
    riskProfile: "low",
  });

  useEffect(() => {
    if (data) {
      setForm({
        name: data.name || "",
        monthlyIncome: data.monthlyIncome || "",
        employmentType: data.employmentType || "student",
        riskProfile: data.riskProfile || "low",
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdate({
      ...form,
      monthlyIncome: Number(form.monthlyIncome),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid md:grid-cols-2 gap-4"
    >
      {/* Name */}
      <Input
        label="Full Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      {/* Income */}
      <Input
        label="Monthly Income"
        name="monthlyIncome"
        type="number"
        placeholder="₹50000"
        value={form.monthlyIncome}
        onChange={handleChange}
      />

      {/* Employment */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-slate-600 font-medium">
          Employment Type
        </label>
        <select
          name="employmentType"
          value={form.employmentType}
          onChange={handleChange}
          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="student">Student</option>
          <option value="salaried">Salaried</option>
          <option value="self-employed">Self Employed</option>
        </select>
      </div>

      {/* Risk Profile */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-slate-600 font-medium">
          Risk Profile
        </label>
        <select
          name="riskProfile"
          value={form.riskProfile}
          onChange={handleChange}
          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      {/* Button */}
      <div className="md:col-span-2">
        <Button className="w-full">Update Profile</Button>
      </div>
    </form>
  );
};

export default ProfileForm;