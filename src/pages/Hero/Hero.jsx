import React, { useState, useEffect } from "react";

const Hero = () => {
    // 🖼️ Enhanced Slide Data with better images and content
    const slides = [
        {
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            title: "Professional Painting Services",
            subtitle: "Transform your space with our expert painting solutions. Quality workmanship guaranteed.",
            badge: "15+ Years Experience",
            gradient: "from-blue-900/80 to-purple-900/60"
        },
        {
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            title: "Premium Quality Finishes",
            subtitle: "Exceptional attention to detail with premium materials and skilled craftsmanship.",
            badge: "500+ Projects",
            gradient: "from-green-900/80 to-blue-900/60"
        },
        {
            image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            title: "Transform Your Space",
            subtitle: "From concept to completion, we bring your vision to life with precision and care.",
            badge: "98% Satisfaction",
            gradient: "from-purple-900/80 to-pink-900/60"
        },
        {
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            title: "Commercial & Residential",
            subtitle: "Comprehensive painting solutions for homes, offices, and commercial spaces.",
            badge: "Free Consultation",
            gradient: "from-orange-900/80 to-red-900/60"
        }
    ];

    // 🧠 State management
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // ⏱️ Auto Slide with smooth transitions
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) {
                nextSlide();
            }
        }, 6000);
        return () => clearInterval(interval);
    }, [isAnimating]);

    // 👉 Next / Previous handlers with animation
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

    // Direct slide selection
    const goToSlide = (index) => {
        if (isAnimating || index === current) return;
        setIsAnimating(true);
        setCurrent(index);
        setTimeout(() => setIsAnimating(false), 1000);
    };

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
            {/* 🔁 Enhanced Slides with Parallax Effect */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-out transform ${
                        index === current 
                            ? "opacity-100 scale-100" 
                            : "opacity-0 scale-105"
                    }`}
                >
                    {/* Background Image with Parallax */}
                    <div 
                        className="w-full h-full transform transition-transform duration-10000 ease-out"
                        style={{
                            transform: `scale(${index === current ? 1.1 : 1})`,
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundAttachment: 'fixed'
                        }}
                    />
                    
                    {/* Dynamic Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}></div>
                    
                    {/* Additional Overlay for Better Text Readability */}
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
            ))}

            {/* ✨ Enhanced Hero Content */}
            <div className="relative z-10 text-center max-w-4xl px-6 mt-80">
                {/* Animated Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30 animate-fadeIn">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-white">
                        {slides[current].badge}
                    </span>
                </div>

                {/* Enhanced Title with Gradient Text */}
                <h1 className="text-2xl md:text-7xl lg:text-7xl font-black mb-6 leading-tight animate-fadeInUp">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                        {slides[current].title.split(' ').slice(0, -1).join(' ')}
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {slides[current].title.split(' ').slice(-1)}
                    </span>
                </h1>

                {/* Enhanced Subtitle */}
                <p className="text-m md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp delay-300">
                    {slides[current].subtitle}
                </p>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp delay-500">
                    <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold px-10 py-5 rounded-2xl text-lg shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                        <span className="relative z-10 flex items-center gap-3">
                            🎨 Get Free Quote
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    
                    <button className="group relative bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                        <span className="flex items-center gap-3">
                            📸 View Portfolio
                        </span>
                    </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fadeInUp delay-700">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">500+</div>
                        <div className="text-sm text-gray-300">Projects Done</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">98%</div>
                        <div className="text-sm text-gray-300">Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">24/7</div>
                        <div className="text-sm text-gray-300">Support</div>
                    </div>
                </div>
            </div>

            {/* 🎯 Enhanced Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between px-8 z-20">
                <button
                    onClick={prevSlide}
                    className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 hover:border-white/40 text-white rounded-2xl w-14 h-14 flex items-center justify-center text-2xl font-bold transition-all duration-300 transform hover:scale-110 hover:-translate-x-1"
                >
                    ‹
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-300"></div>
                </button>
                <button
                    onClick={nextSlide}
                    className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 hover:border-white/40 text-white rounded-2xl w-14 h-14 flex items-center justify-center text-2xl font-bold transition-all duration-300 transform hover:scale-110 hover:translate-x-1"
                >
                    ›
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-300"></div>
                </button>
            </div>

            {/* 🔘 Enhanced Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`group relative transition-all duration-500 ${
                            current === i ? "w-12" : "w-3 hover:w-6"
                        }`}
                    >
                        <div
                            className={`h-1 rounded-full transition-all duration-500 ${
                                current === i
                                    ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                                    : "bg-white/50 group-hover:bg-white/70"
                            }`}
                        ></div>
                        {current === i && (
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                                {i + 1}/{slides.length}
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* 📱 Scroll Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>

            {/* ✨ Floating Elements */}
            <div className="absolute top-20 left-10 z-10 animate-float">
                <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
            </div>
            <div className="absolute top-40 right-20 z-10 animate-float delay-1000">
                <div className="w-6 h-6 bg-blue-400 rounded-full opacity-40"></div>
            </div>
            <div className="absolute bottom-40 left-20 z-10 animate-float delay-2000">
                <div className="w-3 h-3 bg-purple-400 rounded-full opacity-60"></div>
            </div>
        </section>
    );
};

export default Hero;