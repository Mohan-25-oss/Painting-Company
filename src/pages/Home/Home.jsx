import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../Hero/Hero';

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Home = () => {
    return (
        <div className="min-h-screen mt-16">

            <Hero />

            {/* Hero Section */}
            <section className="relative mt-5 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}
                ></div>

                <div className="relative container mx-auto px-4 py-24">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Professional <span className="text-yellow-400">Painting</span> Services
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100">
                            Transform your space with our expert painting solutions. Quality workmanship guaranteed.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                                Get Free Estimate
                            </button>
                            <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
                                View Our Work
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-4xl font-extrabold text-center mb-12 drop-shadow-lg"
                    >
                        Why Clients <span className="text-yellow-300">Love Us</span>
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { icon: "🎨", title: "Quality Materials", desc: "Premium paints & materials for lasting results." },
                            { icon: "⏱️", title: "On-Time Completion", desc: "Projects finished on time, every time." },
                            { icon: "💰", title: "Fair Pricing", desc: "Transparent, competitive pricing with no hidden fees." },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="bg-white/20 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:scale-105 transition duration-500 border border-white/20"
                            >
                                <div className="w-20 h-20 bg-gradient-to-tr from-yellow-300 via-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md hover:shadow-yellow-300/40 transition duration-300">
                                    <span className="text-3xl">{item.icon}</span>
                                </div>
                                <h3 className="text-2xl font-semibold mb-3 text-white drop-shadow">{item.title}</h3>
                                <p className="text-white/90">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our <span className="text-blue-600">Services</span></h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive painting solutions for every need
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                                title: "Residential Painting",
                                desc: "Beautiful interior and exterior painting for your home"
                            },
                            {
                                img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                                title: "Commercial Painting",
                                desc: "Professional painting for offices and business spaces"
                            },
                            {
                                img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                                title: "Exterior Painting",
                                desc: "Durable and weather-resistant exterior coatings"
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                            >
                                <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 mb-4">{service.desc}</p>
                                    <button className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300">Learn More →</button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Our Painting Services?</h2>
                            <div className="space-y-4">
                                {[
                                    { title: "Expert Craftsmen", desc: "Skilled painters with years of experience." },
                                    { title: "Quality Assurance", desc: "Comprehensive warranties for peace of mind." },
                                    { title: "Clean & Efficient", desc: "Maintaining cleanliness and finishing on time." }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                                            <span className="text-white text-sm">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Professional Painter" className="rounded-2xl shadow-2xl" />
                            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-blue-900 p-6 rounded-xl shadow-lg">
                                <div className="text-center">
                                    <div className="text-3xl font-bold">15+</div>
                                    <div className="text-sm font-semibold">Years Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
