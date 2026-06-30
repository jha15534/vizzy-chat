import { useState, useEffect } from "react";
import { login } from "../services/authApi";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  // Auth Context
  const {
    user,
    login: authLogin,
  } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Auto Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/chat");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await login(form);

      // Save user & token using AuthContext
      authLogin(
        res.data.user,
        res.data.access_token
      );

      alert("Login Successful 🎉");

      navigate("/chat");
    } catch (err) {
      alert(
        err.response?.data?.detail ||
        "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="bg-[#111827] w-[420px] rounded-2xl p-8 shadow-xl"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          Welcome Back 👋
        </h1>

        <p className="text-gray-400 mb-8">
          Login to Vizzy AI
        </p>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-xl bg-[#1F2937] text-white outline-none"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-6 p-3 rounded-xl bg-[#1F2937] text-white outline-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-violet-600 hover:bg-violet-700 py-3 rounded-xl font-semibold disabled:opacity-60"
        >
          {loading && (
            <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
            )}
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-gray-400 text-center mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-violet-400 hover:underline"
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}