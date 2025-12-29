import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import './ProductPage.css';

const features = [
    {
        title: 'Portfolio Recovery Services',
        description: 'We help recover your dormant assets:',
        items: [
            'Recovery of lost/unclaimed dividend warrants',
            'Recovery of missing share certificates',
            'Tracing of dormant shareholdings',
            'Consolidation of scattered investments',
        ],
    },
    {
        title: 'Custodial Monitoring',
        description: 'Professional oversight of your existing portfolio:',
        items: [
            'Regular portfolio valuation',
            'Corporate action monitoring',
            'Dividend collection and reinvestment',
            'Semi-annual portfolio reviews',
        ],
    },
];

const faqs = [
    {
        question: 'How do you recover lost dividends?',
        answer: 'Our team works directly with registrars, the SEC, and companies to trace unclaimed dividends and shares. We handle all documentation and verification processes on your behalf, typically recovering funds within 3-6 months.',
    },
    {
        question: 'What if my share certificates are missing?',
        answer: 'We facilitate the replacement of missing share certificates through the proper legal and regulatory channels. This includes liaising with registrars, placing required newspaper publications, and ensuring your ownership is properly documented.',
    },
];

export default function GoldAccount() {
    return (
        <main className="product-page product-page--gold">
            <section className="product-hero">
                <div className="product-hero__bg">
                    <div className="product-hero__glow"></div>
                </div>
                <div className="container">
                    <div className="product-hero__content">
                        <div className="product-hero__badge">
                            <Award size={20} />
                            <span>Gold Account</span>
                        </div>
                        <h1>Portfolio Recovery & Monitoring for <span className="text-gradient">Legacy Investors</span></h1>
                        <p className="product-hero__subtitle">
                            Professional custodial services for investors with dormant assets.
                            We recover lost dividends, missing certificates, and protect your portfolio value.
                        </p>
                        <div className="product-hero__stats">
                            <div className="product-hero__stat">
                                <span className="product-hero__stat-value">₦500K</span>
                                <span className="product-hero__stat-label">Minimum Investment</span>
                            </div>
                            <div className="product-hero__stat">
                                <span className="product-hero__stat-value">Recovery</span>
                                <span className="product-hero__stat-label">Based Returns</span>
                            </div>
                            <div className="product-hero__stat">
                                <span className="product-hero__stat-value">₦150K</span>
                                <span className="product-hero__stat-label">Annual Flat Fee</span>
                            </div>
                        </div>
                        <Link to="/get-started" className="btn btn-primary btn-lg">
                            Secure Your Gold Account
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="product-overview">
                        <div className="product-overview__main">
                            <h2>What is the Gold Account?</h2>
                            <p>
                                The Gold Account is designed for investors with legacy holdings who need professional oversight.
                                If you've lost track of investments or have unclaimed dividends, this is the solution for you.
                            </p>
                            <p>
                                Our team specializes in recovering dormant assets, consolidating scattered investments,
                                and providing ongoing custodial monitoring to protect your portfolio value.
                            </p>
                        </div>
                        <div className="product-overview__ideal">
                            <h3>Who It's For</h3>
                            <ul>
                                <li><CheckCircle size={18} /> Investors with dormant or forgotten shares</li>
                                <li><CheckCircle size={18} /> Those with unclaimed dividends</li>
                                <li><CheckCircle size={18} /> Heirs inheriting investment portfolios</li>
                                <li><CheckCircle size={18} /> Investors needing portfolio consolidation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Recover & Protect Your <span className="text-gradient">Legacy Assets</span></h2>
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
                    <h2>Reclaim Your Dormant Wealth</h2>
                    <p>Many investors have lost millions in unclaimed dividends. Let us help you recover what's rightfully yours.</p>
                    <div className="cta-buttons">
                        <Link to="/get-started" className="btn btn-primary btn-lg">
                            Secure Your Gold Account
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
