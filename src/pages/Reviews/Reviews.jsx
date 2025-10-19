import React, { useState, useRef } from 'react';

const Reviews = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [rating, setRating] = useState(0);
    const fileInputRef = useRef(null);

    const reviews = [
        {
            id: 1,
            clientName: "Sarah Johnson",
            projectType: "Residential Interior Painting",
            location: "Los Angeles, CA",
            rating: 5,
            date: "2024-01-15",
            review: "Absolutely thrilled with the painting work! The team was professional, clean, and the attention to detail was exceptional. Our home looks brand new!",
            beforeAfter: true,
            verified: true,
            projectDuration: "5 days",
            budget: "$$$",
            images: [
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            response: {
                companyName: "ProPainters Management",
                date: "2024-01-16",
                message: "Thank you Sarah! We're delighted to hear you're happy with the transformation. It was a pleasure working with you!"
            }
        },
        {
            id: 2,
            clientName: "Mike Chen",
            projectType: "Commercial Office Painting",
            location: "San Francisco, CA",
            rating: 5,
            date: "2024-01-10",
            review: "Our office space looks incredible! The team worked efficiently around our business hours and delivered exceptional quality. Highly recommended for commercial projects!",
            beforeAfter: false,
            verified: true,
            projectDuration: "2 weeks",
            budget: "$$$$",
            images: [],
            response: {
                companyName: "ProPainters Management",
                date: "2024-01-11",
                message: "We appreciate your business Mike! Working with TechCorp Inc. was a great experience."
            }
        },
        {
            id: 3,
            clientName: "Emily Davis",
            projectType: "Exterior House Painting",
            location: "San Diego, CA",
            rating: 5,
            date: "2024-01-08",
            review: "The exterior painting transformed our home completely. The color consultation was spot on and the paint quality is holding up beautifully against the elements.",
            beforeAfter: true,
            verified: true,
            projectDuration: "1 week",
            budget: "$$$",
            images: [
                "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ]
        },
        {
            id: 4,
            clientName: "Robert Wilson",
            projectType: "Kitchen Cabinet Refinishing",
            location: "Orange County, CA",
            rating: 4,
            date: "2024-01-05",
            review: "Great work on our kitchen cabinets! The finish is smooth and professional. The only reason for 4 stars is a slight delay in the project timeline.",
            beforeAfter: true,
            verified: true,
            projectDuration: "4 days",
            budget: "$$",
            images: [
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            response: {
                companyName: "ProPainters Management",
                date: "2024-01-06",
                message: "Thank you for your feedback Robert! We apologize for the timeline delay and have implemented new scheduling processes to prevent this in the future."
            }
        },
        {
            id: 5,
            clientName: "Jennifer Martinez",
            projectType: "Complete Home Painting",
            location: "Beverly Hills, CA",
            rating: 5,
            date: "2023-12-20",
            review: "Outstanding service from start to finish! The team was respectful of our home, the quality is exceptional, and the project manager kept us informed throughout.",
            beforeAfter: false,
            verified: true,
            projectDuration: "3 weeks",
            budget: "$$$$$",
            images: [],
            response: {
                companyName: "ProPainters Management",
                date: "2023-12-21",
                message: "We're honored to have worked on your beautiful home Jennifer! Thank you for trusting us with such an important project."
            }
        },
        {
            id: 6,
            clientName: "David Thompson",
            projectType: "Apartment Complex Painting",
            location: "Downtown LA, CA",
            rating: 5,
            date: "2023-12-15",
            review: "Managed our 20-unit apartment painting project flawlessly. The coordination was impressive and the quality consistent across all units. Will use for all our properties!",
            beforeAfter: false,
            verified: true,
            projectDuration: "4 weeks",
            budget: "$$$$$",
            images: []
        }
    ];

    const filters = [
        { key: 'all', label: 'All Reviews', count: reviews.length },
        { key: '5-stars', label: '5 Stars', count: reviews.filter(r => r.rating === 5).length },
        { key: '4-stars', label: '4 Stars', count: reviews.filter(r => r.rating === 4).length },
        { key: 'residential', label: 'Residential', count: reviews.filter(r => r.projectType.toLowerCase().includes('residential')).length },
        { key: 'commercial', label: 'Commercial', count: reviews.filter(r => r.projectType.toLowerCase().includes('commercial')).length }
    ];

    const filteredReviews = activeFilter === 'all'
        ? reviews
        : activeFilter === '5-stars'
            ? reviews.filter(r => r.rating === 5)
            : activeFilter === '4-stars'
                ? reviews.filter(r => r.rating === 4)
                : reviews.filter(r => r.projectType.toLowerCase().includes(activeFilter));

    const averageRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);
    const totalReviews = reviews.length;
    const ratingDistribution = {
        5: reviews.filter(r => r.rating === 5).length,
        4: reviews.filter(r => r.rating === 4).length,
        3: reviews.filter(r => r.rating === 3).length,
        2: reviews.filter(r => r.rating === 2).length,
        1: reviews.filter(r => r.rating === 1).length
    };

    // File upload handlers
    const handleFileSelect = (event) => {
        const files = Array.from(event.target.files);
        handleFiles(files);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);
        const files = Array.from(event.dataTransfer.files);
        handleFiles(files);
    };

    const handleFiles = (files) => {
        const validFiles = files.filter(file => {
            const isValidType = file.type.startsWith('image/');
            const isValidSize = file.size <= 5 * 1024 * 1024;
            const isValidCount = selectedFiles.length + files.length <= 5;

            if (!isValidType) {
                alert('Please upload only image files (JPEG, PNG, etc.)');
                return false;
            }
            if (!isValidSize) {
                alert('File size must be less than 5MB');
                return false;
            }
            if (!isValidCount) {
                alert('Maximum 5 photos allowed');
                return false;
            }

            return true;
        });

        setSelectedFiles(prev => [...prev, ...validFiles]);
    };

    const removeFile = (index) => {
        setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };

    const handleSubmitReview = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        alert('Thank you for your review! It will be published after verification.');
        setShowReviewForm(false);
        setSelectedFiles([]);
        setRating(0);
    };

    const renderStars = (rating) => {
        return (
            <div className="flex">
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                    >
                        ★
                    </span>
                ))}
            </div>
        );
    };

    const RatingBar = ({ rating, count, total }) => {
        const percentage = (count / total) * 100;
        return (
            <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-8">{rating} star</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
                <span className="text-sm text-gray-600 w-12">{count}</span>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="mt-16 text-3xl md:text-6xl font-bold mb-6">Client <span className='text-yellow-400'>Reviews</span></h1>
                    <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
                        See what our satisfied customers have to say about our painting services
                    </p>
                </div>
            </section>

            {/* Rating Overview Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Rating Summary */}
                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-6 mb-6">
                                <div className="text-center">
                                    <div className="text-5xl font-bold text-gray-800">{averageRating}</div>
                                    <div className="flex justify-center lg:justify-start mt-2">
                                        {renderStars(Number(averageRating))}
                                    </div>
                                    <div className="text-gray-600 mt-2">Average Rating</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-5xl font-bold text-gray-800">{totalReviews}</div>
                                    <div className="text-gray-600 mt-2">Total Reviews</div>
                                </div>
                            </div>

                            <div className="space-y-2 max-w-md mx-auto lg:mx-0">
                                {[5, 4, 3, 2, 1].map(rating => (
                                    <RatingBar
                                        key={rating}
                                        rating={rating}
                                        count={ratingDistribution[rating]}
                                        total={totalReviews}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-2xl p-8 text-center">
                            <div className="text-4xl mb-4">⭐</div>
                            <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
                            <p className="mb-6 text-green-100">
                                Had a great experience with our painting services? We'd love to hear about it!
                            </p>
                            <button
                                onClick={() => setShowReviewForm(true)}
                                className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
                            >
                                Write a Review
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-gray-100 sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Customer Feedback</h2>
                            <p className="text-gray-600">Filter reviews by rating and project type</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {filters.map((filter) => (
                                <button
                                    key={filter.key}
                                    onClick={() => setActiveFilter(filter.key)}
                                    className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${activeFilter === filter.key
                                            ? 'bg-green-600 text-white shadow-lg transform scale-105'
                                            : 'bg-white text-gray-700 hover:bg-gray-200 hover:shadow-md'
                                        }`}
                                >
                                    {filter.label}
                                    <span className={`text-xs px-2 py-1 rounded-full ${activeFilter === filter.key
                                            ? 'bg-green-500'
                                            : 'bg-gray-300'
                                        }`}>
                                        {filter.count}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8">
                        {filteredReviews.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="p-6 md:p-8">
                                    {/* Review Header */}
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                        <div className="flex items-start gap-4 mb-4 md:mb-0">
                                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                {review.clientName.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h3 className="text-xl font-bold text-gray-800">{review.clientName}</h3>
                                                    {review.verified && (
                                                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-semibold">
                                                            ✅ Verified
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-gray-600">{review.projectType}</p>
                                                <p className="text-gray-500 text-sm">{review.location}</p>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <div className="flex items-center gap-2 justify-end mb-2">
                                                {renderStars(review.rating)}
                                            </div>
                                            <div className="text-gray-500 text-sm">
                                                {new Date(review.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Review Content */}
                                    <div className="mb-6">
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            "{review.review}"
                                        </p>
                                    </div>

                                    {/* Project Details */}
                                    <div className="flex flex-wrap gap-4 mb-6">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <span className="text-gray-400">⏱️</span>
                                            {review.projectDuration}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <span className="text-gray-400">💰</span>
                                            {review.budget}
                                        </div>
                                        {review.beforeAfter && (
                                            <div className="flex items-center gap-2 text-sm text-green-600 font-semibold">
                                                <span>📸</span>
                                                Before & After Photos
                                            </div>
                                        )}
                                    </div>

                                    {/* Images */}
                                    {review.images.length > 0 && (
                                        <div className="mb-6">
                                            <div className="flex gap-4 overflow-x-auto pb-4">
                                                {review.images.map((image, index) => (
                                                    <img
                                                        key={index}
                                                        src={image}
                                                        alt={`Project ${index + 1}`}
                                                        className="w-32 h-32 object-cover rounded-lg shadow-md flex-shrink-0"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Company Response */}
                                    {review.response && (
                                        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                                    P
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="font-semibold text-blue-800">{review.response.companyName}</span>
                                                        <span className="text-blue-600 text-sm">
                                                            {new Date(review.response.date).toLocaleDateString('en-US', {
                                                                year: 'numeric',
                                                                month: 'short',
                                                                day: 'numeric'
                                                            })}
                                                        </span>
                                                    </div>
                                                    <p className="text-blue-700">{review.response.message}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredReviews.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">No reviews found</h3>
                            <p className="text-gray-600">Try selecting a different filter category</p>
                        </div>
                    )}

                    {/* Load More Button */}
                    <div className="text-center mt-12">
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                            Load More Reviews
                        </button>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Clients Trust Us</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Consistent quality and exceptional service backed by real client experiences
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl mb-4">🏆</div>
                            <div className="text-3xl font-bold text-gray-800 mb-2">98%</div>
                            <div className="text-gray-600">Satisfaction Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl mb-4">⭐</div>
                            <div className="text-3xl font-bold text-gray-800 mb-2">4.9/5</div>
                            <div className="text-gray-600">Average Rating</div>
                        </div>
                        <div>
                            <div className="text-4xl mb-4">💬</div>
                            <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
                            <div className="text-gray-600">Response Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl mb-4">🔄</div>
                            <div className="text-3xl font-bold text-gray-800 mb-2">85%</div>
                            <div className="text-gray-600">Repeat Clients</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
                        Join hundreds of satisfied customers who trust us with their painting projects
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                            Get Free Estimate
                        </button>
                        <button
                            onClick={() => setShowReviewForm(true)}
                            className="border-2 border-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-lg text-lg transition duration-300"
                        >
                            Write a Review
                        </button>
                    </div>
                </div>
            </section>

            {/* Review Form Modal */}
            {showReviewForm && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-3xl font-bold text-gray-800">Write a Review</h2>
                                <button
                                    onClick={() => {
                                        setShowReviewForm(false);
                                        setSelectedFiles([]);
                                        setRating(0);
                                    }}
                                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition duration-300"
                                >
                                    ✕
                                </button>
                            </div>

                            <form onSubmit={handleSubmitReview} className="space-y-6 text-black">
                                <div>
                                    <label className="block text-gray-700 mb-2 font-semibold">Your Name *</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2 font-semibold">Email Address *</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2 font-semibold">Project Type *</label>
                                    <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500">
                                        <option value="">Select project type</option>
                                        <option>Residential Interior Painting</option>
                                        <option>Residential Exterior Painting</option>
                                        <option>Commercial Painting</option>
                                        <option>Cabinet Refinishing</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2 font-semibold">Your Rating *</label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => handleStarClick(star)}
                                                className={`text-4xl transition duration-300 ${star <= rating ? 'text-yellow-400 scale-110' : 'text-gray-300 hover:text-yellow-300'
                                                    }`}
                                            >
                                                ★
                                            </button>
                                        ))}
                                    </div>
                                    {rating > 0 && (
                                        <p className="text-sm text-gray-600 mt-2">
                                            You rated: {rating} star{rating > 1 ? 's' : ''}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2 font-semibold">Your Review *</label>
                                    <textarea
                                        rows="6"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                                        placeholder="Tell us about your experience with our painting services..."
                                    ></textarea>
                                </div>

                                {/* Fixed Upload Section */}
                                <div>
                                    <label className="block text-gray-700 mb-2 font-semibold">
                                        Upload Photos {selectedFiles.length > 0 && `(${selectedFiles.length}/5)`}
                                    </label>

                                    {/* Hidden File Input */}
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileSelect}
                                        multiple
                                        accept="image/*"
                                        className="hidden"
                                    />

                                    {/* Upload Area */}
                                    <div
                                        onClick={triggerFileInput}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                        className={`
                      border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300
                      ${isDragging
                                                ? 'border-green-500 bg-green-50'
                                                : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
                                            }
                    `}
                                    >
                                        <div className="text-4xl mb-4">📸</div>
                                        <p className="text-gray-600 mb-2 font-medium">
                                            Drag & drop photos here or <span className="text-green-600">click to upload</span>
                                        </p>
                                        <p className="text-gray-500 text-sm">Maximum 5 photos, 5MB each</p>
                                        <p className="text-gray-400 text-xs mt-2">Supports: JPEG, PNG, WebP</p>
                                    </div>

                                    {/* Selected Files Preview */}
                                    {selectedFiles.length > 0 && (
                                        <div className="mt-4">
                                            <h4 className="text-sm font-semibold text-gray-700 mb-3">
                                                Selected Photos ({selectedFiles.length}/5)
                                            </h4>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                {selectedFiles.map((file, index) => (
                                                    <div key={index} className="relative group">
                                                        <img
                                                            src={URL.createObjectURL(file)}
                                                            alt={`Preview ${index + 1}`}
                                                            className="w-full h-24 object-cover rounded-lg border border-gray-200"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                removeFile(index);
                                                            }}
                                                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition duration-200 opacity-0 group-hover:opacity-100"
                                                        >
                                                            ✕
                                                        </button>
                                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-b-lg">
                                                            {file.name.length > 15
                                                                ? `${file.name.substring(0, 12)}...`
                                                                : file.name
                                                            }
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Clear All Button */}
                                            <div className="mt-3 text-right">
                                                <button
                                                    type="button"
                                                    onClick={() => setSelectedFiles([])}
                                                    className="text-red-500 hover:text-red-700 text-sm font-medium transition duration-200"
                                                >
                                                    Remove All Photos
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowReviewForm(false);
                                            setSelectedFiles([]);
                                            setRating(0);
                                        }}
                                        className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg transition duration-300 hover:border-gray-400"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={rating === 0}
                                        className={`flex-1 font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 ${rating === 0
                                                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                                : 'bg-green-600 hover:bg-green-700 text-white'
                                            }`}
                                    >
                                        Submit Review
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Reviews;