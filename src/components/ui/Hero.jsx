import React from "react";
import { url } from "../../data/constance";

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-r from-green-500 to-green-700 min-h-screen flex items-center justify-center px-6">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-green-900/30 mix-blend-multiply"></div>

            <div className="container mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
                {/* Left Content */}
                <div className="text-center md:text-left">
                    <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-md">
                        Come, Let's Be Part of{" "}
                        <span className="text-yellow-300">Change</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-8 max-w-lg">
                        Small actions create big impacts. Join our
                        community-driven volunteering platform and contribute
                        towards a better world. Discover opportunities to help,
                        connect, and make a real difference.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
                        <a
                            href="/discover"
                            className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                        >
                            Discover
                        </a>
                    </div>
                </div>

                {/* Right Image/Illustration */}
                <div className="flex justify-center">
                    <img
                        src={`${url}`}
                        className="w-80 md:w-96 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
                        alt="Hero Illustration"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
