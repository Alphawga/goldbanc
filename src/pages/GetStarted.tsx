import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Gem, Diamond, Award, BarChart3, Shield, Lock } from 'lucide-react';
import './GetStarted.css';

const accountTypes = [
    { id: 'platinum', icon: Gem, name: 'Platinum Account', description: 'Comprehensive wealth management', color: '#9333ea' },
    { id: 'diamond', icon: Diamond, name: 'Diamond Account', description: 'Active stock management', color: '#3b82f6' },
    { id: 'gold', icon: Award, name: 'Gold Account', description: 'Portfolio recovery & monitoring', color: '#D4AF37' },
    { id: 'gma-note', icon: BarChart3, name: 'GMA Note', description: 'Guaranteed income', color: '#10b981' },
    { id: 'not-sure', icon: Shield, name: 'Not Sure Yet', description: 'I need guidance', color: '#6B7280' },
];

const investmentRanges = [
    '₦500,000 - ₦1,999,999',
    '₦2,000,000 - ₦4,999,999',
    '₦5,000,000 - ₦9,999,999',
    '₦10,000,000+',
    'Prefer not to say',
];

const goals = [
    'Preserve my capital against inflation',
    'Generate steady income',
    'Grow wealth for retirement',
    'Recover dormant dividends/shares',
    'Diversify my portfolio',
    'Beat the stock market',
];

export default function GetStarted() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        accountType: '',
        investmentRange: '',
        goals: [] as string[],
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const toggleGoal = (goal: string) => {
        setFormData(prev => ({
            ...prev,
            goals: prev.goals.includes(goal)
                ? prev.goals.filter(g => g !== goal)
                : [...prev.goals, goal],
        }));
    };

    if (isSubmitted) {
        return (
            <main className="get-started-page">
                <div className="get-started-success">
                    <div className="get-started-success__icon">✓</div>
                    <h1>Thank You! We've Received Your Information</h1>
                    <p className="get-started-success__subtitle">
                        A wealth manager will contact you within 24 hours.
                    </p>

                    <div className="get-started-success__next">
                        <h3>What's Next?</h3>
                        <ul>
                            <li>📧 Check your email for confirmation + recommendation report</li>
                            <li>📞 Expect a call within 24 hours to schedule consultation</li>
                            <li>💬 Prepare questions about your investment goals</li>
                        </ul>
                    </div>

                    <div className="get-started-success__actions">
                        <Link to="/book-consultation" className="btn btn-primary btn-lg">
                            Book Consultation Now
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
        <main className="get-started-page">
            <div className="get-started-container">
                <div className="get-started-header">
                    <h1>Start Growing Your Wealth in <span className="text-gradient">60 Seconds</span></h1>
                    <p>
                        Tell us about your investment goals. No commitment, no credit card required.
                        A wealth manager will contact you within 24 hours.
                    </p>
                </div>

                <form className="get-started-form" onSubmit={handleSubmit}>
                    {/* Personal Info */}
                    <div className="form-section">
                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Your Full Name *</label>
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
                                <label className="form-label" htmlFor="email">Email Address *</label>
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
                                <label className="form-label" htmlFor="phone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="form-input"
                                    required
                                    placeholder="+234"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Account Type Selection */}
                    <div className="form-section">
                        <label className="form-label">I'm interested in: *</label>
                        <div className="account-type-grid">
                            {accountTypes.map((type) => (
                                <button
                                    key={type.id}
                                    type="button"
                                    className={`account-type-card ${formData.accountType === type.id ? 'account-type-card--selected' : ''}`}
                                    onClick={() => setFormData({ ...formData, accountType: type.id })}
                                    style={{ '--accent-color': type.color } as React.CSSProperties}
                                >
                                    <type.icon size={24} />
                                    <span className="account-type-card__name">{type.name}</span>
                                    <span className="account-type-card__desc">{type.description}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Investment Range */}
                    <div className="form-section">
                        <label className="form-label" htmlFor="investmentRange">Investment Amount Range (Optional)</label>
                        <select
                            id="investmentRange"
                            className="form-select"
                            value={formData.investmentRange}
                            onChange={(e) => setFormData({ ...formData, investmentRange: e.target.value })}
                        >
                            <option value="">Select a range (optional)</option>
                            {investmentRanges.map((range) => (
                                <option key={range} value={range}>{range}</option>
                            ))}
                        </select>
                    </div>

                    {/* Goals */}
                    <div className="form-section">
                        <label className="form-label">What's your primary investment goal? (Select all that apply)</label>
                        <div className="goals-grid">
                            {goals.map((goal) => (
                                <button
                                    key={goal}
                                    type="button"
                                    className={`goal-chip ${formData.goals.includes(goal) ? 'goal-chip--selected' : ''}`}
                                    onClick={() => toggleGoal(goal)}
                                >
                                    {goal}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn btn-primary btn-lg get-started-submit">
                        Get My Personalized Recommendation
                        <ArrowRight size={20} />
                    </button>

                    <p className="get-started-privacy">
                        <Lock size={14} />
                        Your information is secure and will never be shared.
                        <Link to="/privacy">Read our Privacy Policy</Link>
                    </p>
                </form>
            </div>
        </main>
    );
}
