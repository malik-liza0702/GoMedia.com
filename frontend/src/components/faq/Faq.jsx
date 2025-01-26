import React from 'react'
import { useState } from "react";
import './Faq.css'
function Faq() {
  const [faqs] = useState([
    "Can I recover deleted files from desktop with this software?",
    "Does this software support Mac and Windows platforms?",
    "Is there a free trial available for testing the software?",
    "How secure is the data recovery process?",
    "What is the refund policy for this software?",
  ]);

  const [visibleCount, setVisibleCount] = useState(3);

  const showMoreFAQs = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };
  return (
    <section className="faq-section">
      <p className="faq-section__subheading">FAQ</p>
      <h2 className="faq-section__heading">Frequent Ask Questions</h2>
      <div className="faq-section__list">
        {faqs.slice(0, visibleCount).map((question, index) => (
          <div className="faq-item" key={index}>
            <p className="faq-item__question">{question}</p>
            <span className="faq-item__icon">➔</span>
          </div>
        ))}
      </div>
      {visibleCount < faqs.length && (
        <button className="homeButton" onClick={showMoreFAQs}>
          Show more ➔
        </button>
      )}
    </section>
  )
}

export default Faq;