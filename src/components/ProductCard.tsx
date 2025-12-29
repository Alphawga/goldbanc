import { Link } from 'react-router-dom';
import { ArrowRight, Gem, Diamond, Award, BarChart3 } from 'lucide-react';
import './ProductCard.css';

interface ProductCardProps {
    type: 'platinum' | 'diamond' | 'gold' | 'gma-note';
    name: string;
    tagline: string;
    description: string;
    features: string[];
    idealFor: string;
    minimumInvestment: string;
    buttonText: string;
    link: string;
    variant?: 'default' | 'featured';
}

const iconMap = {
    platinum: Gem,
    diamond: Diamond,
    gold: Award,
    'gma-note': BarChart3,
};

const colorMap = {
    platinum: 'platinum',
    diamond: 'diamond',
    gold: 'gold',
    'gma-note': 'note',
};

export default function ProductCard({
    type,
    name,
    tagline,
    description,
    features,
    idealFor,
    minimumInvestment,
    buttonText,
    link,
    variant = 'default',
}: ProductCardProps) {
    const Icon = iconMap[type];
    const colorClass = colorMap[type];

    return (
        <div className={`product-card product-card--${colorClass} product-card--${variant}`}>
            <div className="product-card__header">
                <div className={`product-card__icon product-card__icon--${colorClass}`}>
                    <Icon size={28} />
                </div>
                <div className="product-card__badge">{minimumInvestment}*</div>
            </div>

            <h3 className="product-card__name">{name}</h3>
            <p className="product-card__tagline">"{tagline}"</p>
            <p className="product-card__description">{description}</p>

            <div className="product-card__features">
                <h4 className="product-card__features-title">What's Included:</h4>
                <ul className="product-card__features-list">
                    {features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="product-card__feature">
                            <span className="product-card__feature-bullet">•</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="product-card__ideal">
                <h4 className="product-card__ideal-title">Ideal For:</h4>
                <p className="product-card__ideal-text">{idealFor}</p>
            </div>

            <Link to={link} className={`btn product-card__btn product-card__btn--${colorClass}`}>
                {buttonText}
                <ArrowRight size={18} />
            </Link>
        </div>
    );
}
