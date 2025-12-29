import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Hero from '../components/Hero';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send to an API
        setIsSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main className="contact-page">
            <Hero
                headline="Get In Touch"
                highlightedText="With Our Team"
                subheadline="Questions about investing with GMA? We're here to help. Reach out via phone, email, or visit our Lagos office."
                showTrustBadges={false}
                variant="page"
                primaryButtonText="Book a Consultation"
                primaryButtonLink="/book-consultation"
                secondaryButtonText="Call Us Now"
                secondaryButtonLink="tel:+234-1-4480802"
            />

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info Cards */}
                        <div className="contact-info">
                            <div className="contact-card">
                                <div className="contact-card__icon">
                                    <MapPin size={24} />
                                </div>
                                <div className="contact-card__content">
                                    <h3>Visit Our Office</h3>
                                    <p>
                                        Medife House, 5th Floor<br />
                                        58/60 Broad Street, Marina<br />
                                        Lagos, Nigeria
                                    </p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-card__icon">
                                    <Phone size={24} />
                                </div>
                                <div className="contact-card__content">
                                    <h3>Call Us</h3>
                                    <p>
                                        Main Line: +234-1-4480802<br />
                                        Alternate: +234-1-4480803
                                    </p>
                                    <span className="contact-card__note">Response Time: Within 2 hours</span>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-card__icon">
                                    <Mail size={24} />
                                </div>
                                <div className="contact-card__content">
                                    <h3>Email Us</h3>
                                    <p>
                                        General: info@gma.com.ng<br />
                                        New Clients: newclients@gma.com.ng
                                    </p>
                                    <span className="contact-card__note">Response Time: Within 24 hours</span>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-card__icon">
                                    <Clock size={24} />
                                </div>
                                <div className="contact-card__content">
                                    <h3>Office Hours</h3>
                                    <p>
                                        Monday - Friday: 8:00 AM - 5:00 PM WAT<br />
                                        Saturday - Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            {isSubmitted ? (
                                <div className="form-success">
                                    <div className="form-success__icon">✓</div>
                                    <h3>Thank You! Your Message Has Been Sent</h3>
                                    <p>We've received your inquiry and will respond within 24 hours (business days).</p>
                                    <button className="btn btn-primary" onClick={() => setIsSubmitted(false)}>
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <h3>Send Us a Message</h3>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="name">Your Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-input"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-input"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="phone">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-input"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="interest">I'm interested in *</label>
                                        <select
                                            id="interest"
                                            name="interest"
                                            className="form-select"
                                            required
                                            value={formData.interest}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select an option</option>
                                            <option value="platinum">Platinum Account</option>
                                            <option value="diamond">Diamond Account</option>
                                            <option value="gold">Gold Account</option>
                                            <option value="gma-note">GMA Note</option>
                                            <option value="advisory">Financial Advisory Services</option>
                                            <option value="general">General Inquiry</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="form-textarea"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-lg">
                                        <Send size={18} />
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>How to Find Us</h2>
                        <p>Our office is located in the heart of Lagos Island's financial district.</p>
                    </div>
                    <div className="map-container">
                        <div className="map-placeholder">
                            <MapPin size={48} />
                            <p>Medife House, 5th Floor<br />58/60 Broad Street, Marina, Lagos</p>
                            <a
                                href="https://maps.google.com/?q=Broad+Street+Marina+Lagos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                            >
                                Open in Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
