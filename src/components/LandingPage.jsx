import React from "react";
import Hero from "./ui/Hero";
import Header from "./ui/Header";
import WhyHandsOn from "./ui/WhyHandsOn";
import AboutHandsOn from "./ui/AboutHandsOn";
import HowItWorks from "./ui/HowItWorks";
import FindOpportunities from "./ui/FindOpportunities";
import VolunteerTestimonials from "./ui/VolunteerTestimonials";
import UpcomingEvents from "./ui/UpcomingEvents";
import JoinUsCTA from "./ui/JoinUsCTA";
import Footer from "./ui/Footer";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-primary">
                <Hero />
            </div>
            <div>
                <WhyHandsOn />
            </div>
            <div>
                <AboutHandsOn />
            </div>
            <div>
                <HowItWorks />
            </div>
            <div>
                <FindOpportunities />
            </div>
            <div>
                <VolunteerTestimonials />
            </div>
            <div>
                <UpcomingEvents />
            </div>
            <div>
                <JoinUsCTA />
            </div>
        </div>
    );
};

export default LandingPage;
