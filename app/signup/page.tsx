"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "contributor",
    location: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", role: "contributor", location: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center px-4 py-12">
      <div className="max-w-xl w-full text-center space-y-6">
        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Building in Public • Zuru ➔ Nigeria
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-100">
          Discover Nigeria. <br />
          <span className="text-emerald-400">Support Local.</span>
        </h1>

        <p className="text-slate-400 text-base sm:text-lg">
          We are building Nigeria's central discovery platform for destinations, local businesses, and cultural experiences. Join us early as a contributor or partner.
        </p>

        <div className="bg-slate-800/80 border border-slate-700 p-6 sm:p-8 rounded-2xl shadow-xl text-left">
          {status === "success" ? (
            <div className="text-center py-6 space-y-2">
              <h3 className="text-xl font-bold text-emerald-400">Welcome to Nigeria Tour!</h3>
              <p className="text-slate-300 text-sm">We received your application. We will reach out soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bashmati"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Your Location (City/State)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Zuru, Kebbi"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">How would you like to join?</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="contributor">Local Contributor / Explorer</option>
                  <option value="business">Business Owner (Hotel, Restaurant, Transport)</option>
                  <option value="creator">Content Creator / Photographer</option>
                  <option value="developer">Developer / Designer</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold py-2.5 rounded-lg text-sm transition-all"
              >
                {status === "loading" ? "Submitting..." : "Sign Up to Build With Us"}
              </button>

              {status === "error" && (
                <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </main>
  );
}