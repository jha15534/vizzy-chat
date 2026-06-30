import { useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function UserMenu() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="border-t border-white/10 p-5">

      <div className="flex items-center gap-3 mb-4">

        <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center">
          <User size={22} />
        </div>

        <div>

          <h3 className="font-semibold">
            {user.name}
          </h3>

          <p className="text-gray-400 text-sm">
            {user.email}
          </p>

        </div>

      </div>

      <button
        onClick={handleLogout}
        className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl flex items-center justify-center gap-2 transition"
      >
        <LogOut size={18} />
        Logout
      </button>

    </div>
  );
}