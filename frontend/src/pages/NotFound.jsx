import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B1120] flex flex-col items-center justify-center text-white px-6">

      <h1 className="text-8xl font-extrabold text-violet-500">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-6">
        Page Not Found
      </h2>

      <p className="text-gray-400 mt-4 text-center max-w-lg">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 bg-violet-600 hover:bg-violet-700 px-8 py-3 rounded-full font-semibold transition"
      >
        ⬅ Back to Home
      </Link>

    </div>
  );
}