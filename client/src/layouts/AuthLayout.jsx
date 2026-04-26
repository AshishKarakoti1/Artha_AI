const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 px-4">
      
      <div className="w-full max-w-md">

        {/* Logo / Branding */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-slate-800">
            Artha<span className="text-blue-600">AI</span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Smart financial planning made simple
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          {children}
        </div>

      </div>

    </div>
  );
};

export default AuthLayout;