// components/FindOpportunities.js
import React from "react";

const FindOpportunities = () => {
    return (
        <section id="find-opportunities" className="py-20 bg-gray-200">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">
                    Find Volunteer Opportunities
                </h2>
                <div className="flex justify-center mb-8">
                    <input
                        type="text"
                        placeholder="Search by cause, location, or category..."
                        className="w-1/2 p-3 rounded-l-full text-lg"
                    />
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-r-full text-lg">
                        Search
                    </button>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Example of Opportunity Cards */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold">
                            Environmental Cleanup
                        </h3>
                        <p className="text-sm">
                            Join our effort to clean up the local park.
                        </p>
                        <button className="mt-4 text-blue-500">
                            View Details
                        </button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold">Teaching English</h3>
                        <p className="text-sm">
                            Help children in underserved communities learn
                            English.
                        </p>
                        <button className="mt-4 text-blue-500">
                            View Details
                        </button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold">Animal Shelter</h3>
                        <p className="text-sm">
                            Volunteer to take care of animals in need.
                        </p>
                        <button className="mt-4 text-blue-500">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FindOpportunities;
