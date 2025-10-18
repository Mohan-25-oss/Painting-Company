import React from "react";

const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            {/* 🎨 Logo Icon */}
            <img
                src="/logo.png" // <-- place your logo image in the public folder
                alt="ColorCraft Painters Logo"
                className="w-10 h-10"
            />

            {/* 🖌️ Company Name */}
            <span className="text-2xl font-bold text-blue-600">
                ColorCraft <span className="text-gray-800">Painters</span>
            </span>
        </div>
    );
};

export default Logo;
