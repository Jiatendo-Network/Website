"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
    email: string;
    nickname: string;
    avatarSVG?: string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, nickname: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    // Load token/user from localStorage on mount
    useEffect(() => {
        const t = localStorage.getItem("token");
        if (t) {
            setToken(t);
            fetchProfile(t);
        } else {
            setLoading(false);
        }
    }, []);

    const fetchProfile = async (jwt: string) => {
        try {
            const res = await fetch("/api/auth/me", {
                headers: { Authorization: `Bearer ${jwt}` },
            });
            if (res.ok) {
                const data = await res.json();
                setUser(data.user);
            } else {
                setUser(null);
                setToken(null);
                localStorage.removeItem("token");
            }
        } catch {
            setUser(null);
            setToken(null);
            localStorage.removeItem("token");
        }
        setLoading(false);
    };

    const login = async (email: string, password: string) => {
        setLoading(true);
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        if (!res.ok) throw new Error("Invalid credentials");
        const data = await res.json();
        setToken(data.token);
        localStorage.setItem("token", data.token);
        await fetchProfile(data.token);
        setLoading(false);
    };

    const register = async (email: string, password: string, nickname: string) => {
        setLoading(true);
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, nickname }),
        });
        if (!res.ok) {
            const data = await res.json();
            setLoading(false);
            throw new Error(data.error || "Registration failed");
        }
        setLoading(false);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ user, token, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
};