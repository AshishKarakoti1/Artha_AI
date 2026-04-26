import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const GoalForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: "",
    targetAmount: "",
    currentAmount: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.targetAmount) return;

    onAdd({
      ...form,
      targetAmount: Number(form.targetAmount),
      currentAmount: Number(form.currentAmount || 0),
    });

    setForm({
      title: "",
      targetAmount: "",
      currentAmount: "",
      deadline: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid md:grid-cols-5 gap-4 items-end"
    >
      {/* Title */}
      <Input
        label="Goal Title"
        name="title"
        placeholder="e.g. Buy Laptop"
        value={form.title}
        onChange={handleChange}
      />

      {/* Target */}
      <Input
        label="Target Amount"
        name="targetAmount"
        type="number"
        placeholder="₹100000"
        value={form.targetAmount}
        onChange={handleChange}
      />

      {/* Current */}
      <Input
        label="Current Amount"
        name="currentAmount"
        type="number"
        placeholder="₹20000"
        value={form.currentAmount}
        onChange={handleChange}
      />

      {/* Deadline */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-slate-600 font-medium">
          Deadline
        </label>
        <input
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Button */}
      <div>
        <Button className="w-full">Add Goal</Button>
      </div>
    </form>
  );
};

export default GoalForm;