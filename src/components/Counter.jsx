import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [displayedName, setDisplayedName] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setDisplayedName(name);
    setLoading(true);
    setTimeout(() => {
      navigate("/youtube-dashboard");
    }, 5000
  )
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-10 px-4 py-12">
      {/* Counter card */}
      <div className="w-[340px] bg-[#0d0d0d] border border-[#2a2a2a] rounded-2xl shadow-[0_0_30px_-10px_rgba(221,160,221,0.25)] px-8 py-8 flex flex-col items-center gap-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">
            Current Count
          </p>
          <p className="text-5xl font-semibold text-[#dda0dd] tabular-nums">
            {count}
          </p>
        </div>

        <div className="flex items-center gap-3 w-full">
          <button
            onClick={() => setCount(count - 1)}
            className="flex-1 py-2.5 rounded-lg border border-[#dda0dd] text-[#dda0dd] font-medium hover:bg-[#dda0dd]/10 active:scale-95 transition"
          >
            −
          </button>
          <button
            onClick={() => setCount(0)}
            className="flex-1 py-2.5 rounded-lg border border-gray-600 text-gray-300 font-medium hover:bg-white/5 active:scale-95 transition text-sm"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="flex-1 flex items-center justify-center py-2.5 rounded-lg bg-[#dda0dd] text-black font-semibold hover:opacity-90 active:scale-95 transition"
          >
            +
          </button>
        </div>
      </div>

      {/* Login card */}
      <form
        onSubmit={handleLogin}
        className="w-[340px] bg-[#0d0d0d] border border-[#2a2a2a] rounded-2xl shadow-[0_0_30px_-10px_rgba(221,160,221,0.25)] px-8 py-8 flex flex-col gap-4"
      >
        <div className="mb-2">
          <h2 className="text-lg font-bold text-center text-50">Welcome back</h2>
          <p className="text-sm text-gray-500 text-center">Sign in to continue</p>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-400">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-[#dda0dd] transition"
            disabled={loading}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-400">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-[#dda0dd] transition"
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          className="mt-2 flex items-center justify-center py-2.5 rounded-lg bg-[#dda0dd] text-black font-semibold hover:opacity-90 active:scale-95 transition"
          disabled={loading}
        >
          {loading ? (
            <>
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            "Signing in..."
            </> 
            ) : (
              "Sign In"
            )}
        </button>

        {displayedName && (
          <p className="w-full text-center text-sm text-gray-400 pt-1">
            Hello, <span className="text-[#dda0dd] font-medium">{displayedName}</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Counter;