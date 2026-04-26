import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./store/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="bg-slate-100 min-h-screen text-slate-900">
          <AppRoutes />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;