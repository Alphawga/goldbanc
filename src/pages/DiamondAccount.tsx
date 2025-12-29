import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Diamond } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import './ProductPage.css';

const features = [
    {
        title: 'Professional Stock Management',
        description: 'Expert handling of your equity portfolio:',
        items: [
            'Full management of existing stock holdings',
            'Strategic new equity investments based on market analysis',
            'Real-time portfolio monitoring',
            'Monthly performance reports',
        ],
    },
    {
        title: 'Market Timing Expertise',
        description: 'Our team leverages 25+ years of market experience:',
        items: [
            'Entry and exit timing optimization',
            'Sector rotation strategies',
            'Risk-adjusted portfolio balancing',
            'Dividend reinvestment strategies',
        ],
    },
];

const faqs = [
    {
        question: 'What types of stocks do you invest in?',
        answer: 'We invest primarily in Nigerian Stock Exchange (NSE) listed equities, focusing on blue-chip stocks, growth companies, and dividend-paying securities. Portfolio allocation is customized based on your risk tolerance and investment goals.',
    },
    {
        question: 'How often will I receive updates on my portfolio?',
        answer: 'Diamond Account clients receive quarterly performance reports with on-demand email/phone access and semi-annual strategy reviews. You also have 24/7 access to our online portal for real-time portfolio viewing.',
    },
];

export default function DiamondAccount() {
    return (
        <main className="product-page product-page--diamond">
            <section className="product-hero">
                <div className="product-hero__bg">
                    <div className="product-hero__glow"></div>
                </div>
                <div className="container">
                    <div className="product-hero__content">
                        <div className="product-hero__badge">
                            <Diamond size={20} />
                            <span>Diamond Account</span>
                        </div>
                        <h1>Active Stock Portfolio Management for <span className="text-gradient">Growth-Focused Investors</span></h1>
                        <p className="product-hero__subtitle">
                            Professional management of your equity portfolio with strategic market timing
                            and real-time monitoring. For investors ready to capitalize on market opportunities.
                        </p>
                        <div className="product-hero__stats">
                            <div className="product-hero__stat">
                                <span className="product-hero__stat-value">₦2M</span>
                                <span className="product-hero__stat-label">Minimum Investment</span>
                            </div>
                            <div className="product-hero__stat">
                                <span className="product-hero__stat-value">18-24%</span>
                                <span className="product-hero__stat-label">Historical Returns*</span>
                            </div>
                            <div className="product-hero__stat">
                                <span className="product-hero__stat-value">1.5%+</span>
                                <span className="product-hero__stat-label">Annual Fee</span>
                            </div>
                        </div>
                        <Link to="/get-started" className="btn btn-primary btn-lg">
                            Unlock Diamond Access
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="product-overview">
                        <div className="product-overview__main">
                            <h2>What is the Diamond Account?</h2>
                            <p>
                                The Diamond Account is designed for investors who want expert stock market navigation
                                without daily involvement. Perfect for those seeking growth beyond fixed-income instruments.
                            </p>
                            <p>
                                Our team actively manages your equity portfolio, making strategic buy and sell decisions
                                based on deep market analysis and 25+ years of Nigerian stock market expertise.
                            </p>
                        </div>
                        <div className="product-overview__ideal">
                            <h3>Who It's For</h3>
                            <ul>
                                <li><CheckCircle size={18} /> Investors with ₦2 million+ to invest in equities</li>
                                <li><CheckCircle size={18} /> Those seeking higher returns through active management</li>
                                <li><CheckCircle size={18} /> Investors comfortable with market volatility</li>
                                <li><CheckCircle size={18} /> Those who prefer expert oversight over DIY trading</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Expert Stock Management, <span className="text-gradient">Maximum Growth</span></h2>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                                <ul>
                                    {feature.items.map((item, i) => (
                                        <li key={i}><CheckCircle size={16} /> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Frequently Asked <span className="text-gradient">Questions</span></h2>
                    </div>
                    <div className="faq-container">
                        <FAQAccordion items={faqs} />
                    </div>
                </div>
            </section>

            <section className="section section-cta-product">
                <div className="container text-center">
                    <h2>Ready to Grow Your Wealth?</h2>
                    <p>Join investors who trust our market expertise for superior equity returns.</p>
                    <div className="cta-buttons">
                        <Link to="/get-started" className="btn btn-primary btn-lg">
                            Unlock Diamond Access
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/book-consultation" className="btn btn-secondary btn-lg">
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
