import { Link } from 'react-router-dom';
import { ArrowRight, TrendingDown, XCircle, Clock, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import TransactionCarousel from '../components/TransactionCarousel';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FAQAccordion from '../components/FAQAccordion';
import './Home.css';

// Pain Points Data
const painPoints = [
    {
        icon: TrendingDown,
        title: 'Losing to Inflation',
        description: 'Your savings are shrinking 18% annually while sitting in traditional accounts. What\'s worth ₦10 million today will be worth ₦8.2 million in purchasing power next year.',
        color: '#EF4444',
    },
    {
        icon: XCircle,
        title: 'DIY Investment Mistakes',
        description: 'Stock picking without expert guidance costs Nigerian investors an average of 23% in missed opportunities and mistimed trades each year.',
        color: '#F59E0B',
    },
    {
        icon: Clock,
        title: 'Wasting Prime Years',
        description: 'Every year without professional wealth management delays your financial independence by 18-24 months. Time is your most valuable asset.',
        color: '#3B82F6',
    },
];

// Products Data
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
        idealFor: 'Investors who want expert stock market navigation without daily involvement. Perfect for those seeking growth beyond fixed-income instruments.',
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
        idealFor: 'Investors with legacy holdings who need professional oversight. Ideal if you\'ve lost track of investments or have unclaimed dividends.',
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
        idealFor: 'Conservative investors seeking steady, reliable income without market volatility. Perfect for retirees or those nearing retirement.',
        minimumInvestment: '₦1,000,000',
        buttonText: 'Guarantee Your Income',
        link: '/wealth-management/gma-note',
    },
];

// Transactions Data
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
    {
        company: 'Pinnacle Point Group',
        amount: '$5 Million',
        type: 'Short-Term Loan',
        role: 'Fund Arranger',
        description: 'Bridge financing enabling timely equipment acquisition for oil services operations.',
    },
    {
        company: 'Mutual Benefits Assurance PLC',
        amount: 'JPY 750 Million',
        type: 'Bond with Options',
        role: 'Financial Adviser',
        description: 'Strategic capital raise supporting expansion into microinsurance segment.',
    },
    {
        company: 'Pinnacle Point Group',
        amount: 'R300 Million',
        type: 'Private Placement of Ordinary Shares',
        role: 'Fund Arranger/Issuing House',
        description: 'Cross-border equity raise facilitating Pan-African expansion strategy.',
    },
];

// Testimonials Data
const testimonials = [
    {
        content: "GMA's Platinum Account has grown our corporate reserves by 34% over 18 months while maintaining the liquidity we need for operations. Their wealth managers understand both the Nigerian market and our business needs.",
        author: 'Anonymous',
        role: 'Chief Financial Officer',
        company: 'Manufacturing Company, Lagos',
        rating: 5,
    },
    {
        content: "After 8 years of dormant shares, GMA's Gold Account recovered ₦2.7 million in unclaimed dividends I didn't know existed. The process was thorough and completely transparent.",
        author: 'Mr. Oluwaseun A.',
        role: 'Business Owner',
        company: 'Lagos',
        rating: 5,
    },
    {
        content: "The Diamond Account team's market expertise turned my modest ₦5 million investment into ₦7.8 million in just 24 months. They're proactive, responsive, and truly invested in my success.",
        author: 'Dr. Chioma N.',
        role: 'Medical Practitioner & Investor',
        rating: 5,
    },
];

