import React from 'react';


const Home = () => {
    const services = [
        {
            img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Residential Painting",
            desc: "Beautiful interior and exterior painting for your home",
            gradient: "from-purple-400 via-pink-400 to-red-400"
        },
        {
            img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Commercial Painting",
            desc: "Professional painting for offices and business spaces",
            gradient: "from-yellow-400 via-orange-400 to-red-400"
        },
        {
            img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Exterior Painting",
            desc: "Durable and weather-resistant exterior coatings",
            gradient: "from-green-400 via-teal-400 to-cyan-400"
        },
    ];

    return (
        <div className="min-h-screen mt-15 bg-[conic-gradient(at_top_left,_#facc15,_#f472b6,_#60a5fa,_#34d399)]">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-900 via-purple-700 to-pink-600 text-white">
                <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}></div>
                <div className="relative container mx-auto px-4 py-24">
                    <div className="max-w-2xl text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Professional <span className="text-yellow-400">Painting</span> Services
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100">
                            Transform your space with our expert painting solutions. Quality workmanship guaranteed.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                                Get Free Estimate
                            </button>
                            <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
                                View Our Work
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white text-center rounded-3xl mx-4 lg:mx-16 mt-16 shadow-2xl">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
                            <div className="w-16 h-16 bg-gradient-to-tr from-yellow-200 via-pink-200 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🎨</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Materials</h3>
                            <p className="text-gray-600">We use only premium paints and materials for lasting results</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
                            <div className="w-16 h-16 bg-gradient-to-tr from-cyan-200 via-blue-200 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">⏱️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">On-Time Completion</h3>
                            <p className="text-gray-600">We respect your time and complete projects as promised</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
                            <div className="w-16 h-16 bg-gradient-to-tr from-green-200 via-lime-200 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💰</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Fair Pricing</h3>
                            <p className="text-gray-600">Competitive rates with no hidden costs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-20 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white text-center rounded-3xl mx-4 lg:mx-16 mt-16 shadow-2xl">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            Our <span className="text-yellow-300">Services</span>
                        </h2>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                            Comprehensive painting solutions for every need
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
                            >
                                <div className="relative overflow-hidden h-56">
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    {/* Colorful overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-30 mix-blend-multiply`}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-3">
                                        <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                                            {service.title}
                                        </span>
                                    </h3>
                                    <p className="text-gray-700 mb-4">{service.desc}</p>
                                    <button className="w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                                        Learn More →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white text-center rounded-3xl mx-4 lg:mx-16 mt-16 shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                    Ready to <span className="text-yellow-300">Transform</span> Your Space?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                    Contact us today for a free estimate and consultation!
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl text-lg transition duration-300 transform hover:scale-105">
                        📞 Call Now
                    </button>
                    <button className="border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-2xl text-lg transition duration-300">
                        ✉️ Get Quote
                    </button>
                </div>
            </section>

        </div>
    );
};

export default Home;
