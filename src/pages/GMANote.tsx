import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BarChart3 } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import './ProductPage.css';

const features = [
    {
        title: 'Capital Preservation',
        description: 'Your principal is protected:',
        items: [
            'Principal protection guarantee',
            'Fixed returns above treasury rates',
            'Predictable income stream',
            'Low-risk investment strategy',
        ],
    },
    {
        title: 'Flexible Terms',
        description: 'Options that suit your needs:',
        items: [
            'Tenure options from 6 to 36 months',
            'Quarterly income distributions',
            'Rollover options at maturity',
            'No management fees',
        ],
    },
];

const faqs = [
    {
        question: 'What returns does the GMA Note offer?',
        answer: 'GMA Notes provide fixed returns 2-4% above current treasury bill rates. The exact rate is determined at the time of investment based on prevailing market conditions and your chosen tenure.',
    },
    {
        question: 'Can I withdraw before maturity?',
        answer: 'GMA Notes have fixed terms, and early withdrawal is possible but subject to penalties. We recommend only investing funds you won\'t need during the investment period. During your consultation, we\'ll help you choose the right tenure.',
    },
];

export default function GMANote() {
    return (
        <main className="product-page product-page--note">
            <section className="product-hero">
                <div className="product-hero__bg">
                    <div className="product-hero__glow"></div>
                </div>
                <div className="container">
                    <div className="product-hero__content">
                        <div className="product-hero__badge">
                            <BarChart3 size={20} />
                            <span>GMA Note</span>
                        </div>
                        <h1>Guaranteed Income Instrument for <span className="text-gradient">Conservative Investors</span></h1>
                        <p className="product-hero__subtitle">
                            Fixed-income investment with principal protection and returns above treasury rates.
                            Perfect for those who prioritize capital preservation.
                        </p>
                        <div className="product-hero__stats">
                            <div className="product-hero__stat">
                                <span className="product-hero__stat-value">₦1M</span>
                                <span className="product-hero__stat-label">Minimum Investment</span>
                            </div>
                            <div className="product-hero__stat">
                                <span className="product-hero__stat-value">T-Bill+</span>
                                <span className="product-hero__stat-label">Fixed Returns</span>
                            </div>
                            <div className="product-hero__stat">
                                <span className="product-hero__stat-value">0%</span>
                                <span className="product-hero__stat-label">Management Fee</span>
                            </div>
                        </div>
                        <Link to="/get-started" className="btn btn-primary btn-lg">
                            Guarantee Your Income
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="product-overview">
                        <div className="product-overview__main">
                            <h2>What is the GMA Note?</h2>
                            <p>
                                The GMA Note is a fixed-income investment instrument designed for conservative investors
                                who prioritize capital preservation while earning predictable returns above treasury rates.
                            </p>
                            <p>
                                With no management fees and quarterly income distributions, it's the perfect solution
                                for retirees or those seeking steady, reliable income without market volatility.
                            </p>
                        </div>
                        <div className="product-overview__ideal">
                            <h3>Who It's For</h3>
                            <ul>
                                <li><CheckCircle size={18} /> Conservative investors seeking stability</li>
                                <li><CheckCircle size={18} /> Retirees needing predictable income</li>
                                <li><CheckCircle size={18} /> Those nearing retirement</li>
                                <li><CheckCircle size={18} /> Investors wanting capital preservation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Steady Returns, <span className="text-gradient">Zero Volatility</span></h2>
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
                    <h2>Secure Your Financial Future</h2>
                    <p>Enjoy peace of mind with guaranteed returns and capital protection.</p>
                    <div className="cta-buttons">
                        <Link to="/get-started" className="btn btn-primary btn-lg">
                            Guarantee Your Income
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
