import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './TransactionCarousel.css';

interface Transaction {
    company: string;
    amount: string;
    type: string;
    role: string;
    description: string;
}

interface TransactionCarouselProps {
    transactions: Transaction[];
}

export default function TransactionCarousel({ transactions }: TransactionCarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (!containerRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    useEffect(() => {
        checkScroll();
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            return () => container.removeEventListener('scroll', checkScroll);
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (!containerRef.current) return;
        const scrollAmount = 400;
        containerRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <div className="transaction-carousel">
            {/* Navigation Arrows */}
            <button
                className={`transaction-carousel__arrow transaction-carousel__arrow--left ${!canScrollLeft ? 'transaction-carousel__arrow--disabled' : ''}`}
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                className={`transaction-carousel__arrow transaction-carousel__arrow--right ${!canScrollRight ? 'transaction-carousel__arrow--disabled' : ''}`}
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
            >
                <ChevronRight size={24} />
            </button>

            {/* Cards Container */}
            <div className="transaction-carousel__container" ref={containerRef}>
                {transactions.map((transaction, index) => (
                    <div key={index} className="transaction-card">
                        <div className="transaction-card__header">
                            <h4 className="transaction-card__company">{transaction.company}</h4>
                            <span className="transaction-card__role">{transaction.role}</span>
                        </div>

                        <div className="transaction-card__amount">{transaction.amount}</div>
                        <div className="transaction-card__type">{transaction.type}</div>

                        <p className="transaction-card__description">{transaction.description}</p>
                    </div>
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="transaction-carousel__indicator">
                <span>Scroll to explore →</span>
            </div>
        </div>
    );
}
