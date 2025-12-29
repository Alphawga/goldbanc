import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Gem } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import './ProductPage.css';

const features = [
    {
        title: 'Diversified Portfolio Management',
        description: 'Your wealth manager constructs a customized portfolio across multiple asset classes:',
        items: [
            'Nigerian and African equities (30-50% typical allocation)',
            'Corporate and government bonds (20-30%)',
            'Real estate investments and REITs (10-20%)',
            'Treasury bills and money market instruments (10-20%)',
            'Unit trust funds and alternative investments (10-20%)',
        ],
    },
    {
        title: 'Dedicated Wealth Manager',
        description: 'You\'re not a number in a system. Your dedicated relationship manager:',
        items: [
            'Conducts monthly portfolio performance reviews',
            'Proactively identifies market opportunities',
            'Adjusts strategy based on changing market conditions',
            'Available for calls and meetings whenever you need',
            'Coordinates with your tax advisors and estate planners',
        ],
    },
    {
        title: 'Quarterly Formal Reviews',
        description: 'Every quarter, you receive:',
        items: [
            'Comprehensive performance report with detailed breakdown',
            'Market outlook and strategy adjustments',
            'Fee transparency breakdown with no surprises',
            'Live Q&A session with your wealth manager',
        ],
    },
    {
        title: 'Priority Access to Opportunities',
        description: 'Platinum clients receive first-look access to:',
        items: [
            'IPOs and private placements with reserved allocations',
            'High-yield corporate bonds not available to retail investors',
            'Off-market real estate deals and institutional-grade investments',
            'Hedge fund access and structured products',
        ],
    },
];

const faqs = [
    {
        question: 'Can I still make some investment decisions, or do you have full control?',
        answer: 'Platinum is designed as discretionary management—your wealth manager makes day-to-day buy/sell decisions within your agreed-upon Investment Policy Statement. However, you\'re always informed of major moves before execution, and we never make significant strategy changes without your explicit approval.',
    },
    {
        question: 'What happens if my wealth manager leaves GMA?',
        answer: 'If your wealth manager departs, we immediately assign a senior manager as your new dedicated contact. A comprehensive handoff meeting occurs, there\'s zero disruption to your portfolio, and you meet your new wealth manager within 48 hours.',
    },
    {
        question: 'Can I add more funds to my Platinum Account later?',
        answer: 'Absolutely, and we encourage it. You can add funds at any time with no additional setup fees or paperwork. Simply transfer to your designated account and your wealth manager will integrate the new capital into your existing strategy.',
    },
];

export default function PlatinumAccount() {
    return (
        <main className="product-page product-page--platinum">
            {/* Hero */}
            <section className="product-hero">
                <div className="product-hero__bg">
                    <div className="product-hero__glow"></div>
                </div>
                <div className="container">
                    <div className="product-hero__content">
                        <div className="product-hero__badge">
                            <Gem size={20} />
                            <span>Platinum Account</span>
                        </div>
                        <h1>Comprehensive Wealth Management for <span className="text-gradient">Serious Investors</span></h1>
                        <p className="product-hero__subtitle">
                            Full-service portfolio management across all asset classes with dedicated relationship
                            management. The ultimate hands-off wealth growth solution.
                        </p>
                        <div className="product-hero__stats">
                            <div className="product-hero__stat">
                                <span className="product-hero__stat-value">₦5M</span>
                                <span className="product-hero__stat-label">Minimum Investment</span>
                            </div>
                            <div className="product-hero__stat">
                                <span className="product-hero__stat-value">15-20%</span>
                                <span className="product-hero__stat-label">Historical Returns*</span>
                            </div>
                            <div className="product-hero__stat">
                                <span className="product-hero__stat-value">2%</span>
                                <span className="product-hero__stat-label">Annual Fee</span>
                            </div>
                        </div>
                        <Link to="/get-started" className="btn btn-primary btn-lg">
                            Apply for Platinum Account
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="section">
                <div className="container">
                    <div className="product-overview">
                        <div className="product-overview__main">
                            <h2>What is the Platinum Account?</h2>
                            <p>
                                The Platinum Account is our flagship wealth management service designed for high-net-worth
                                individuals and corporations who want comprehensive, professional management of their entire
                                investment portfolio.
                            </p>
                            <p>
                                Unlike limited stock-only management or single-asset-class funds, Platinum provides true
                                diversification across real estate, equities, bonds, treasury bills, unit trust funds, and
                                money market instruments—all managed by a dedicated wealth manager who knows your financial
                                goals intimately.
                            </p>
                        </div>
                        <div className="product-overview__ideal">
                            <h3>Who It's For</h3>
                            <ul>
                                <li><CheckCircle size={18} /> High-net-worth individuals with ₦5 million+ to invest</li>
                                <li><CheckCircle size={18} /> Corporate executives optimizing personal wealth</li>
                                <li><CheckCircle size={18} /> Business owners seeking professional asset management</li>
                                <li><CheckCircle size={18} /> Families building generational wealth</li>
                                <li><CheckCircle size={18} /> Investors who value time and prefer expert oversight</li>
                                <li><CheckCircle size={18} /> Those seeking diversification beyond a single asset class</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Complete Wealth Management, <span className="text-gradient">Zero Daily Involvement</span></h2>
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

            {/* FAQ */}
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

            {/* CTA */}
            <section className="section section-cta-product">
                <div className="container text-center">
                    <h2>Join Nigeria's Most Sophisticated Investors</h2>
                    <p>Platinum Account clients trust us with an average of ₦18 million in assets. The average client tenure is 7.2 years.</p>
                    <div className="cta-buttons">
                        <Link to="/get-started" className="btn btn-primary btn-lg">
                            Apply for Platinum Account
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/book-consultation" className="btn btn-secondary btn-lg">
                            Schedule a Consultation First
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
