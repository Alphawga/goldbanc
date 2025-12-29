import { Shield, TrendingUp, Award } from 'lucide-react';
import './TrustBadges.css';

interface TrustBadgesProps {
    variant?: 'light' | 'dark';
}

export default function TrustBadges({ variant = 'dark' }: TrustBadgesProps) {
    const badges = [
        { icon: Shield, text: 'SEC Licensed & Regulated' },
        { icon: Award, text: '25+ Years of Proven Performance' },
        { icon: TrendingUp, text: '₦47.8B+ Assets Under Management' },
    ];

    return (
        <div className={`trust-badges trust-badges--${variant}`}>
            {badges.map((badge, index) => (
                <div key={index} className="trust-badge">
                    <badge.icon size={18} className="trust-badge__icon" />
                    <span className="trust-badge__text">{badge.text}</span>
                </div>
            ))}
        </div>
    );
}
