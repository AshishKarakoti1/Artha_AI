import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50">

            {/* 🔹 NAVBAR */}
            <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
                <h1 className="text-lg font-semibold text-slate-800">
                    Artha<span className="text-blue-600">AI</span>
                </h1>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate("/login")}
                        className="text-sm text-slate-600 hover:text-black transition"
                    >
                        Login
                    </button>

                    <button
                        onClick={() => navigate("/register")}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                    >
                        Register
                    </button>
                </div>
            </nav>

            {/* 🔹 HERO */}
            <section className="text-center px-6 pt-16 pb-24">

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-semibold text-slate-800 leading-tight max-w-4xl mx-auto">
                    Manage your finances smarter <br />
                    and stay in control with{" "}
                    <span className="text-blue-600">ArthaAI</span>
                </h1>

                {/* Subtext */}
                <p className="mt-6 text-slate-500 max-w-xl mx-auto text-base">
                    Understand your spending, plan your goals, and make better
                    financial decisions — all from one intelligent dashboard.
                </p>

                {/* CTA */}
                <div className="mt-8 flex justify-center gap-4">
                    <button
                        onClick={() => navigate("/login")}
                        className="px-5 py-2.5 rounded-lg bg-slate-200 text-slate-700 text-sm hover:bg-slate-300 transition"
                    >
                        Learn more
                    </button>

                    <button
                        onClick={() => navigate("/register")}
                        className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
                    >
                        Get started
                    </button>
                </div>

                {/* 🔹 DASHBOARD PREVIEW */}
                <div className="mt-16 flex justify-center">
                    <div className="w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-md p-6">

                        {/* Top */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-sm font-medium text-slate-700">
                                Dashboard
                            </h2>
                            <div className="w-40 h-8 bg-slate-100 rounded-lg"></div>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {["Income", "Expenses", "Savings"].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-slate-50 p-4 rounded-xl border border-slate-200"
                                >
                                    <p className="text-xs text-slate-500">{item}</p>
                                    <h3 className="text-lg font-semibold text-slate-800">
                                        ₹{(i + 1) * 2000}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        {/* Chart */}
                        <div className="h-24 bg-linear-to-r from-blue-200 to-blue-400 rounded-xl mb-6"></div>

                        {/* Transactions */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-slate-600">
                                <span>Netflix</span>
                                <span className="text-red-500">-₹500</span>
                            </div>
                            <div className="flex justify-between text-sm text-slate-600">
                                <span>Salary</span>
                                <span className="text-green-500">+₹20000</span>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
};

export default Landing;