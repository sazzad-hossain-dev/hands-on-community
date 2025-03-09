// components/UpcomingEvents.js
import React from "react";

const UpcomingEvents = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-blue-500 text-white p-6 rounded-lg">
                        <h3 className="text-xl font-bold">
                            Global Clean Up Drive
                        </h3>
                        <p className="text-sm">
                            Join volunteers from around the world to clean up
                            our environment.
                        </p>
                        <button className="mt-4 text-yellow-400">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-blue-500 text-white p-6 rounded-lg">
                        <h3 className="text-xl font-bold">
                            Food Donation Drive
                        </h3>
                        <p className="text-sm">
                            Help provide food for those in need.
                        </p>
                        <button className="mt-4 text-yellow-400">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-blue-500 text-white p-6 rounded-lg">
                        <h3 className="text-xl font-bold">
                            Youth Empowerment Workshop
                        </h3>
                        <p className="text-sm">
                            Mentor young people and help them build a better
                            future.
                        </p>
                        <button className="mt-4 text-yellow-400">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
