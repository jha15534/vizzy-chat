import { useState } from "react";
import { signup } from "../services/authApi";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await signup(form);

      alert("Signup Successful 🎉");

      navigate("/login");
    } catch (err) {
      alert(
        err.response?.data?.detail ||
        "Signup Failed"
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] flex justify-center items-center">

      <form
        onSubmit={handleSignup}
        className="bg-[#111827] w-[420px] rounded-2xl p-8 shadow-xl"
      >

        <h1 className="text-4xl font-bold text-white mb-2">
          Create Account 🚀
        </h1>

        <p className="text-gray-400 mb-8">
          Join Vizzy AI
        </p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-xl bg-[#1F2937] text-white outline-none"
          required
        />

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
          className="w-full bg-violet-600 hover:bg-violet-700 py-3 rounded-xl font-semibold"
        > 
          {loading  && (
            <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
            )}

          {loading ? "Creating Account..." : "Signup"}
        </button>

        <p className="text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-violet-400"
          >
            Login
          </Link>
        </p>

      </form>

    </div>
  );
}
