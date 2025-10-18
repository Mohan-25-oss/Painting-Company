import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 text-white relative overflow-hidden">
            {/* Decorative Background Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="container mx-auto px-6 py-16 relative z-10">
                <div className="grid md:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-blue-900 font-bold text-xl">P</span>
                            </div>
                            <span className="ml-3 text-2xl font-bold tracking-wide">ProPainters</span>
                        </div>
                        <p className="text-gray-200 mb-6 leading-relaxed max-w-md">
                            🎨 Transforming homes and businesses with color, creativity, and craftsmanship.  
                            Let your walls tell a story of elegance and excellence.
                        </p>

                        <div className="flex space-x-4">
                            {['📘', '📷', '🐦', '💼'].map((icon, index) => (
                                <div
                                    key={index}
                                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:scale-110 hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300"
                                >
                                    {icon}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 border-b-2 border-yellow-400 inline-block pb-1">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'Services', 'Portfolio', 'Reviews', 'Contact'].map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.toLowerCase()}
                                        className="text-gray-200 hover:text-yellow-400 transition duration-300"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 border-b-2 border-yellow-400 inline-block pb-1">Contact Info</h3>
                        <ul className="space-y-3 text-gray-200">
                            <li>📞 +1 (555) 123-4567</li>
                            <li>✉️ info@propainters.com</li>
                            <li>📍 123 Painting St, Color City, CA</li>
                            <li>🕒 Mon–Fri: 8AM–6PM</li>
                        </ul>

                        <button className="mt-6 bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl hover:bg-white hover:text-purple-700 transition duration-300 transform hover:scale-105 shadow-lg">
                            Get Free Quote 🎯
                        </button>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/20 mt-12 pt-6 text-center text-gray-300 text-sm">
                    <p>
                        © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">ProPainters</span> — All Rights Reserved.
                    </p>
                    <p className="mt-2 opacity-80">Designed with ❤️ to bring colors to your world</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
