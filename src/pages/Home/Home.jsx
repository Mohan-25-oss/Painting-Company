import React from 'react';
import { Link } from 'react-router-dom';


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
        <div className="min-h-screen md:mt-22 bg-[conic-gradient(at_top_left,_#facc15,_#f472b6,_#60a5fa,_#34d399)]">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-900 via-purple-700 to-pink-600 text-white">
                <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}></div>
                <div className="relative container mx-auto px-4 py-24">
                    <div className="max-w-2xl mt-0 text-center">
                        <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                            Professional <span className="text-yellow-400">Painting</span> Services
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100">
                            Transform your space with our expert painting solutions. Quality workmanship guaranteed.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                                Get Free Estimate
                            </Link>
                            <Link to="/services" className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative py-24 overflow-hidden rounded-3xl mx-4 lg:mx-16 mt-16 shadow-2xl">
                {/* Animated background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#f472b6,_#a78bfa,_#60a5fa,_#34d399,_#facc15)] animate-gradient-xy opacity-95"></div>

                <div className="relative container mx-auto px-4 text-center text-white">
                    <h2 className="relative text-5xl md:text-6xl font-extrabold mb-16 text-transparent bg-clip-text 
bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400 animate-gradient-x drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] tracking-tight">
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient-x">Clients</span>{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 animate-gradient-x">Love</span>{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 animate-gradient-x">Us</span>{" "}
                        <span className="inline-block animate-bounce text-pink-400">💖</span>

                        {/* glowing underline */}
                        <span className="absolute left-1/2 -bottom-2 w-2/3 h-[3px] bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-400 rounded-full -translate-x-1/2 blur-md animate-pulse"></span>
                    </h2>


                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Card 1 */}
                        <div className="group text-center p-8 rounded-3xl shadow-lg border-4 border-transparent bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 text-white hover:shadow-2xl hover:scale-105 transition-all duration-500 transform hover:-translate-y-2">
                            <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                                <span className="text-4xl">🎨</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Quality Materials</h3>
                            <p className="text-white/90 leading-relaxed">
                                We use only premium paints and materials to ensure a flawless and lasting finish.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group text-center p-8 rounded-3xl shadow-lg border-4 border-transparent bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 text-white hover:shadow-2xl hover:scale-105 transition-all duration-500 transform hover:-translate-y-2">
                            <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                                <span className="text-4xl">⏱️</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">On-Time Completion</h3>
                            <p className="text-white/90 leading-relaxed">
                                We respect your time and ensure every project is completed right on schedule.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="group text-center p-8 rounded-3xl shadow-lg border-4 border-transparent bg-gradient-to-br from-green-400 via-lime-400 to-yellow-400 text-white hover:shadow-2xl hover:scale-105 transition-all duration-500 transform hover:-translate-y-2">
                            <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                                <span className="text-4xl">💰</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Fair Pricing</h3>
                            <p className="text-white/90 leading-relaxed">
                                Transparent, honest, and competitive pricing — no surprises, just value.
                            </p>
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
    <Link 
        to="/contact" 
        className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg transition duration-300 transform hover:scale-105 hover:brightness-110"
    >
        📞 Call Now
    </Link>
    <Link 
        to="/contact" 
        className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg transition duration-300 transform hover:scale-105 hover:brightness-110"
    >
        ✉️ Get Quote
    </Link>
</div>

            </section>

        </div>
    );
};

export default Home;
