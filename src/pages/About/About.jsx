import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const teamMembers = [
        {
            name: "John Smith",
            position: "Founder & Lead Painter",
            experience: "15+ years",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            specialty: "Exterior Painting"
        },
        {
            name: "Sarah Johnson",
            position: "Interior Specialist",
            experience: "12+ years",
            image: "https://interiordesignermagazine.co.uk/wp-content/uploads/2024/12/Screenshot-2024-12-02-at-15.16.45.png",
            specialty: "Color Consultation"
        },
        {
            name: "Mike Chen",
            position: "Commercial Manager",
            experience: "10+ years",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            specialty: "Large Projects"
        },
        {
            name: "Emily Davis",
            position: "Quality Control",
            experience: "8+ years",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            specialty: "Detail Work"
        }
    ];

    const stats = [
        { number: "500+", label: "Projects Completed" },
        { number: "15+", label: "Years Experience" },
        { number: "98%", label: "Customer Satisfaction" },
        { number: "50+", label: "Repeat Clients" }
    ];

    const values = [
        {
            icon: "🎯",
            title: "Precision",
            description: "Attention to detail in every stroke and finish"
        },
        {
            icon: "🤝",
            title: "Integrity",
            description: "Honest pricing and transparent communication"
        },
        {
            icon: "⚡",
            title: "Efficiency",
            description: "Timely completion without compromising quality"
        },
        {
            icon: "❤️",
            title: "Passion",
            description: "Genuine love for transforming spaces"
        }
    ];

    return (
        <div className="min-h-screen mt-10 bg-[radial-gradient(circle_at_top_left,_#fde68a,_#f9a8d4,_#93c5fd,_#6ee7b7)] animate-gradient-slow">

            {/* Header Section */}
            <section className="relative bg-gradient-to-br from-blue-800 to-blue-600 text-white py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-6xl font-extrabold mb-6 text-center animate-fadeInUp">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            About
                        </span>{" "}
                        <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                            Our
                        </span>{" "}
                        <span className="bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent animate-bounce">
                            Company
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        With over 15 years of excellence in painting services, we transform spaces and exceed expectations
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200">

                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                            <div className="space-y-4 text-gray-600 text-lg">
                                <p>
                                    Founded in 2008, <span className="text-blue-600 font-semibold">ProPainters</span> began as a small local painting service with a simple mission: to deliver exceptional painting results with unmatched customer service.
                                </p>
                                <p>
                                    What started as a one-person operation has grown into a trusted team of skilled professionals, serving both residential and commercial clients across the region.
                                </p>
                                <p>
                                    Our journey has been built on word-of-mouth referrals and repeat business - a testament to our commitment to quality and customer satisfaction.
                                </p>
                            </div>

                            <div className="mt-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                                <p className="text-blue-800 text-lg italic">
                                    "We believe that a fresh coat of paint does more than just beautify a space - it transforms moods, inspires creativity, and creates lasting impressions."
                                </p>
                                <p className="text-blue-600 font-semibold mt-4">- John Smith, Founder</p>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Our team at work"
                                className="rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-blue-900 p-6 rounded-xl shadow-lg">
                                <div className="text-center">
                                    <div className="text-3xl font-bold">Since 2008</div>
                                    <div className="text-sm font-semibold">Trusted Service</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                                <div className="text-blue-100 font-semibold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
           <section className="py-16 bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100">

                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The principles that guide our work and define our company culture
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition duration-300">
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
           <section className="py-16 bg-gradient-to-tr from-blue-100 via-teal-100 to-green-100">

                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Skilled professionals dedicated to delivering exceptional results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                                <div className="relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="relative w-full aspect-square overflow-hidden rounded-2xl group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                        <div className="text-white font-semibold">{member.name}</div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{member.position}</h3>
                                    <div className="flex items-center text-sm text-gray-600 mb-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        {member.experience} experience
                                    </div>
                                    <div className="text-sm text-blue-600 font-semibold">
                                        Specialty: {member.specialty}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
           <section className="py-16 bg-gradient-to-bl from-rose-100 via-amber-100 to-lime-100">

                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            How we deliver exceptional results from start to finish
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                1
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Consultation</h3>
                            <p className="text-gray-600">We listen to your needs and provide expert advice</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                2
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Planning</h3>
                            <p className="text-gray-600">Detailed project plan and transparent quote</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                3
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Execution</h3>
                            <p className="text-gray-600">Professional painting with attention to detail</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                4
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Completion</h3>
                            <p className="text-gray-600">Final inspection and customer satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
                        Join hundreds of satisfied customers who trust us with their painting projects
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                            Get Free Estimate
                        </button>
                        <button className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
                            <Link to="/contact">Meet Our Team</Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;