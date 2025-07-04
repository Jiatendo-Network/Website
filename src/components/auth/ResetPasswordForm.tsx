"use client"
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

const ResetPasswordForm = () => {
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const email = searchParams.get('email')

    const { resetPassword, loading } = useAuth();
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await resetPassword(email || "", token || "", password)

            toast.success("Password was changed successfully. Now you can login with new password")
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
            <h2 className="text-3xl text-white font-bold mb-2 text-center">Reset Password</h2>
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
                {loading ? "Changing..." : "Confirm"}
            </button>
            <div className="text-blue-300 text-center mt-2">
                Changed password?{" "}
                <a href="/login" className="underline hover:text-blue-400">
                    Login
                </a>
            </div>
        </form>
    );
};

export default ResetPasswordForm;