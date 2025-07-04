import React, { Suspense } from "react"
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-800">
            <Suspense>
                <ResetPasswordForm />
            </Suspense>
        </div>
    );
}