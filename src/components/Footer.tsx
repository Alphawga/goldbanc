import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const footerLinks = {
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Leadership Team', href: '/about#leadership' },
        { name: 'Track Record', href: '/about#track-record' },
        { name: 'Careers', href: '/careers' },
    ],
    services: [
        { name: 'Platinum Account', href: '/wealth-management/platinum' },
        { name: 'Diamond Account', href: '/wealth-management/diamond' },
        { name: 'Gold Account', href: '/wealth-management/gold' },
        { name: 'GMA Note', href: '/wealth-management/gma-note' },
        { name: 'Financial Advisory', href: '/financial-advisory' },
    ],
    resources: [
        { name: 'Blog & Insights', href: '/resources' },
        { name: 'Market Reports', href: '/resources' },
        { name: 'Investment Guides', href: '/resources' },
        { name: 'FAQ', href: '/faq' },
    ],
};

const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            {/* Main Footer Content */}
            <div className="footer__main">
                <div className="container">
                    <div className="footer__grid">
                        {/* Brand Column */}
                        <div className="footer__brand">
                            <Link to="/" className="footer__logo">
                                <div className="footer__logo-icon">G</div>
                                <div className="footer__logo-text">
                                    <span className="footer__logo-name">GoldBanc</span>
                                    <span className="footer__logo-tagline">Capital</span>
                                </div>
                            </Link>
                            <p className="footer__description">
                                Africa's most trusted investment managers. 25+ years managing ₦47.8 billion+
                                in assets for corporations, institutions, and high-net-worth individuals.
                            </p>

                            {/* Contact Info */}
                            <div className="footer__contact">
                                <div className="footer__contact-item">
                                    <MapPin size={18} />
                                    <span>Medife House, 5th Floor<br />58/60 Broad Street, Marina, Lagos</span>
                                </div>
                                <div className="footer__contact-item">
                                    <Phone size={18} />
                                    <span>+234-1-4480802, +234-1-4480803</span>
                                </div>
                                <div className="footer__contact-item">
                                    <Mail size={18} />
                                    <span>info@gma.com.ng</span>
                                </div>
                                <div className="footer__contact-item">
                                    <Clock size={18} />
                                    <span>Mon-Fri: 8:00 AM - 5:00 PM WAT</span>
                                </div>
                            </div>
                        </div>

                        {/* Company Links */}
                        <div className="footer__column">
                            <h4 className="footer__column-title">Company</h4>
                            <ul className="footer__links">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="footer__link">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services Links */}
                        <div className="footer__column">
                            <h4 className="footer__column-title">Services</h4>
                            <ul className="footer__links">
                                {footerLinks.services.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="footer__link">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources Links */}
                        <div className="footer__column">
                            <h4 className="footer__column-title">Resources</h4>
                            <ul className="footer__links">
                                {footerLinks.resources.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="footer__link">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust Badges */}
            <div className="footer__trust">
                <div className="container">
                    <div className="footer__trust-badges">
                        <div className="footer__trust-badge">
                            <span className="footer__trust-icon">✓</span>
                            <span>SEC Licensed (RC 629517)</span>
                        </div>
                        <div className="footer__trust-badge">
                            <span className="footer__trust-icon">✓</span>
                            <span>25+ Years</span>
                        </div>
                        <div className="footer__trust-badge">
                            <span className="footer__trust-icon">✓</span>
                            <span>₦47.8B+ Assets Managed</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-content">
                        <p className="footer__copyright">
                            © {currentYear} GoldBanc Management Associates. All rights reserved.
                        </p>
                        <div className="footer__legal">
                            <Link to="/privacy" className="footer__legal-link">Privacy Policy</Link>
                            <Link to="/terms" className="footer__legal-link">Terms & Conditions</Link>
                            <Link to="/risk-disclosure" className="footer__legal-link">Risk Disclosure</Link>
                        </div>
                        <div className="footer__social">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="footer__social-link"
                                    aria-label={social.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
