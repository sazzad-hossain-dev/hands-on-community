// components/HowItWorks.js
import React from "react";

const HowItWorks = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="text-5xl mb-4">1</div>
                        <p className="text-lg font-semibold">Sign Up</p>
                        <p>
                            Join our community by creating a profile and getting
                            started.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-5xl mb-4">2</div>
                        <p className="text-lg font-semibold">
                            Browse Opportunities
                        </p>
                        <p>
                            Explore various volunteering opportunities that
                            align with your interests.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-5xl mb-4">3</div>
                        <p className="text-lg font-semibold">
                            Start Volunteering
                        </p>
                        <p>
                            Apply for and participate in projects that make an
                            impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
