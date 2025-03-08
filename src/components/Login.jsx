import React, { useState } from "react";
import Button from "./Button";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 py-6">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Login
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                            required
                        />
                    </div>
                    <Button
                        text="Login"
                        color="bg-accent"
                        hoverColor="hover:bg-orange-600"
                    />
                </form>
                <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account?{" "}
                    <a href="/register" className="text-accent hover:underline">
                        Register
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Login;
