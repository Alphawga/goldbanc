import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const wealthManagementItems = [
  { name: 'Platinum Account', href: '/wealth-management/platinum', description: 'Comprehensive wealth management' },
  { name: 'Diamond Account', href: '/wealth-management/diamond', description: 'Active stock portfolio management' },
  { name: 'Gold Account', href: '/wealth-management/gold', description: 'Portfolio recovery & monitoring' },
  { name: 'GMA Note', href: '/wealth-management/gma-note', description: 'Guaranteed income instrument' },
];

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Wealth Management', href: '/wealth-management', hasDropdown: true },
  { name: 'Financial Advisory', href: '/financial-advisory' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container container">
        {/* Logo */}
        <Link to="/" className="header__logo">
          <div className="header__logo-icon">G</div>
          <div className="header__logo-text">
            <span className="header__logo-name">GoldBanc</span>
            <span className="header__logo-tagline">Capital</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav hide-mobile">
          {navItems.map((item) => (
            <div key={item.name} className="header__nav-item">
              {item.hasDropdown ? (
                <div
                  className="header__nav-link header__nav-link--dropdown"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <span>{item.name}</span>
                  <ChevronDown size={16} className={`header__dropdown-icon ${dropdownOpen ? 'open' : ''}`} />
                  
                  {/* Dropdown Menu */}
                  <div className={`header__dropdown ${dropdownOpen ? 'header__dropdown--open' : ''}`}>
                    <div className="header__dropdown-content">
                      <Link to="/wealth-management" className="header__dropdown-overview">
                        <span className="header__dropdown-overview-title">Wealth Management</span>
                        <span className="header__dropdown-overview-desc">Explore all investment options</span>
                      </Link>
                      <div className="header__dropdown-items">
                        {wealthManagementItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="header__dropdown-item"
                          >
                            <span className="header__dropdown-item-name">{subItem.name}</span>
                            <span className="header__dropdown-item-desc">{subItem.description}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`header__nav-link ${location.pathname === item.href ? 'header__nav-link--active' : ''}`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <Link to="/get-started" className="btn btn-primary btn-sm hide-mobile">
          Get Started
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="header__toggle hide-desktop"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile-menu ${isOpen ? 'header__mobile-menu--open' : ''}`}>
        <nav className="header__mobile-nav">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.hasDropdown ? (
                <>
                  <button
                    className="header__mobile-link header__mobile-link--dropdown"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {item.name}
                    <ChevronDown size={20} className={dropdownOpen ? 'rotate' : ''} />
                  </button>
                  {dropdownOpen && (
                    <div className="header__mobile-dropdown">
                      <Link to="/wealth-management" className="header__mobile-sublink">
                        Overview
                      </Link>
                      {wealthManagementItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="header__mobile-sublink"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  className={`header__mobile-link ${location.pathname === item.href ? 'header__mobile-link--active' : ''}`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Link to="/get-started" className="btn btn-primary" style={{ marginTop: 'var(--space-4)' }}>
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
