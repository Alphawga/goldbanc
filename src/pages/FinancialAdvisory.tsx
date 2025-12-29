import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, TrendingUp, FileText, Shield, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';
import TransactionCarousel from '../components/TransactionCarousel';
import './FinancialAdvisory.css';

const services = [
    {
        icon: Briefcase,
        title: 'Capital Raising & Structuring',
        subtitle: 'Equity, Debt, and Hybrid Instruments',
        description: 'We help corporations access capital markets through:',
        items: [
            'Initial Public Offerings (IPOs)',
            'Rights Issues and Private Placements',
            'Corporate Bonds and Debentures',
            'Structured Finance Solutions',
            'Sukuk and Islamic Finance',
        ],
    },
    {
        icon: TrendingUp,
        title: 'Mergers & Acquisitions Advisory',
        subtitle: 'Buy-Side, Sell-Side, and Valuation Services',
        description: 'We guide clients through:',
        items: [
            'Strategic acquisition identification and execution',
            'Divestiture and spin-off advisory',
            'Business valuation and due diligence',
            'Transaction structuring and negotiation',
            'Post-merger integration support',
        ],
    },
    {
        icon: FileText,
        title: 'Corporate Finance & Restructuring',
        subtitle: 'Optimization, Turnaround, and Strategic Planning',
        description: 'We provide:',
        items: [
            'Capital structure optimization',
            'Financial restructuring and turnaround advisory',
            'Working capital management',
            'Strategic financial planning',
            'Feasibility studies and project finance',
        ],
    },
    {
        icon: Shield,
        title: 'Regulatory Advisory & Compliance',
        subtitle: 'SEC, NSE, and Corporate Governance',
        description: 'We assist with:',
        items: [
            'SEC registration and compliance',
            'Nigerian Stock Exchange (NSE) listing',
            'Corporate governance advisory',
            'Regulatory filings and reporting',
            'Investor relations support',
        ],
    },
];

const transactions = [
    {
        company: 'Union Homes',
        amount: '₦12.88 Billion',
        type: 'Real Estate Investment Trust (REITS)',
        role: 'Financial Adviser/Issuing House',
        description: 'Largest REITS in Nigerian market.',
    },
    {
        company: 'Multitrex Integrated Foods PLC',
        amount: '₦2.16 Billion',
        type: 'Private Placement',
        role: 'Joint Financial Adviser/Issuing House',
        description: 'Oversubscribed by 140%.',
    },
    {
        company: 'Equity Assurance PLC',
        amount: 'JPY 1.35 Billion',
        type: 'Bond with Options',
        role: 'Financial Adviser',
        description: 'Cross-border financing.',
    },
];

const differentiators = [
    { title: '25+ Years of Market Expertise', description: 'Deep understanding of Nigerian regulatory environment and market dynamics.' },
    { title: 'Extensive Relationship Network', description: 'Strong relationships with SEC, NSE, and institutional investors.' },
    { title: 'Speed to Market', description: 'Streamlined processes reduce time from mandate to closing by 30-40%.' },
    { title: 'Proven Track Record', description: '₦47.8 billion in successful transactions with 100% SEC approval rate.' },
];

export default function FinancialAdvisory() {
    return (
        <main className="advisory-page">
            <Hero
                headline="Strategic Financial Advisory for"
                highlightedText="Nigeria's Leading Corporations"
                subheadline="From capital raising to mergers and acquisitions, we deliver institutional-grade financial advisory services backed by 25+ years of market expertise and ₦47.8 billion in successful transactions."
                primaryButtonText="Request Advisory Proposal"
                primaryButtonLink="/contact"
                secondaryButtonText="View Our Track Record"
                secondaryButtonLink="/about#track-record"
                showTrustBadges={false}
                variant="page"
            />

            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-label">Our Services</span>
                        <h2>Comprehensive Financial <span className="text-gradient">Advisory Services</span></h2>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-card__icon">
                                    <service.icon size={28} />
                                </div>
                                <h3>{service.title}</h3>
                                <span className="service-card__subtitle">{service.subtitle}</span>
                                <p>{service.description}</p>
                                <ul>
                                    {service.items.map((item, i) => (
                                        <li key={i}><CheckCircle size={16} /> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-dark">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-label section-label--light">Featured Mandates</span>
                        <h2>Recent <span className="text-gradient">Transactions</span></h2>
                    </div>
                    <TransactionCarousel transactions={transactions} />
                </div>
            </section>

            <section className="section section-light">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-label">Why Choose Us</span>
                        <h2>Why Corporations Trust <span className="text-gradient">GoldBanc Management</span></h2>
                    </div>
                    <div className="differentiators-grid">
                        {differentiators.map((item, index) => (
                            <div key={index} className="diff-card">
                                <div className="diff-card__number">{String(index + 1).padStart(2, '0')}</div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-cta-simple">
                <div className="container text-center">
                    <h2>Ready to Discuss Your Strategic Transaction?</h2>
                    <p>Contact our advisory team for a confidential consultation.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">
                        Request Advisory Proposal
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
