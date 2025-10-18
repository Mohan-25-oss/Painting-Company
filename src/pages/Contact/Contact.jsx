import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        alert('Thank you for your inquiry! We will contact you soon.')
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        })
    }

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-primary to-secondary">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="text-white">
                        <h2 className="text-4xl text-center font-bold mb-6">Get In Touch</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Ready to transform your space? Contact us for a free estimate and consultation.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                                    📞
                                </div>
                                <div>
                                    <div className="font-semibold">Phone</div>
                                    <div className="opacity-90">+1 (555) 123-4567</div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                                    ✉️
                                </div>
                                <div>
                                    <div className="font-semibold">Email</div>
                                    <div className="opacity-90">info@propainters.com</div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                                    🕒
                                </div>
                                <div>
                                    <div className="font-semibold">Business Hours</div>
                                    <div className="opacity-90">Mon-Fri: 8AM-6PM</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6 text-black">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Service Needed</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="residential">Residential Painting</option>
                                        <option value="commercial">Commercial Painting</option>
                                        <option value="specialty">Specialty Finishes</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-lg transition duration-300"
                            >
                                Get Free Estimate
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact