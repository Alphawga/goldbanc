import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Video, Phone, Users, CheckCircle } from 'lucide-react';
import './BookConsultation.css';

const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
];

const consultationMethods = [
    { id: 'phone', icon: Phone, label: 'Phone Call', description: "We'll call you" },
    { id: 'video', icon: Video, label: 'Video Call', description: 'Zoom/Google Meet' },
    { id: 'inperson', icon: Users, label: 'In-Person', description: 'Lagos office' },
];

export default function BookConsultation() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        method: '',
        name: '',
        email: '',
        phone: '',
        status: '',
        topics: [] as string[],
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    // Generate next 14 days
    const getAvailableDates = () => {
        const dates = [];
        const today = new Date();
        for (let i = 1; i <= 14; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            // Skip weekends
            if (date.getDay() !== 0 && date.getDay() !== 6) {
                dates.push(date);
            }
        }
        return dates.slice(0, 10);
    };

    if (isSubmitted) {
        return (
            <main className="book-consultation-page">
                <div className="consultation-success">
                    <div className="consultation-success__icon">✓</div>
                    <h1>Your Consultation Is Confirmed!</h1>

                    <div className="consultation-success__details">
                        <div className="consultation-detail">
                            <Calendar size={20} />
                            <span>{formData.date}</span>
                        </div>
                        <div className="consultation-detail">
                            <Clock size={20} />
                            <span>{formData.time} WAT</span>
                        </div>
                        <div className="consultation-detail">
                            {formData.method === 'phone' && <Phone size={20} />}
                            {formData.method === 'video' && <Video size={20} />}
                            {formData.method === 'inperson' && <Users size={20} />}
                            <span>{consultationMethods.find(m => m.id === formData.method)?.label}</span>
                        </div>
                    </div>

                    <div className="consultation-success__next">
                        <h3>What Happens Next:</h3>
                        <ul>
                            <li><CheckCircle size={16} /> Confirmation email sent to {formData.email}</li>
                            <li><CheckCircle size={16} /> Calendar invite attached (.ics file)</li>
                            <li><CheckCircle size={16} /> SMS reminder 1 hour before</li>
                            <li><CheckCircle size={16} /> Your wealth manager will reach out at scheduled time</li>
                        </ul>
                    </div>

                    <div className="consultation-success__actions">
                        <Link to="/get-started" className="btn btn-primary btn-lg">
                            Start Application Now
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/" className="btn btn-outline">
                            Return to Homepage
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="book-consultation-page">
            <div className="consultation-container">
                <div className="consultation-header">
                    <h1>Schedule Your Complimentary <span className="text-gradient">Wealth Consultation</span></h1>
                    <p>
                        20-minute call with a licensed wealth manager to discuss your financial goals
                        and design your personalized investment strategy.
                    </p>
                </div>

                <form className="consultation-form" onSubmit={handleSubmit}>
                    {/* Date Selection */}
                    <div className="form-section">
                        <label className="form-label">Select Your Preferred Date *</label>
                        <div className="date-grid">
                            {getAvailableDates().map((date) => {
                                const dateStr = date.toLocaleDateString('en-US', {
                                    weekday: 'short',
                                    month: 'short',
                                    day: 'numeric'
                                });
                                return (
                                    <button
                                        key={dateStr}
                                        type="button"
                                        className={`date-card ${formData.date === dateStr ? 'date-card--selected' : ''}`}
                                        onClick={() => setFormData({ ...formData, date: dateStr })}
                                    >
                                        <span className="date-card__day">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                                        <span className="date-card__date">{date.getDate()}</span>
                                        <span className="date-card__month">{date.toLocaleDateString('en-US', { month: 'short' })}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Time Selection */}
                    <div className="form-section">
                        <label className="form-label">Select Time (WAT) *</label>
                        <div className="time-grid">
                            {timeSlots.map((time) => (
                                <button
                                    key={time}
                                    type="button"
                                    className={`time-slot ${formData.time === time ? 'time-slot--selected' : ''}`}
                                    onClick={() => setFormData({ ...formData, time })}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Method Selection */}
                    <div className="form-section">
                        <label className="form-label">Preferred Consultation Method *</label>
                        <div className="method-grid">
                            {consultationMethods.map((method) => (
                                <button
                                    key={method.id}
                                    type="button"
                                    className={`method-card ${formData.method === method.id ? 'method-card--selected' : ''}`}
                                    onClick={() => setFormData({ ...formData, method: method.id })}
                                >
                                    <method.icon size={24} />
                                    <span className="method-card__label">{method.label}</span>
                                    <span className="method-card__desc">{method.description}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="form-section">
                        <h3 className="form-section__title">Your Contact Information</h3>
                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Full Name *</label>
                            <input
                                type="text"
                                id="name"
                                className="form-input"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-input"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">Phone *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="form-input"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-lg consultation-submit"
                        disabled={!formData.date || !formData.time || !formData.method}
                    >
                        Confirm My Consultation
                        <ArrowRight size={20} />
                    </button>
                </form>
            </div>
        </main>
    );
}
