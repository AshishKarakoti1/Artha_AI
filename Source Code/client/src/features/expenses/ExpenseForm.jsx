import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

const ExpenseForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    amount: "",
    category: "food",
    note: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.amount) return;

    onAdd({ ...form, amount: Number(form.amount) });

    setForm({ amount: "", category: "food", note: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid md:grid-cols-4 gap-4 items-end"
    >
      {/* Amount */}
      <Input
        label="Amount"
        name="amount"
        type="number"
        placeholder="₹0"
        value={form.amount}
        onChange={handleChange}
      />

      {/* Category */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-slate-600 font-medium">
          Category
        </label>

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="food">Food</option>
          <option value="rent">Rent</option>
          <option value="travel">Travel</option>
          <option value="shopping">Shopping</option>
          <option value="utilities">Utilities</option>
        </select>
      </div>

      {/* Note */}
      <Input
        label="Note"
        name="note"
        placeholder="Optional note"
        value={form.note}
        onChange={handleChange}
      />

      {/* Button */}
      <div>
        <Button className="w-full">Add Expense</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;