// FAQ Data
const faqs = [
    {
        question: 'How much do I need to start investing with GMA?',
        answer: 'Our Gold Account starts at ₦500,000, making professional wealth management accessible to more investors. Diamond accounts begin at ₦2 million, Platinum at ₦5 million, and GMA Notes at ₦1 million. We\'ll help you choose the right entry point based on your financial goals during your complimentary consultation.',
    },
    {
        question: 'Is my money safe with GMA?',
        answer: 'Absolutely. GMA is fully licensed and regulated by the Securities and Exchange Commission (SEC) with registration number RC 629517. We\'ve operated with zero security breaches for over 25 years. Your assets are held in segregated custodial accounts with reputable custodians, and we carry comprehensive professional indemnity insurance.',
    },
    {
        question: 'How quickly can I access my money if needed?',
        answer: 'Liquidity varies by account type. Gold and Diamond accounts offer quarterly withdrawal windows with 30 days\' notice. Platinum accounts provide customized liquidity terms based on your needs—typically monthly or quarterly access. GMA Notes have fixed terms (6-36 months) with penalties for early withdrawal.',
    },
    {
        question: 'What returns can I expect?',
        answer: 'While SEC regulations prohibit us from guaranteeing specific returns, we can share historical performance. Our Diamond Account clients have historically averaged 18-24% annual returns over 3-year periods. Platinum clients typically see 15-20% across diversified portfolios. GMA Notes provide fixed returns 2-4% above current treasury bill rates.',
    },
    {
        question: 'Do I need to visit your Lagos office?',
        answer: 'Not necessarily for initial steps. Express interest and consultations can be done entirely online via phone or video call. However, for account activation, Nigerian regulations require either an in-person verification meeting or notarized document submission for KYC/AML compliance.',
    },
    {
        question: 'What fees does GMA charge?',
        answer: 'Our fee structure is transparent: Platinum Account: 2% annual management fee. Diamond Account: 1.5% annual + 10% performance fee on gains above 15%. Gold Account: Flat ₦150,000 annual monitoring and recovery fee. GMA Note: No management fees (returns are net of all costs). All fees are discussed clearly during your consultation.',
    },
    {
        question: 'How often will I hear from my wealth manager?',
        answer: 'Communication frequency depends on your account type: Platinum clients receive monthly check-ins and quarterly formal reviews. Diamond clients get quarterly performance reports with on-demand access. Gold clients have semi-annual reviews. All clients have 24/7 access to our online portal for real-time portfolio viewing.',
    },
    {
        question: 'What happens if I\'m not satisfied with the service?',
        answer: 'We stand behind our service quality. If you\'re unsatisfied within the first 90 days of Platinum or Diamond accounts, we\'ll work with you to adjust your strategy at no additional cost or facilitate your exit with no penalties. Our client retention rate of 94% over the past decade speaks to our commitment.',
    },
];

// How It Works Steps
const steps = [
    {
        number: '01',
        title: 'Express Your Interest',
        subtitle: '60 Seconds',
        description: 'Tell us about your investment goals and preferred account type. No commitment required, no credit card needed. We\'ll send you a personalized recommendation within 24 hours.',
        icon: '📝',
    },
    {
        number: '02',
        title: 'Consultation With Your Wealth Manager',
        subtitle: '20 Minutes',
        description: 'Schedule a call to discuss your financial objectives, risk tolerance, and investment timeline. We\'ll recommend the perfect strategy and answer all your questions.',
        icon: '💬',
    },
    {
        number: '03',
        title: 'Account Activation & Investment',
        subtitle: '7-10 Business Days',
        description: 'Complete your application, submit documentation, and fund your account. Once activated, your dedicated wealth manager begins implementing your personalized investment strategy.',
        icon: '🚀',
    },
];

