import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    const slides = [
        {
            image:
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            title: "Professional Painting Services",
            subtitle:
                "Transform your space with our expert painting solutions. Quality workmanship guaranteed.",
            badge: "15+ Years Experience",
            gradient: "from-blue-900/80 to-purple-900/60",
        },
        {
            image:
                "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            title: "Premium Quality Finishes",
            subtitle:
                "Exceptional attention to detail with premium materials and skilled craftsmanship.",
            badge: "500+ Projects",
            gradient: "from-green-900/80 to-blue-900/60",
        },
        {
            image:
                "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            title: "Transform Your Space",
            subtitle:
                "From concept to completion, we bring your vision to life with precision and care.",
            badge: "98% Satisfaction",
            gradient: "from-purple-900/80 to-pink-900/60",
        },
        {
            image:
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            title: "Commercial & Residential",
            subtitle:
                "Comprehensive painting solutions for homes, offices, and commercial spaces.",
            badge: "Free Consultation",
            gradient: "from-orange-900/80 to-red-900/60",
        },
    ];

    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) nextSlide();
        }, 6000);
        return () => clearInterval(interval);
    }, [isAnimating]);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 1000);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        setTimeout(() => setIsAnimating(false), 1000);
    };

    const goToSlide = (index) => {
        if (isAnimating || index === current) return;
        setIsAnimating(true);
        setCurrent(index);
        setTimeout(() => setIsAnimating(false), 1000);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white py-16">
            {/* Background Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-out transform ${
                        index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                >
                    <div
                        className="w-full h-full transform transition-transform duration-10000 ease-out"
                        style={{
                            transform: `scale(${index === current ? 1.1 : 1})`,
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
                        }}
                    />
                    <div
                        className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
                    ></div>
                </div>
            ))}

            {/* Main Content Container - Adjusted for full visibility */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8">
                <div className="flex flex-col items-center text-center">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-5 sm:py-2 mb-4 sm:mb-6 border border-white/30 animate-fadeIn">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs sm:text-sm font-semibold text-white">
                            {slides[current].badge}
                        </span>
                    </div>

                    {/* Title - Compact for mobile */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 lg:mb-5 leading-tight">
                        <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fadeInUp">
                            {slides[current].title.split(" ").slice(0, -1).join(" ")}
                        </span>
                        <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-fadeInUp delay-300 mt-1">
                            {slides[current].title.split(" ").slice(-1)}
                        </span>
                    </h1>

                    {/* Subtitle - Shorter on mobile */}
                    <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-4 sm:mb-6 lg:mb-8 max-w-md sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-500 px-2">
                        {window.innerWidth < 640 
                            ? slides[current].subtitle.split('.').slice(0, 1) + '.' 
                            : slides[current].subtitle
                        }
                    </p>

                    {/* Navigation - Compact */}
                    <div className="flex items-center justify-between w-full max-w-xs sm:max-w-sm mx-auto mb-4 sm:mb-6 lg:mb-8 px-2">
                        <button
                            onClick={prevSlide}
                            className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white rounded-xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl font-bold transition-all duration-300 transform hover:scale-110 active:scale-95"
                            aria-label="Previous slide"
                        >
                            ‹
                        </button>
                        
                        {/* Slide Indicators */}
                        <div className="flex space-x-1.5 sm:space-x-2 mx-3 sm:mx-4">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                                        index === current 
                                            ? 'bg-white scale-125' 
                                            : 'bg-white/50 hover:bg-white/70'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white rounded-xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl font-bold transition-all duration-300 transform hover:scale-110 active:scale-95"
                            aria-label="Next slide"
                        >
                            ›
                        </button>
                    </div>

                    {/* Quick Stats - Smaller and compact */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-xs sm:max-w-sm mx-auto animate-fadeInUp delay-700">
                        {[
                            { number: "500+", label: "Projects" },
                            { number: "98%", label: "Satisfaction" },
                            { number: "24/7", label: "Support" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-sm sm:text-base lg:text-lg font-bold text-white mb-0.5">
                                    {stat.number}
                                </div>
                                <div className="text-xs text-gray-300 leading-tight">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons - Compact and responsive */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center items-center w-full max-w-xs sm:max-w-sm mx-auto animate-fadeInUp delay-500">
                        <Link 
                            to="/contact" 
                            className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-1 active:scale-95 text-center flex items-center justify-center"
                        >
                            <span className="flex items-center gap-1.5 sm:gap-2 justify-center whitespace-nowrap">
                                🎨 Free Quote
                            </span>
                        </Link>

                        <Link
                            to="/portfolio"
                            className="group w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-1 active:scale-95 text-center flex items-center justify-center"
                        >
                            <span className="flex items-center gap-1.5 sm:gap-2 justify-center whitespace-nowrap">
                                📸 Portfolio
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Floating Elements - Positioned to avoid edges */}
            <div className="hidden sm:block absolute top-20 left-5 lg:left-10 z-10 animate-float">
                <div className="w-3 h-3 bg-cyan-400 rounded-full opacity-60"></div>
            </div>
            <div className="hidden sm:block absolute top-1/3 right-5 lg:right-10 z-10 animate-float delay-1000">
                <div className="w-4 h-4 bg-blue-400 rounded-full opacity-40"></div>
            </div>
            <div className="hidden sm:block absolute bottom-1/3 left-5 lg:left-10 z-10 animate-float delay-2000">
                <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
            </div>
        </section>
    );
};

export default Hero;