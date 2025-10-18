import React, { useState } from 'react';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "Modern Living Room Transformation",
            category: "residential",
            type: "Interior Painting",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            beforeImage: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Complete living room makeover with modern color scheme and accent wall",
            duration: "3 days",
            client: "Private Homeowner",
            year: "2024"
        },
        {
            id: 2,
            title: "Office Building Exterior",
            category: "commercial",
            type: "Exterior Painting",
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            beforeImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Complete exterior painting for corporate office building with weather-resistant coatings",
            duration: "2 weeks",
            client: "TechCorp Inc.",
            year: "2024"
        },
        {
            id: 3,
            title: "Vintage Home Restoration",
            category: "residential",
            type: "Historic Painting",
            image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            beforeImage: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Historic home restoration with period-appropriate colors and techniques",
            duration: "4 weeks",
            client: "Heritage Home",
            year: "2023"
        },
        {
            id: 4,
            title: "Restaurant Interior",
            category: "commercial",
            type: "Commercial Interior",
            image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            beforeImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Complete interior transformation for upscale restaurant with custom finishes",
            duration: "10 days",
            client: "Bella Vista Restaurant",
            year: "2023"
        },
        {
            id: 5,
            title: "Apartment Complex",
            category: "commercial",
            type: "Multi-Unit Painting",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            beforeImage: "https://images.unsplash.com/photo-1567598475180-6d38e0e5b6d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Large-scale painting project for 50-unit apartment building",
            duration: "6 weeks",
            client: "Metro Apartments",
            year: "2023"
        },
        {
            id: 6,
            title: "Modern Kitchen Makeover",
            category: "residential",
            type: "Cabinet Painting",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            beforeImage: "https://images.unsplash.com/photo-1556909114-4d4d48a7ad9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Kitchen cabinet refinishing and wall painting for modern aesthetic",
            duration: "5 days",
            client: "Private Homeowner",
            year: "2023"
        },
        {
            id: 7,
            title: "Retail Store Front",
            category: "commercial",
            type: "Storefront Painting",
            image: "https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            beforeImage: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Complete storefront painting with brand colors and protective coatings",
            duration: "1 week",
            client: "Urban Fashion Store",
            year: "2022"
        },
        {
            id: 8,
            title: "Bedroom Sanctuary",
            category: "residential",
            type: "Interior Painting",
            image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            beforeImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Bedroom transformation with calming colors and accent features",
            duration: "2 days",
            client: "Private Homeowner",
            year: "2022"
        }
    ];

    const filters = [
        { key: 'all', label: 'All Projects' },
        { key: 'residential', label: 'Residential' },
        { key: 'commercial', label: 'Commercial' }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const [selectedProject, setSelectedProject] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const openProjectModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <section className="relative bg-gradient-to-br from-blue-800 to-blue-600 text-white py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Our <span className='text-yellow-500'>Portfolio</span></h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        Explore our completed projects and see how we've transformed spaces
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-12 bg-white sticky top-0 z-0 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {filters.map((filter) => (
                            <button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${activeFilter === filter.key
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className=" bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 cursor-pointer group"
                                onClick={() => openProjectModal(project)}
                            >
                                <div className="relative ">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="relative w-full aspect-square overflow-hidden rounded-2xl group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${project.category === 'residential'
                                            ? 'bg-green-500 text-white'
                                            : 'bg-blue-500 text-white'
                                            }`}>
                                            {project.type}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-opacity-0 group-hover:bg-opacity-80 transition duration-500 ease-in-out flex items-center justify-center rounded-xl">
                                        <div className="text-center text-white opacity-0 group-hover:opacity-100 transition duration-500 transform translate-y-4 group-hover:translate-y-0">
                                            <div className="bg-white bg-opacity-20 rounded-full p-4 mb-4">
                                                <span className="text-3xl">👁️</span>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">View Project</h3>
                                            <p className="text-sm opacity-90">See how we transformed this space</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex justify-between items-center text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                            {project.duration}
                                        </div>
                                        <div>{project.year}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🎨</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">No projects found</h3>
                            <p className="text-gray-600">Try selecting a different filter category</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">{projects.length}+</div>
                            <div className="text-blue-100">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                            <div className="text-blue-100">Satisfaction Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                            <div className="text-blue-100">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
                            <div className="text-blue-100">Happy Clients</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Start Your Project?</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Let us transform your space with the same quality and care shown in our portfolio
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                            Get Free Estimate
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
                            📞 Contact Us
                        </button>
                    </div>
                </div>
            </section>

            {/* Project Detail Modal */}
            {showModal && selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="relative">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition duration-300"
                            >
                                ✕
                            </button>

                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-64 md:h-96 object-cover"
                            />
                        </div>

                        <div className="p-6 md:p-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${selectedProject.category === 'residential'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-blue-500 text-white'
                                    }`}>
                                    {selectedProject.type}
                                </span>
                                <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-semibold">
                                    {selectedProject.duration}
                                </span>
                                <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-semibold">
                                    {selectedProject.year}
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                {selectedProject.title}
                            </h2>

                            <p className="text-gray-600 text-lg mb-6">
                                {selectedProject.description}
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">Project Details</h4>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Client:</span>
                                            <span className="font-semibold">{selectedProject.client}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Duration:</span>
                                            <span className="font-semibold">{selectedProject.duration}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Category:</span>
                                            <span className="font-semibold">{selectedProject.type}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">Before & After</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <img
                                                src={selectedProject.beforeImage}
                                                alt="Before"
                                                className="w-full h-24 object-cover rounded"
                                            />
                                            <p className="text-xs text-center mt-1 text-gray-600">Before</p>
                                        </div>
                                        <div>
                                            <img
                                                src={selectedProject.image}
                                                alt="After"
                                                className="w-full h-24 object-cover rounded"
                                            />
                                            <p className="text-xs text-center mt-1 text-gray-600">After</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                                    Start Similar Project
                                </button>
                                <button
                                    onClick={closeModal}
                                    className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-bold py-3 px-6 rounded-lg transition duration-300"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;