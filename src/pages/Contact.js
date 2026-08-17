import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";
import ContactInfoItem from "../components/ContactInfoItem";
import SectionTitle from "../components/SectionTitle";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import Toast from "../components/Toast";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  background: linear-gradient(180deg, transparent 0%, rgba(95, 140, 109, 0.05) 50%, transparent 100%);
  .contact__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;

    .left {
      width: 100%;
      max-width: 500px;
    }
    .right {
      width: 100%;
      max-width: 500px;
    }
  }
  .contact__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background: linear-gradient(180deg, transparent, var(--primary), transparent);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 768px) {
    .contact__wrapper {
      flex-direction: column;
      .left,
      .right {
        max-width: 100%;
      }
      &::after {
        display: none;
      }
    }
  }
`;

const FormSectionStyle = styled.form`
  width: 100%;
  
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
    position: relative;
    
    label {
      font-size: 1.8rem;
      color: var(--gray-1);
      font-weight: 600;
      display: flex;
      flex-direction: column;
      
      input,
      textarea {
        width: 100%;
        font-size: 1.6rem;
        padding: 1.2rem;
        color: var(--white);
        background: linear-gradient(135deg, rgba(95, 140, 109, 0.08) 0%, rgba(247, 244, 234, 0.05) 100%);
        outline: none;
        border: 2px solid rgba(95, 140, 109, 0.2);
        border-radius: 12px;
        margin-top: 1rem;
        transition: all 0.3s ease;
        font-family: 'RobotoMono Regular';

        &:focus {
          border-color: var(--primary);
          box-shadow: 0 0 20px rgba(95, 140, 109, 0.3);
          background: linear-gradient(135deg, rgba(95, 140, 109, 0.15) 0%, rgba(247, 244, 234, 0.1) 100%);
        }

        &:invalid {
          border-color: var(--accent);
        }

        &.error {
          border-color: var(--danger);
          background: linear-gradient(135deg, rgba(181, 83, 60, 0.1) 0%, rgba(95, 140, 109, 0.05) 100%);
        }

        &.success {
          border-color: var(--success);
          background: linear-gradient(135deg, rgba(95, 140, 109, 0.08) 0%, rgba(95, 140, 109, 0.05) 100%);
        }

        &::placeholder {
          color: rgba(232, 234, 237, 0.5);
        }
      }
      
      textarea {
        min-height: 250px;
        resize: vertical;
      }
    }

    .error-message {
      font-size: 1.4rem;
      color: var(--danger);
      margin-top: 0.5rem;
      animation: slideInUp 0.3s ease;
    }

    .success-message {
      font-size: 1.4rem;
      color: var(--success);
      margin-top: 0.5rem;
      animation: slideInUp 0.3s ease;
    }
  }

  button[type="submit"] {
    font-size: 1.8rem;
    font-weight: 600;
    background-image: var(--gradient-1);
    padding: 0.9em 2em;
    border-radius: 12px;
    border: none;
    color: var(--white);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    letter-spacing: 0.5px;
    box-shadow: 0 4px 15px rgba(95, 140, 109, 0.3);
    position: relative;
    width: 100%;

    &:hover:not(:disabled) {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(95, 140, 109, 0.5);
    }

    &:active:not(:disabled) {
      transform: translateY(-1px);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  @media only screen and (max-width: 768px) {
    button[type="submit"] {
      font-size: 1.4rem;
      padding: 0.8em 1.8em;
    }
  }
`;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const statusMessages = {
    success: "Your message has been sent successfully! I'll respond soon.",
    error: "Failed to send message. Please try again or email skshamagarwal@gmail.com",
    loading: "Sending your message...",
  };

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function sendEmail(e) {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      setStatus("");
      return;
    }

    setIsLoading(true);
    setStatus("loading");

    emailjs
      .sendForm(
        "service_ear9ti5",
        "template_zwpxzec",
        e.target,
        "user_4XxLhG5Qjqm436rvmL6fY"
      )
      .then((res) => {
        setStatus("success");
        setTimeout(() => {
          setStatus("");
        }, 5000);
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
        setIsLoading(false);
      })
      .catch((er) => {
        console.error("EmailJS send failed:", er);
        setStatus("error");
        setTimeout(() => {
          setStatus("");
        }, 5000);
        setIsLoading(false);
      });
  }
  return (
    <>
      <ContactSectionStyle>
        <div className="container">
          <SectionTitle heading="Contact" subheading="Get in touch" headingLevel={1} />
          <div className="contact__wrapper">
            <div className="left">
              <a
                href="mailto:skshamagarwal@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <ContactInfoItem
                  icon={<MdEmail />}
                  text="skshamagarwal@gmail.com"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/skshamagarwal/"
                target="_blank"
                rel="noreferrer"
              >
                <ContactInfoItem icon={<FaLinkedin />} text="Linked In" />
              </a>
              <ContactInfoItem text="Santacruz, Mumbai - India" />
            </div>
            <div className="right">
              <Toast status={status} message={statusMessages[status]} />
              <FormSectionStyle onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) {
                          setErrors({ ...errors, name: "" });
                        }
                      }}
                      className={errors.name ? "error" : name.trim() ? "success" : ""}
                      placeholder="Enter your full name"
                      disabled={isLoading}
                    />
                  </label>
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    Your Email
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) {
                          setErrors({ ...errors, email: "" });
                        }
                      }}
                      className={errors.email ? "error" : email.trim() && validateEmail(email) ? "success" : ""}
                      placeholder="your.email@example.com"
                      disabled={isLoading}
                    />
                  </label>
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">
                    Your Message
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) {
                          setErrors({ ...errors, message: "" });
                        }
                      }}
                      className={errors.message ? "error" : message.trim().length >= 10 ? "success" : ""}
                      placeholder="Tell me about your project or inquiry..."
                      disabled={isLoading}
                    />
                  </label>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                <button type="submit" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </FormSectionStyle>
            </div>
          </div>
        </div>
      </ContactSectionStyle>
      {/* <div>
        <Map />
      </div> */}
    </>
  );
}
