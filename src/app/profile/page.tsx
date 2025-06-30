"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function ProfilePage() {
    const { user, logout, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [user, loading, router]);

    if (loading) {
        return <div className="text-center text-white py-10">Loading...</div>;
    }

    if (!user) {
        return null;
    }

    const handleLogout = () => {
        logout();
        toast.success("You have been logged out.");
    };

    return (
        <div className="min-h-screen bg-[#181f3a] flex flex-col items-center py-20 px-2">
            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex flex-col items-center bg-[#23294a] rounded-2xl shadow-xl p-8">
                    <div className="w-36 h-36 rounded-full bg-blue-700 flex items-center justify-center mb-4 overflow-hidden border-4 border-blue-400 shadow-lg">
                        {user.avatarSVG ? (
                            <div
                                className="w-full h-full"
                                dangerouslySetInnerHTML={{ __html: user.avatarSVG }}
                            />
                        ) : (
                            <span className="text-white text-7xl">👤</span>
                        )}
                    </div>
                    <div className="text-white text-2xl font-bold mb-1">{user.nickname}</div>
                    <div className="text-blue-200 text-sm mb-2">Email: {user.email}</div>
                    <div className="mb-4">
                        <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">Standard</span>
                    </div>
                    <button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition mb-4"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>

                <div className="md:w-2/3 flex flex-col gap-6">
                    <div className="bg-[#23294a] rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold text-white mb-6">User settings</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div className="text-blue-300 text-sm mb-1">Nickname</div>
                                <div className="text-white text-lg font-semibold">{user.nickname}</div>
                            </div>
                            <div>
                                <div className="text-blue-300 text-sm mb-1">Email</div>
                                <div className="text-white text-lg font-semibold">{user.email}</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#23294a] rounded-2xl shadow-xl p-8 flex flex-col items-center">
                        <h2 className="text-xl font-bold text-white mb-4">Server environment</h2>
                        <div className="bg-purple-600 text-white text-lg font-bold rounded-xl px-8 py-4 mb-2 shadow">
                            Production
                        </div>
                        <div className="text-blue-200 text-center">
                            Beta servers are exclusive to beta testers.<br />
                            To become a beta tester, upgrade to a higher account tier.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
