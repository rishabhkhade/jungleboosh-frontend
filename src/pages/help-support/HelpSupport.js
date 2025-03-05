import React, { useState } from "react";
import "./HelpSupport.scss";
import { MdArrowDownward } from "react-icons/md";
import HeadingTag from "../../component/heading-tag/HeadingTag";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";

function HelpSupport() {
  //faq
  const faqData = [
    {
      no: "01",
      question: "Where should I incorporate my business?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.",
      logo: <MdArrowDownward />,
    },
    {
      no: "02",
      question: "How do I register my company?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.",
      logo: <MdArrowDownward />,
    },
    {
      no: "03",
      question: "What are the benefits of incorporation?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.",
      logo: <MdArrowDownward />,
    },
    {
      no: "03",
      question: "What are the benefits of incorporation?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.",
      logo: <MdArrowDownward />,
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ */}
      <div class="faq-parent parent">
        <div class="faq-cont cont">
          <HeadingTag text="How Can We Help You?" />
          <h2>Discover Frequently Asked Questions from Support</h2>
          <div className="faq-main-dropdown">
            {faqData.map((item, index) => (
              <div key={index} className="faq-dropdown">
                <div className="faq-top" onClick={() => toggleFAQ(index)}>
                  <div className="faq-no">{item.no}</div>
                  <div className="faq-content">
                    <h3>{item.question}</h3>
                    <span
                      className={`arrow-icon ${
                        openIndex === index ? "rotate" : ""
                      }`}
                    >
                      <MdArrowDownward />
                    </span>
                  </div>
                </div>
                {openIndex === index && (
                  <div className="faq-down open">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* contact */}
      <div class="contact-parent parent">
        <div class="contact-cont cont">
        <div className="contact-info">
        <HeadingTag text="Contact Us" />
        <h1>Our Creative Design Solutions Are For People, Contact Our Office.</h1>
        <div className="contact-details">
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <div>
              <p>Contact Phone</p>
              <strong>+55 (9900) 666 22</strong>
            </div>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <div>
              <p>Contact Mail</p>
              <strong>info.kali@gmail.com</strong>
            </div>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <p>Contact Location</p>
              <strong>18/2, Topkhana Road, Australia.</strong>
              <br />
              <strong>27 Division St, New York, USA</strong>
            </div>
          </div>
        </div>
      </div>


      <div className="contact-form">
        <h3>Get In Touch</h3>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Phone Number" />
          <textarea placeholder="Your Message"></textarea>
          <button className="btn" type="submit">➝ Send Message</button>
        </form>
      </div>


        </div>
      </div>
    </>
  );
}

export default HelpSupport;
