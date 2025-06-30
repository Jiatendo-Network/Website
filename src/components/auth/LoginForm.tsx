"use client"
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LoginForm = () => {
    const { login, loading } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
            toast.success("Login successful!");
            setTimeout(() => {
                router.push("/profile");
            }, 1000);
        } catch (err: unknown) {
            if (err instanceof Error) {
                toast.error(err.message);
            } else {
                toast.error("An error occurred.");
            }
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-8 bg-blue-950 rounded-2xl shadow-2xl flex flex-col gap-4"
        >
            <h2 className="text-3xl text-white font-bold mb-2 text-center">Login</h2>
            <input
                className="w-full p-3 rounded-lg bg-blue-900 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
            />
            <input
                className="w-full p-3 rounded-lg bg-blue-900 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoComplete="current-password"
            />
            <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                type="submit"
                disabled={loading}
            >
                {loading ? "Logging in..." : "Login"}
            </button>
            <div className="text-blue-300 text-center mt-2">
                Don&apos;t have an account?{" "}
                <a href="/register" className="underline hover:text-blue-400">
                    Register
                </a>
            </div>
        </form>
    );
};

export default LoginForm;