export default function Home() {
    return (
        <main className="home">
            {/* Section 1: Hero */}
            <Hero
                headline="Grow Your Wealth With"
                highlightedText="Africa's Most Trusted Investment Managers"
                subheadline="25+ years managing ₦47.8 billion in assets for corporations, institutions, and high-net-worth individuals across African markets."
                primaryButtonText="Start Building Wealth Today"
                primaryButtonLink="/get-started"
                secondaryButtonText="Speak With a Wealth Manager"
                secondaryButtonLink="/book-consultation"
                backgroundImage="https://gma.com.ng/wp/wp-content/uploads/2021/12/skyscraper-home-1.jpg"
            />

            {/* Section 2: Pain Points */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Your Wealth Deserves Better Than <span className="text-gradient">Guesswork</span></h2>
                    </div>

                    <div className="pain-points-grid">
                        {painPoints.map((point, index) => (
                            <div key={index} className="pain-point-card">
                                <div
                                    className="pain-point-card__icon"
                                    style={{ backgroundColor: `${point.color}15`, color: point.color }}
                                >
                                    <point.icon size={28} />
                                </div>
                                <h3 className="pain-point-card__title">{point.title}</h3>
                                <p className="pain-point-card__description">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Investment Products */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Three Investment Pathways, One Goal: <span className="text-gradient">Your Financial Freedom</span></h2>
                        <p className="section-intro">
                            Whether you're preserving capital, building long-term wealth, or recovering lost dividends,
                            we have a proven strategy designed for your specific goals.
                        </p>
                    </div>

                    <div className="products-grid">
                        {products.map((product, index) => (
                            <ProductCard key={index} {...product} variant={index === 0 ? 'featured' : 'default'} />
                        ))}
                    </div>

                    <p className="products-disclaimer">
                        *Minimum investment amounts are indicative and may be adjusted based on individual circumstances.
                    </p>
                </div>
            </section>

            {/* Section 4: Track Record */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Trusted By Nigeria's <span className="text-gradient">Leading Institutions</span></h2>
                        <p className="section-intro">
                            Over 25 years, we've successfully arranged and advised on ₦47.8 billion+ in transactions
                            for corporations, financial institutions, and discerning individuals.
                        </p>
                    </div>

                    <TransactionCarousel transactions={transactions} />

                    <div className="text-center" style={{ marginTop: 'var(--space-10)' }}>
                        <Link to="/about#track-record" className="btn btn-outline">
                            View All 12 Transactions
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section 5: Testimonials */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>What Our Clients Say About <span className="text-gradient">Working With Us</span></h2>
                    </div>

                    <TestimonialCarousel testimonials={testimonials} />
                </div>
            </section>

            {/* Section 6: How It Works */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Your Journey to Financial Freedom in <span className="text-gradient">3 Simple Steps</span></h2>
                    </div>

                    <div className="steps-grid">
                        {steps.map((step, index) => (
                            <div key={index} className="step-card">
                                <div className="step-card__number">{step.number}</div>
                                <div className="step-card__icon">{step.icon}</div>
                                <h3 className="step-card__title">{step.title}</h3>
                                <span className="step-card__subtitle">{step.subtitle}</span>
                                <p className="step-card__description">{step.description}</p>
                                {index < steps.length - 1 && (
                                    <div className="step-card__connector">
                                        <ArrowRight size={24} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="text-center" style={{ marginTop: 'var(--space-12)' }}>
                        <Link to="/get-started" className="btn btn-primary btn-lg">
                            Begin Your Wealth Journey
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section 7: FAQ */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Questions Before You Start? <span className="text-gradient">We've Got Answers.</span></h2>
                    </div>

                    <div className="faq-container">
                        <FAQAccordion items={faqs} />
                    </div>

                    <div className="text-center" style={{ marginTop: 'var(--space-10)' }}>
                        <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-4)' }}>Still Have Questions?</p>
                        <Link to="/book-consultation" className="btn btn-dark">
                            Schedule a No-Obligation Consultation
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section 8: Final CTA */}
            <section className="section section-cta">
                <div className="container">
                    <div className="cta-content text-center">
                        <h2>Your Wealth Won't Grow While You Wait</h2>
                        <p className="cta-subtitle">
                            Every day without professional management costs you potential returns.
                            Nigerian inflation is outpacing traditional savings by 18% annually.
                        </p>

                        <div className="cta-stat">
                            <span className="cta-stat__label">₦10 Million Today =</span>
                            <span className="cta-stat__value">₦8.2 Million</span>
                            <span className="cta-stat__note">in Purchasing Power Next Year</span>
                        </div>

                        <div className="cta-buttons">
                            <Link to="/get-started" className="btn btn-primary btn-lg">
                                Express Interest in 60 Seconds
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/book-consultation" className="btn btn-secondary btn-lg">
                                Book a Consultation Call
                            </Link>
                        </div>

                        <div className="cta-trust">
                            <span><CheckCircle size={16} /> No credit card required</span>
                            <span><CheckCircle size={16} /> No commitment</span>
                            <span><CheckCircle size={16} /> SEC-licensed & insured</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
