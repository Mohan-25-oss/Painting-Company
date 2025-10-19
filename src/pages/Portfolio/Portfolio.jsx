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
        <div className="min-h-screen bg-gray-50 pt-16"> {/* Added pt-16 for header space */}
            {/* Header Section - Reduced padding */}
            <section className="relative bg-gradient-to-br from-blue-800 to-blue-600 text-white py-12 md:py-16"> {/* Reduced py-20 to py-12 md:py-16 */}
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Our <span className='text-yellow-500'>Portfolio</span></h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
                        Explore our completed projects and see how we've transformed spaces
                    </p>
                </div>
            </section>

            {/* Filter Section - Reduced padding */}
            <section className="py-8 bg-white sticky top-0 z-10 shadow-sm"> {/* Reduced py-12 to py-8 */}
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3"> {/* Reduced gap-4 to gap-3 */}
                        {filters.map((filter) => (
                            <button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition duration-300 text-sm md:text-base ${activeFilter === filter.key
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

            {/* Projects Grid - Reduced padding and better spacing */}
            <section className="py-12"> {/* Reduced py-16 to py-12 */}
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Reduced gap-8 to gap-6 */}
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 cursor-pointer group"
                                onClick={() => openProjectModal(project)}
                            >
                                <div className="relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition duration-500"
                                    />
                                    <div className="absolute top-3 right-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${project.category === 'residential'
                                            ? 'bg-green-500 text-white'
                                            : 'bg-blue-500 text-white'
                                            }`}>
                                            {project.type}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                                        <div className="text-white">
                                            <h3 className="text-lg font-bold mb-1">View Project Details</h3>
                                            <p className="text-sm opacity-90">Click to see transformation</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base mb-3 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex justify-between items-center text-xs md:text-sm text-gray-500">
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
                        <div className="text-center py-12"> {/* Reduced py-16 to py-12 */}
                            <div className="text-5xl mb-3">🎨</div> {/* Reduced text-6xl to text-5xl, mb-4 to mb-3 */}
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">No projects found</h3> {/* Reduced mb-4 to mb-3 */}
                            <p className="text-gray-600">Try selecting a different filter category</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Statistics Section - Reduced padding */}
            <section className="py-12 bg-blue-600 text-white"> {/* Reduced py-16 to py-12 */}
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"> {/* Reduced gap-8 to gap-6 */}
                        <div>
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{projects.length}+</div>
                            <div className="text-blue-100 text-sm md:text-base">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">98%</div>
                            <div className="text-blue-100 text-sm md:text-base">Satisfaction Rate</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">15+</div>
                            <div className="text-blue-100 text-sm md:text-base">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">200+</div>
                            <div className="text-blue-100 text-sm md:text-base">Happy Clients</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Reduced padding */}
            <section className="py-12 bg-white"> {/* Reduced py-16 to py-12 */}
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h2>
                    <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                        Let us transform your space with the same quality and care shown in our portfolio
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center"> /* Reduced gap-4 to gap-3 */
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-base transition duration-300 transform hover:scale-105">
                            Get Free Estimate
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-6 rounded-lg text-base transition duration-300">
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
                                className="absolute top-4 right-4 z-10 w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-600 transition duration-300"
                            >
                                ✕
                            </button>

                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-48 md:h-64 lg:h-80 object-cover"
                            />
                        </div>

                        <div className="p-4 md:p-6 lg:p-8">
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${selectedProject.category === 'residential'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-blue-500 text-white'
                                    }`}>
                                    {selectedProject.type}
                                </span>
                                <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-semibold">
                                    {selectedProject.duration}
                                </span>
                                <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-semibold">
                                    {selectedProject.year}
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                                {selectedProject.title}
                            </h2>

                            <p className="text-gray-600 text-base md:text-lg mb-4">
                                {selectedProject.description}
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-gray-50 p-3 rounded-lg">
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

                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">Before & After</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <img
                                                src={selectedProject.beforeImage}
                                                alt="Before"
                                                className="w-full h-20 object-cover rounded"
                                            />
                                            <p className="text-xs text-center mt-1 text-gray-600">Before</p>
                                        </div>
                                        <div>
                                            <img
                                                src={selectedProject.image}
                                                alt="After"
                                                className="w-full h-20 object-cover rounded"
                                            />
                                            <p className="text-xs text-center mt-1 text-gray-600">After</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 text-sm md:text-base">
                                    Start Similar Project
                                </button>
                                <button
                                    onClick={closeModal}
                                    className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-bold py-2 px-4 rounded-lg transition duration-300 text-sm md:text-base"
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