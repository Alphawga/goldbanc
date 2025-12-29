import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQAccordion.css';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-accordion">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}
                >
                    <button
                        className="faq-item__header"
                        onClick={() => toggleItem(index)}
                        aria-expanded={openIndex === index}
                    >
                        <span className="faq-item__question">{item.question}</span>
                        <ChevronDown size={20} className="faq-item__icon" />
                    </button>
                    <div className="faq-item__content">
                        <div className="faq-item__answer">
                            {item.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
