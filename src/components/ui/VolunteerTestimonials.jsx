// components/VolunteerTestimonials.js
import React from "react";

const VolunteerTestimonials = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Volunteer Stories</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="italic">
                            "Volunteering with HandsOn gave me the chance to
                            make a real impact on my community!"
                        </p>
                        <p className="mt-4 font-semibold">John Doe</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="italic">
                            "I never thought volunteering could be so rewarding.
                            HandsOn made it easy and meaningful."
                        </p>
                        <p className="mt-4 font-semibold">Jane Smith</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VolunteerTestimonials;
