import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Shield, Award, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';
import TransactionCarousel from '../components/TransactionCarousel';
import './About.css';

const transactions = [
    {
        company: 'Union Homes',
        amount: '₦12.88 Billion',
        type: 'Real Estate Investment Trust (REITS)',
        role: 'Financial Adviser/Issuing House',
        description: 'Largest REITS in Nigerian market, providing liquidity for real estate investors nationwide.',
    },
    {
        company: 'Multitrex Integrated Foods PLC',
        amount: '₦2.16 Billion',
        type: 'Private Placement of Ordinary Shares',
        role: 'Joint Financial Adviser/Issuing House',
        description: 'Oversubscribed by 140%, enabling company\'s growth strategy into new distribution channels.',
    },
    {
        company: 'Equity Assurance PLC',
        amount: 'JPY 1.35 Billion',
        type: 'Bond with Options',
        role: 'Financial Adviser',
        description: 'Successful cross-border financing strengthening capital adequacy ratio.',
    },
    {
        company: 'Neimeth International Pharmaceuticals PLC',
        amount: 'JPY 1.35 Billion',
        type: 'Bond with Options',
        role: 'Financial Adviser',
        description: 'Funded manufacturing capacity expansion and regulatory compliance improvements.',
    },
    {
        company: 'Botro Marine & Oil Services Ltd',
        amount: '₦206 Million',
        type: 'Bridging Finance Facility',
        role: 'Fund Arranger',
        description: 'Successful project financing enabling operational expansion into deepwater logistics services.',
    },
];

const values = [
    {
        icon: Target,
        title: 'Client-First Approach',
        description: 'Every decision we make is guided by what\'s best for our clients\' financial future.',
    },
    {
        icon: Shield,
        title: 'Integrity & Transparency',
        description: 'Complete honesty in all dealings, with clear communication and no hidden fees.',
    },
    {
        icon: Award,
        title: 'Excellence in Execution',
        description: 'Meticulous attention to detail in managing every naira entrusted to us.',
    },
    {
        icon: Users,
        title: 'Long-term Relationships',
        description: 'Building generational wealth through partnerships that last decades.',
    },
];

const stats = [
    { value: '25+', label: 'Years of Excellence' },
    { value: '₦47.8B+', label: 'Assets Managed' },
    { value: '94%', label: 'Client Retention' },
    { value: '12+', label: 'Major Transactions' },
];

export default function About() {
    return (
        <main className="about-page">
            {/* Hero */}
            <Hero
                headline="25+ Years Building Wealth Across"
                highlightedText="African Markets"
                subheadline="From Lagos to Johannesburg, we've navigated every market cycle to protect and grow our clients' assets through expertise, integrity, and innovation."
                primaryButtonText="Start Your Journey"
                primaryButtonLink="/get-started"
                secondaryButtonText="View Our Track Record"
                secondaryButtonLink="#track-record"
                showTrustBadges={false}
                variant="page"
                backgroundImage="https://gma.com.ng/wp-content/uploads/2021/12/who-we-are-image-5-1.jpg"
            />

            {/* Stats Bar */}
            <section className="stats-bar">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <span className="stat-item__value">{stat.value}</span>
                                <span className="stat-item__label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section">
                <div className="container">
                    <div className="story-content">
                        <div className="story-header">
                            <span className="section-label">Our Story</span>
                            <h2>Built on Trust, <span className="text-gradient">Proven by Performance</span></h2>
                        </div>

                        <div className="story-text">
                            <p>
                                Founded over 25 years ago, GoldBanc Management Associates emerged from a simple conviction:
                                Nigerian investors and corporations deserve world-class wealth management with deep local market expertise.
                            </p>
                            <p>
                                Over the past two and a half decades, we've grown from a boutique financial advisory firm to one
                                of Nigeria's most trusted asset managers, stewarding over ₦47.8 billion in client assets across
                                multiple asset classes.
                            </p>
                            <p>
                                What sets us apart isn't just our track record—it's our unwavering commitment to transparency,
                                regulatory compliance, and putting our clients' interests first. While others chased short-term
                                profits during Nigeria's economic boom periods, we built sustainable, diversified portfolios
                                designed to weather any storm.
                            </p>
                            <p>
                                We've guided clients through the 2008 global financial crisis, Nigeria's 2016 recession,
                                currency devaluations, and market volatility—protecting capital when others panicked and
                                capitalizing on opportunities when others retreated.
                            </p>
                            <p>
                                Today, our clients range from high-net-worth individuals securing generational wealth to
                                corporations optimizing treasury management and institutions requiring sophisticated portfolio
                                strategies. Our mission remains unchanged: exceptional returns through disciplined investment
                                management and uncompromising ethical standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-label">Our Values</span>
                        <h2>The Principles That <span className="text-gradient">Guide Us</span></h2>
                    </div>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-card__icon">
                                    <value.icon size={28} />
                                </div>
                                <h3 className="value-card__title">{value.title}</h3>
                                <p className="value-card__description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Track Record */}
            <section id="track-record" className="section section-dark">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-label section-label--light">Track Record</span>
                        <h2>₦47.8 Billion in <span className="text-gradient">Successful Transactions</span></h2>
                        <p className="section-intro">
                            Over 25 years, we've arranged, advised, and managed some of Nigeria's most
                            significant financial transactions. Our track record speaks for itself.
                        </p>
                    </div>

                    <TransactionCarousel transactions={transactions} />
                </div>
            </section>

            {/* Regulatory & Compliance */}
            <section className="section">
                <div className="container">
                    <div className="compliance-content">
                        <div className="compliance-header">
                            <span className="section-label">Regulatory Compliance</span>
                            <h2>Fully Licensed, <span className="text-gradient">Fully Transparent</span></h2>
                        </div>

                        <div className="compliance-body">
                            <div className="compliance-info">
                                <p>
                                    GoldBanc Management Associates is licensed and regulated by the Securities and
                                    Exchange Commission (SEC) of Nigeria.
                                </p>

                                <div className="compliance-details">
                                    <h4>Registration Details:</h4>
                                    <ul>
                                        <li><strong>Company Name:</strong> GoldBanc Management Associates Limited</li>
                                        <li><strong>RC Number:</strong> RC 629517</li>
                                        <li><strong>Registered Address:</strong> Medife House, 5th Floor, 58/60 Broad Street, Marina, Lagos</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="compliance-standards">
                                <h4>We maintain the highest standards of regulatory compliance:</h4>
                                <ul className="compliance-list">
                                    <li><CheckCircle size={20} /> Know Your Customer (KYC) and Anti-Money Laundering (AML) protocols</li>
                                    <li><CheckCircle size={20} /> Segregated client accounts with reputable custodians</li>
                                    <li><CheckCircle size={20} /> Regular SEC audits and reporting requirements</li>
                                    <li><CheckCircle size={20} /> Comprehensive professional indemnity insurance</li>
                                    <li><CheckCircle size={20} /> Transparent fee structures and performance reporting</li>
                                    <li><CheckCircle size={20} /> Adherence to all Nigerian Investment and Securities Act provisions</li>
                                </ul>
                            </div>
                        </div>

                        <div className="compliance-cta text-center">
                            <p>Ready to Work With a Trusted Partner?</p>
                            <Link to="/get-started" className="btn btn-primary btn-lg">
                                Get Started
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
