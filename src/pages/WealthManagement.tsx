import { Link } from 'react-router-dom';
import { ArrowRight, Gem, Diamond, Award, BarChart3, Target, BarChart, Shield, Users } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import './WealthManagement.css';

const products = [
    {
        type: 'platinum' as const,
        name: 'Platinum Account',
        tagline: 'Comprehensive Wealth Management',
        description: 'For the investor who wants complete financial peace of mind.',
        features: [
            'Full portfolio management across all asset classes',
            'Real estate, stocks, bonds, treasury bills',
            'Unit trust funds and money market instruments',
            'Dedicated wealth manager',
        ],
        idealFor: 'High-net-worth individuals and corporations seeking hands-off wealth growth with comprehensive financial oversight.',
        minimumInvestment: '₦5,000,000',
        buttonText: 'Start Your Platinum Journey',
        link: '/wealth-management/platinum',
    },
    {
        type: 'diamond' as const,
        name: 'Diamond Account',
        tagline: 'Active Stock Portfolio Management',
        description: 'For the investor ready to capitalize on market opportunities.',
        features: [
            'Professional management of existing stock holdings',
            'Strategic new equity investments',
            'Market timing expertise',
            'Real-time portfolio monitoring',
        ],
        idealFor: 'Investors who want expert stock market navigation without daily involvement.',
        minimumInvestment: '₦2,000,000',
        buttonText: 'Unlock Diamond Access',
        link: '/wealth-management/diamond',
    },
    {
        type: 'gold' as const,
        name: 'Gold Account',
        tagline: 'Portfolio Recovery & Monitoring',
        description: 'For the investor with dormant assets to reclaim.',
        features: [
            'Custodial monitoring of existing portfolios',
            'Recovery of lost/unclaimed dividend warrants',
            'Recovery of missing share certificates',
            'Portfolio value protection',
        ],
        idealFor: 'Investors with legacy holdings who need professional oversight.',
        minimumInvestment: '₦500,000',
        buttonText: 'Secure Your Gold Account',
        link: '/wealth-management/gold',
    },
    {
        type: 'gma-note' as const,
        name: 'GMA Note',
        tagline: 'Guaranteed Income Instrument',
        description: 'For the investor who prioritizes capital preservation.',
        features: [
            'Fixed-income investments',
            'Principal protection guarantee',
            'Predictable returns above treasury rates',
            'Quarterly income distributions',
        ],
        idealFor: 'Conservative investors seeking steady, reliable income without market volatility.',
        minimumInvestment: '₦1,000,000',
        buttonText: 'Guarantee Your Income',
        link: '/wealth-management/gma-note',
    },
];

const whyChoose = [
    {
        icon: Target,
        title: 'Deep Market Expertise',
        description: '25+ years navigating Nigerian and African financial markets means we understand local nuances, regulatory environments, and economic cycles that foreign managers often miss.',
    },
    {
        icon: BarChart,
        title: 'Transparent Performance',
        description: 'Quarterly reporting with clear, jargon-free explanations of your portfolio performance, fees, and strategy adjustments. No surprises, complete visibility.',
    },
    {
        icon: Shield,
        title: 'SEC-Licensed & Insured',
        description: 'Fully regulated by Nigeria\'s Securities and Exchange Commission with comprehensive insurance coverage. Your assets are protected by law and best practices.',
    },
    {
        icon: Users,
        title: 'Personalized Service',
        description: 'Direct access to your dedicated wealth manager—not a call center. We build relationships, not just portfolios.',
    },
];

const comparisonData = [
    {
        feature: 'Best For',
        platinum: 'Comprehensive wealth growth',
        diamond: 'Active stock investors',
        gold: 'Portfolio recovery',
        note: 'Capital preservation',
    },
    {
        feature: 'Minimum Investment',
        platinum: '₦5M',
        diamond: '₦2M',
        gold: '₦500K',
        note: '₦1M',
    },
    {
        feature: 'Asset Classes',
        platinum: 'All (stocks, bonds, real estate, T-bills)',
        diamond: 'Primarily equities',
        gold: 'Existing holdings',
        note: 'Fixed income only',
    },
    {
        feature: 'Management Style',
        platinum: 'Active, diversified',
        diamond: 'Active, growth-focused',
        gold: 'Custodial, recovery',
        note: 'Passive, protective',
    },
    {
        feature: 'Risk Level',
        platinum: 'Medium-High',
        diamond: 'High',
        gold: 'Low-Medium',
        note: 'Low',
    },
    {
        feature: 'Fees',
        platinum: '2% annual',
        diamond: '1.5% annual + 10% performance',
        gold: '₦150K flat',
        note: 'No fees',
    },
];

export default function WealthManagement() {
    return (
        <main className="wealth-page">
            {/* Hero */}
            <Hero
                headline="Professional Wealth Management"
                highlightedText="Tailored to Your Goals"
                subheadline="From portfolio recovery to comprehensive asset management, we offer proven strategies for every stage of your financial journey."
                primaryButtonText="Get Started Now"
                primaryButtonLink="/get-started"
                secondaryButtonText="Book a Consultation"
                secondaryButtonLink="/book-consultation"
                showTrustBadges={false}
                variant="page"
            />

            {/* Products Overview */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-label">Our Services</span>
                        <h2>Investment Products for <span className="text-gradient">Every Goal</span></h2>
                        <p className="section-intro">
                            At GoldBanc Management Associates, we don't believe in one-size-fits-all investment strategies.
                            Whether you're preserving capital, seeking aggressive growth, or recovering dormant assets,
                            we have a tailored solution backed by 25+ years of African market expertise.
                        </p>
                    </div>

                    <div className="products-grid">
                        {products.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose GMA */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-label">Why GoldBanc</span>
                        <h2>Why Investors Choose <span className="text-gradient">GoldBanc Management</span></h2>
                    </div>

                    <div className="why-grid">
                        {whyChoose.map((item, index) => (
                            <div key={index} className="why-card">
                                <div className="why-card__icon">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="why-card__title">{item.title}</h3>
                                <p className="why-card__description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-label">Compare Products</span>
                        <h2>Compare Our <span className="text-gradient">Investment Products</span></h2>
                    </div>

                    <div className="comparison-table-wrapper">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th><Gem size={20} /> Platinum</th>
                                    <th><Diamond size={20} /> Diamond</th>
                                    <th><Award size={20} /> Gold</th>
                                    <th><BarChart3 size={20} /> GMA Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, index) => (
                                    <tr key={index}>
                                        <td className="feature-cell">{row.feature}</td>
                                        <td>{row.platinum}</td>
                                        <td>{row.diamond}</td>
                                        <td>{row.gold}</td>
                                        <td>{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-cta-simple">
                <div className="container text-center">
                    <h2>Not Sure Which Account Is Right For You?</h2>
                    <p>Schedule a free consultation and we'll help you find the perfect fit.</p>
                    <div className="cta-buttons">
                        <Link to="/get-started" className="btn btn-primary btn-lg">
                            Get Started Now
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/book-consultation" className="btn btn-outline btn-lg">
                            Book a Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
