import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import TrustBadges from './TrustBadges';
import './Hero.css';

interface HeroProps {
    headline: string;
    highlightedText?: string;
    subheadline: string;
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    showTrustBadges?: boolean;
    variant?: 'home' | 'page';
    backgroundImage?: string;
}

export default function Hero({
    headline,
    highlightedText,
    subheadline,
    primaryButtonText = 'Start Building Wealth Today',
    primaryButtonLink = '/get-started',
    secondaryButtonText = 'Speak With a Wealth Manager',
    secondaryButtonLink = '/book-consultation',
    showTrustBadges = true,
    variant = 'home',
    backgroundImage,
}: HeroProps) {
    return (
        <section className={`hero hero--${variant}`}>
            {/* Background Elements */}
            <div className="hero__bg">
                {backgroundImage && (
                    <img
                        src={backgroundImage}
                        alt=""
                        className="hero__bg-image"
                    />
                )}
                <div className="hero__bg-overlay"></div>
                <div className="hero__bg-glow hero__bg-glow--1"></div>
                <div className="hero__bg-glow hero__bg-glow--2"></div>
                <div className="hero__bg-pattern"></div>
            </div>

            <div className="container">
                <div className="hero__content">
                    <h1 className="hero__headline animate-fade-in-up">
                        {headline}
                        {highlightedText && (
                            <>
                                {' '}
                                <span className="text-gradient">{highlightedText}</span>
                            </>
                        )}
                    </h1>

                    <p className="hero__subheadline animate-fade-in-up stagger-1">
                        {subheadline}
                    </p>

                    <div className="hero__buttons animate-fade-in-up stagger-2">
                        <Link to={primaryButtonLink} className="btn btn-primary btn-lg">
                            {primaryButtonText}
                            <ArrowRight size={20} />
                        </Link>
                        <Link to={secondaryButtonLink} className="btn btn-secondary btn-lg">
                            <MessageCircle size={20} />
                            {secondaryButtonText}
                        </Link>
                    </div>

                    {showTrustBadges && (
                        <div className="hero__trust animate-fade-in-up stagger-3">
                            <TrustBadges />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
