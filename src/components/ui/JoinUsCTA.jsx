// components/JoinUsCTA.js
import React from "react";

const JoinUsCTA = () => {
    return (
        <section className="bg-blue-500 text-white py-20 text-center">
            <h2 className="text-3xl font-bold mb-4">
                Ready to Make a Difference?
            </h2>
            <p className="text-lg mb-6">
                Join the HandsOn community today and start volunteering!
            </p>
            <a
                href="#signup"
                className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg"
            >
                Join Us Now
            </a>
        </section>
    );
};

export default JoinUsCTA;
