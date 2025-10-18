import React from 'react';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Residential Painting",
            description: "Complete interior and exterior painting for homes and apartments with premium quality paints and expert craftsmanship.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            icon: "🏠",
            features: ["Interior Painting", "Exterior Painting", "Color Consultation"]
        },
        {
            id: 2,
            title: "Commercial Painting",
            description: "Professional painting services for offices, stores, and commercial buildings with minimal business disruption.",
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            icon: "🏢",
            features: ["Office Painting", "Retail Spaces", "Industrial Painting"]
        },
        {
            id: 3,
            title: "Specialty Finishes",
            description: "Custom finishes including faux painting, textures, and decorative coatings for unique visual effects.",
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            icon: "✨",
            features: ["Faux Finishes", "Wall Textures", "Decorative Coatings"]
        },
        {
            id: 4,
            title: "Cabinet Refinishing",
            description: "Transform your kitchen and bathroom cabinets with professional refinishing and painting services.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            icon: "🔨",
            features: ["Kitchen Cabinets", "Bathroom Vanities", "Custom Finishes"]
        },
        {
            id: 5,
            title: "Exterior Protection",
            description: "Durable exterior coatings and weather-resistant paints to protect your property from the elements.",
            image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            icon: "🛡️",
            features: ["Weather Protection", "Long-lasting Finish", "Surface Preparation"]
        },
        {
            id: 6,
            title: "Color Consultation",
            description: "Expert color matching and consultation services to help you choose the perfect colors for your space.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            icon: "🎨",
            features: ["Color Matching", "Style Advice", "Sample Testing"]
        }
    ];

    return (
        <section id="services" className="py-16 bg-white mt-1">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Our <span className='text-blue-500'>Professional</span> Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive painting solutions for residential and commercial properties with quality craftsmanship
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                        >
                            {/* Image Container - Fixed */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                                    <span className="text-lg">{service.icon}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-700 text-sm">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
                    <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h3>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Get a free estimate and consultation for your painting project
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
                            Get Free Estimate
                        </button>
                        <button className="border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;