import React from "react";
import { url } from "../../data/constance";
import Button from "./Button";

const Hero = () => {
    return (
        <section className="relative container min-h-screen flex items-center justify-center px-6">
            <div className="container mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
                <div className="text-center md:text-left">
                    <h1 className="hero-heading">
                        Come, Let's Be Part of{" "}
                        <span className="text-accent">Change</span>
                    </h1>
                    <p className="hero-description my-6">
                        Small actions create big impacts. Join our
                        community-driven volunteering platform and contribute
                        towards a better world. Discover opportunities to help,
                        connect, and make a real difference.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
                        <Button text="Discover" hoverText="hover:text-accent" />
                    </div>
                </div>

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
