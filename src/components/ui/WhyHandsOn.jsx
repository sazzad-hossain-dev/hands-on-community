const WhyHandsOn = () => {
    return (
        <section className="py-16 bg-white text-center px-8">
            <h2 className="text-3xl font-semibold">Why Choose HandsOn?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                    {
                        title: "Discover Volunteer Events",
                        desc: "Find and join volunteer events in your community.",
                    },
                    {
                        title: "Develop Leadership & Skills",
                        desc: "Enhance teamwork, problem-solving, and leadership abilities.",
                    },
                    {
                        title: "Collaborate & Form Teams",
                        desc: "Work with like-minded people on impactful projects.",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-6 rounded-xl shadow-lg"
                    >
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="mt-2">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyHandsOn;
