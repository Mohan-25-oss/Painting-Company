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

                        {/* Add this to your index.html */}
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

                        <div className="flex space-x-4">
                            {[
                                {
                                    icon: 'fab fa-facebook-f',
                                    platform: 'Facebook',
                                    url: 'https://www.facebook.com/profile.php?id=61578493127709&sk=about',
                                    color: 'hover:bg-blue-600'
                                },
                                {
                                    icon: 'fab fa-instagram',
                                    platform: 'Instagram',
                                    url: 'https://instagram.com/your-profile',
                                    color: 'hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500'
                                },
                                {
                                    icon: 'fab fa-whatsapp',
                                    platform: 'WhatsApp',
                                    url: 'https://wa.me/your-number',
                                    color: 'hover:bg-green-500'
                                },
                                {
                                    icon: 'fab fa-youtube',
                                    platform: 'YouTube',
                                    url: 'https://youtube.com/your-channel',
                                    color: 'hover:bg-red-600'
                                },
                                {
                                    icon: 'fab fa-tiktok',
                                    platform: 'TikTok',
                                    url: 'https://tiktok.com/@your-profile',
                                    color: 'hover:bg-black'
                                },
                                {
                                    icon: 'fab fa-linkedin-in',
                                    platform: 'LinkedIn',
                                    url: 'https://linkedin.com/company/your-company',
                                    color: 'hover:bg-blue-500'
                                },
                                {
                                    icon: 'fab fa-twitter',
                                    platform: 'Twitter',
                                    url: 'https://twitter.com/your-profile',
                                    color: 'hover:bg-blue-400'
                                }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 ${social.color} transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-transparent group`}
                                    title={`Follow us on ${social.platform}`}
                                    aria-label={`Follow us on ${social.platform}`}
                                >
                                    <i className={`${social.icon} text-lg group-hover:text-white`}></i>
                                </a>
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
