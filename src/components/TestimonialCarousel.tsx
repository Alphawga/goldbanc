import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './TestimonialCarousel.css';

interface Testimonial {
    content: string;
    author: string;
    role: string;
    company?: string;
    rating: number;
}

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const goTo = (index: number) => {
        setActiveIndex(index);
        setIsAutoPlaying(false);
    };

    const goToPrev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const goToNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    return (
        <div className="testimonial-carousel">
            <div className="testimonial-carousel__container">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`testimonial-card ${index === activeIndex ? 'testimonial-card--active' : ''}`}
                    >
                        <Quote size={48} className="testimonial-card__quote-icon" />

                        <div className="testimonial-card__rating">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={20}
                                    className={`testimonial-card__star ${i < testimonial.rating ? 'testimonial-card__star--filled' : ''}`}
                                />
                            ))}
                        </div>

                        <blockquote className="testimonial-card__content">
                            "{testimonial.content}"
                        </blockquote>

                        <div className="testimonial-card__author">
                            <div className="testimonial-card__avatar">
                                {testimonial.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="testimonial-card__info">
                                <span className="testimonial-card__name">{testimonial.author}</span>
                                <span className="testimonial-card__role">
                                    {testimonial.role}
                                    {testimonial.company && `, ${testimonial.company}`}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation */}
            <div className="testimonial-carousel__nav">
                <button
                    className="testimonial-carousel__arrow"
                    onClick={goToPrev}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={24} />
                </button>

                <div className="testimonial-carousel__dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`testimonial-carousel__dot ${index === activeIndex ? 'testimonial-carousel__dot--active' : ''}`}
                            onClick={() => goTo(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    className="testimonial-carousel__arrow"
                    onClick={goToNext}
                    aria-label="Next testimonial"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}
