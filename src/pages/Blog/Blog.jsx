import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { key: 'all', label: 'All Articles' },
        { key: 'tips', label: 'Painting Tips' },
        { key: 'diy', label: 'DIY Guides' },
        { key: 'trends', label: 'Color Trends' },
        { key: 'maintenance', label: 'Maintenance' },
        { key: 'commercial', label: 'Commercial Painting' }
    ];

    const blogPosts = [
        {
            id: 1,
            title: "Top 10 Painting Mistakes to Avoid in 2024",
            excerpt: "Learn about the most common painting mistakes homeowners make and how to avoid them for a professional finish.",
            category: 'tips',
            image: "https://constructzilla.vercel.app/images/our-work/pic1.jpg",
            author: "John Paint master",
            date: "2024-01-15",
            readTime: "5 min read",
            featured: true
        },
        {
            id: 2,
            title: "How to Choose the Perfect Color Palette for Your Home",
            excerpt: "Discover expert tips on selecting colors that complement your space and reflect your personal style.",
            category: 'trends',
            image: "https://constructzilla.vercel.app/images/blog/latest-blog/pic1.jpg",
            author: "Sarah ColorExpert",
            date: "2024-01-12",
            readTime: "7 min read",
            featured: true
        },
        {
            id: 3,
            title: "DIY Guide: Painting Your Kitchen Cabinets Like a Pro",
            excerpt: "Step-by-step guide to transforming your kitchen cabinets with professional-looking results.",
            category: 'diy',
            image: "https://themes.webdevia.com/painting-plastering-decorating-wordpress-theme/wp-content/uploads/2015/12/interior-377x204.jpg",
            author: "Mike DIYPro",
            date: "2024-01-10",
            readTime: "10 min read",
            featured: false
        },
        {
            id: 4,
            title: "2024 Color Trends: What's Hot in Interior Design",
            excerpt: "Explore the latest color trends that are dominating interior design this year.",
            category: 'trends',
            image: "https://themes.thememasters.club/exqute/wp-content/uploads/sites/18/2018/12/project9-900x600.jpg",
            author: "Lisa DesignGuru",
            date: "2024-01-08",
            readTime: "6 min read",
            featured: false
        },
        {
            id: 5,
            title: "Commercial Painting: Preparing Your Business for a Fresh Look",
            excerpt: "Essential considerations for commercial painting projects to minimize downtime and maximize impact.",
            category: 'commercial',
            image: "https://themes.thememasters.club/exqute/wp-content/uploads/sites/18/2018/12/post8-900x600.jpg",
            author: "David BusinessPro",
            date: "2024-01-05",
            readTime: "8 min read",
            featured: false
        },
        {
            id: 6,
            title: "How to Maintain Your Home's Exterior Paint Job",
            excerpt: "Keep your exterior paint looking fresh for years with these maintenance tips and tricks.",
            category: 'maintenance',
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            author: "Robert MaintenancePro",
            date: "2024-01-03",
            readTime: "4 min read",
            featured: false
        },
        {
            id: 7,
            title: "The Psychology of Color: How Paint Colors Affect Mood",
            excerpt: "Understand how different colors can influence emotions and create desired atmospheres in your space.",
            category: 'trends',
            image: "https://themes.thememasters.club/exqute/wp-content/uploads/sites/18/2018/12/post11-900x600.jpg",
            author: "Dr. Emily Psychology",
            date: "2024-01-01",
            readTime: "9 min read",
            featured: false
        },
        {
            id: 8,
            title: "Eco-Friendly Painting: Sustainable Options for Your Home",
            excerpt: "Discover environmentally friendly paint options and techniques for a greener home improvement.",
            category: 'tips',
            image: "https://themes.thememasters.club/exqute/wp-content/uploads/sites/18/2018/12/post9-900x600.jpg",
            author: "Green Painting Team",
            date: "2023-12-28",
            readTime: "6 min read",
            featured: false
        },
        {
            id: 9,
            title: "Professional Wall Texture Techniques for Modern Homes",
            excerpt: "Learn about different wall texture techniques that can add depth and character to your interiors.",
            category: 'tips',
            image: "https://themes.thememasters.club/exqute/wp-content/uploads/sites/18/2018/12/post10-900x600.jpg",
            author: "Texture Master",
            date: "2023-12-25",
            readTime: "7 min read",
            featured: false
        },
        {
            id: 10,
            title: "Exterior Painting: Weather Considerations and Best Practices",
            excerpt: "Essential guide to planning exterior painting projects around weather conditions for optimal results.",
            category: 'maintenance',
            image: "https://themes.thememasters.club/exqute/wp-content/uploads/sites/18/2018/12/project7-900x600.jpg",
            author: "Weather Pro",
            date: "2023-12-20",
            readTime: "5 min read",
            featured: false
        }
    ];

    const featuredPosts = blogPosts.filter(post => post.featured);
    const filteredPosts = activeCategory === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === activeCategory);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getCategoryColor = (category) => {
        const colors = {
            tips: 'bg-green-100 text-green-800',
            diy: 'bg-blue-100 text-blue-800',
            trends: 'bg-purple-100 text-purple-800',
            maintenance: 'bg-orange-100 text-orange-800',
            commercial: 'bg-indigo-100 text-indigo-800'
        };
        return colors[category] || 'bg-gray-100 text-gray-800';
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-16">
            {/* Header Section */}
            <section className="relative bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16 md:py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8">
                        Painting <span className="text-yellow-500">Blog</span>
                    </h1>
                    <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                        Expert tips, trends, and insights from professional painters
                    </p>
                </div>
            </section>

            {/* Featured Posts - Larger Images */}
            {featuredPosts.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-12 text-center">
                            Featured Articles
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-12">
                            {featuredPosts.map((post) => (
                                <div key={post.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                                    <div className="relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-80 md:h-96 lg:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                        <div className="absolute top-6 left-6">
                                            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(post.category)}`}>
                                                {categories.find(cat => cat.key === post.category)?.label}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-base text-gray-500 mb-6">
                                            <div className="flex items-center space-x-6">
                                                <span className="font-semibold">{post.author}</span>
                                                <span>{formatDate(post.date)}</span>
                                            </div>
                                            <span className="font-medium">{post.readTime}</span>
                                        </div>
                                        <Link
                                            to={`/blog/${post.id}`}
                                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold text-lg transition duration-300 group"
                                        >
                                            Read Full Article
                                            <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <div className="lg:w-1/4">
                            {/* Categories Filter */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 sticky top-24">
                                <h3 className="text-xl font-bold text-gray-800 mb-6">Categories</h3>
                                <div className="space-y-3">
                                    {categories.map((category) => (
                                        <button
                                            key={category.key}
                                            onClick={() => setActiveCategory(category.key)}
                                            className={`block w-full text-left px-6 py-4 rounded-xl transition-all duration-300 text-lg font-medium ${
                                                activeCategory === category.key
                                                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                                                    : 'text-gray-700 hover:bg-gray-100 hover:scale-105'
                                            }`}
                                        >
                                            {category.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter Signup */}
                            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
                                <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                                <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                                    Get the latest painting tips and trends delivered to your inbox.
                                </p>
                                <div className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg"
                                    />
                                    <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-xl transition duration-300 transform hover:scale-105 text-lg">
                                        Subscribe Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Blog Posts - Larger Images */}
                        <div className="lg:w-3/4">
                            <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
                                {filteredPosts.map((post) => (
                                    <article key={post.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                                        <div className="relative">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 hover:scale-105"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className={`px-3 py-2 rounded-full text-sm font-semibold ${getCategoryColor(post.category)}`}>
                                                    {categories.find(cat => cat.key === post.category)?.label}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6 md:p-8">
                                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 text-base mb-6 leading-relaxed line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                                                <div className="flex items-center space-x-4">
                                                    <span className="font-semibold">{post.author}</span>
                                                    <span>{formatDate(post.date)}</span>
                                                </div>
                                                <span className="font-medium">{post.readTime}</span>
                                            </div>
                                            <Link
                                                to={`/blog/${post.id}`}
                                                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-base transition duration-300 group"
                                            >
                                                Read More
                                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Empty State */}
                            {filteredPosts.length === 0 && (
                                <div className="text-center py-16">
                                    <div className="text-6xl mb-6">🎨</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">No articles found</h3>
                                    <p className="text-gray-600 text-lg">Try selecting a different category</p>
                                </div>
                            )}

                            {/* Load More Button */}
                            <div className="text-center mt-12">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-xl transition duration-300 transform hover:scale-105 text-lg shadow-xl">
                                    Load More Articles
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Our expert team is ready to bring your vision to life with quality craftsmanship and attention to detail.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 text-lg shadow-xl">
                            Get Free Estimate
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-xl transition duration-300 text-lg">
                            📞 Call Us Today
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;