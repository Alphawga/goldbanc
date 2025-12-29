import { Link } from 'react-router-dom';
import { ArrowRight, FileText, TrendingUp, BookOpen, Download } from 'lucide-react';
import Hero from '../components/Hero';
import './Resources.css';

const resources = [
    {
        category: 'Investment Guides',
        icon: BookOpen,
        items: [
            { title: 'Getting Started with Wealth Management', description: 'A beginner\'s guide to professional investment management', type: 'PDF Guide' },
            { title: 'Understanding Nigerian Capital Markets', description: 'Navigate the NSE with confidence', type: 'PDF Guide' },
            { title: 'Inflation-Proofing Your Wealth', description: 'Strategies to protect purchasing power', type: 'PDF Guide' },
        ],
    },
    {
        category: 'Market Reports',
        icon: TrendingUp,
        items: [
            { title: 'Q4 2025 Market Outlook', description: 'Analysis and projections for Nigerian markets', type: 'Report' },
            { title: 'Annual Investment Review 2024', description: 'Performance across all asset classes', type: 'Report' },
            { title: 'Sector Analysis: Banking', description: 'Deep dive into bank equity performance', type: 'Report' },
        ],
    },
    {
        category: 'Blog & Insights',
        icon: FileText,
        items: [
            { title: '5 Mistakes Nigerian Investors Make', description: 'Common pitfalls and how to avoid them', type: 'Article' },
            { title: 'Is Now the Time to Invest?', description: 'Timing the market vs time in the market', type: 'Article' },
            { title: 'Building Generational Wealth', description: 'Long-term strategies for family prosperity', type: 'Article' },
        ],
    },
];

export default function Resources() {
    return (
        <main className="resources-page">
            <Hero
                headline="Investment Resources &"
                highlightedText="Market Insights"
                subheadline="Explore our library of guides, reports, and articles to enhance your investment knowledge. Free resources for informed decision-making."
                showTrustBadges={false}
                variant="page"
                primaryButtonText="Get Started Now"
                primaryButtonLink="/get-started"
                secondaryButtonText="Book a Consultation"
                secondaryButtonLink="/book-consultation"
            />

            <section className="section">
                <div className="container">
                    {resources.map((section, index) => (
                        <div key={index} className="resource-section">
                            <div className="resource-section__header">
                                <section.icon size={24} />
                                <h2>{section.category}</h2>
                            </div>
                            <div className="resource-grid">
                                {section.items.map((item, i) => (
                                    <div key={i} className="resource-card">
                                        <span className="resource-card__type">{item.type}</span>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <button className="btn btn-outline btn-sm">
                                            <Download size={16} />
                                            Download
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section section-cta-resources">
                <div className="container text-center">
                    <h2>Ready to Put Your Knowledge Into Action?</h2>
                    <p>Speak with a wealth manager to create your personalized investment strategy.</p>
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
