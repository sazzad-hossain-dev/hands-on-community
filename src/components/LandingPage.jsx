import React from "react";
import Hero from "./ui/Hero";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <Hero />
            {/* Features Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Why Choose HandsOn?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Discover Events
                            </h3>
                            <p className="text-gray-600">
                                Find and join volunteer events in your
                                community.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Post Help Requests
                            </h3>
                            <p className="text-gray-600">
                                Request assistance for your social initiatives.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Form Teams
                            </h3>
                            <p className="text-gray-600">
                                Collaborate with others for large-scale
                                projects.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Track Your Impact
                            </h3>
                            <p className="text-gray-600">
                                Log hours, earn points, and showcase your
                                contributions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-green-500 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Make a Difference?
                    </h2>
                    <p className="text-xl text-white mb-8">
                        Join HandsOn today and start contributing to your
                        community.
                    </p>
                    <a
                        href="/signup"
                        className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                    >
                        Get Started
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 py-6">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-white">
                        &copy; 2023 HandsOn. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
