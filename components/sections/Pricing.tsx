const Pricing = () => {
    const pricingPlans = [
        {
            title: "Basic",
            price: "$19/month",
            features: ["1 Website", "Basic Support", "Limited Features"],
        },
        {
            title: "Pro",
            price: "$49/month",
            features: ["3 Websites", "Priority Support", "Advanced Features"],
        },
        {
            title: "Enterprise",
            price: "Custom",
            features: ["Unlimited Websites", "24/7 Support", "Full Features"],
        },
    ];

    return (
        <section id="pricing" className="w-full max-w-7xl mx-auto py-12 px-6">
            <h1 className="text-center font-bold text-4xl mb-8">Pricing</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-[#5b84d9] text-white p-6 rounded-2xl shadow-lg text-center flex flex-col items-center"
                    >
                        <h2 className="text-2xl font-bold">{plan.title}</h2>
                        <p className="text-xl my-3">{plan.price}</p>
                        <ul className="space-y-2">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="text-md">
                                    ✅ {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="mt-6 bg-white text-[#5b84d9] font-semibold px-4 py-2 rounded-lg">
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
