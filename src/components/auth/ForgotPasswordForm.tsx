"use client"
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

const ForgotPasswordForm = () => {
    const { requestReset, loading } = useAuth();
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await requestReset(email)

            toast.success("Reset link sent. Please check your inbox")
        } catch (err: unknown) {
            console.error(err)
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
            <h2 className="text-3xl text-white font-bold mb-2 text-center">Forgot Password</h2>
            <input
                className="w-full p-3 rounded-lg bg-blue-900 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
            />
            <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                type="submit"
                disabled={loading}
            >
                {loading ? "Sending..." : "Send Link"}
            </button>
        </form>
    );
};

export default ForgotPasswordForm;