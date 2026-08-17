import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import ServicesSectionItem from "../components/ServicesSectionItem";
import { MdDeveloperMode, MdCode } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";
import DownloadCV from "../components/DownloadCV";
import { FaGlobeAmericas } from "react-icons/fa";
import TestimonialsSection from "../components/TestimonialsSection";
import ExploreLinks from "../components/ExploreLinks";
import useTypewriter from "../hooks/useTypewriter";
import { useState } from "react";

const HomeStyles = styled.div`
  .hero {
    min-height: 500px;
    height: 100vh;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: linear-gradient(135deg, rgba(95, 140, 109, 0.12) 0%, rgba(247, 244, 234, 0.08) 100%);
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(95, 140, 109, 0.25) 0%, transparent 70%);
    border-radius: 50%;
    top: -150px;
    right: -150px;
    animation: float 8s ease-in-out infinite;
    filter: blur(40px);
  }

  .hero::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(247, 244, 234, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    bottom: -100px;
    left: -100px;
    animation: float 10s ease-in-out infinite reverse;
    filter: blur(40px);
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(30px) translateX(10px); }
  }

  @keyframes caretBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  @keyframes popScale {
    0% { opacity: 0; transform: scale(0.85) translateY(10px); }
    60% { opacity: 1; transform: scale(1.03) translateY(0); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }

  .typewriter-cursor {
    display: inline-block;
    width: 3px;
    height: 0.85em;
    margin-left: 5px;
    background: currentColor;
    vertical-align: -0.1em;
    animation: caretBlink 0.9s steps(1) infinite;
  }

  .typewriter-cursor--done {
    animation: none;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .hero__heading {
    font-size: 2rem;
    position: relative;
    z-index: 2;

    .hero__greeting {
      display: inline-block;
      width: 100%;
      color: var(--gray-1);
    }

    .hero__name {
      display: inline-block;
      font-size: 7rem;
      font-family: "Montserrat SemiBold";
      background: var(--gradient-3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: none;
      letter-spacing: 3px;
      font-weight: 900;

      .typewriter-cursor {
        -webkit-text-fill-color: var(--secondary);
        background: var(--secondary);
      }
    }
  }

  .hero__info {
    margin-top: 5rem;
    position: relative;
    z-index: 2;
    animation: popScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    p {
      text-shadow: none;
      margin-bottom: 5rem;
      font-size: 1.5rem;
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
      color: var(--gray-1);
    }
    .buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      a {
        margin: 1rem;
        opacity: 0;
        animation: slideInUp 0.5s ease-out 0.25s both;
      }
      a:nth-child(2) {
        animation-delay: 0.4s;
      }
    }
  }

  .scroll__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -8rem;
    position: relative;
    z-index: 2;
    cursor: pointer;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;

    svg {
      width: 5rem;
      color: var(--primary);
      animation: bounce 1.6s ease-in-out infinite;
      transition: color 0.3s ease;
    }

    &:hover svg {
      color: var(--secondary);
    }
  }

  .explore__section {
    padding: 10rem 0 5rem;
    position: relative;
  }

  .services__section {
    padding: 10rem 0;
    position: relative;
    background: linear-gradient(180deg, transparent 0%, rgba(95, 140, 109, 0.05) 50%, transparent 100%);

    .services__items {
      display: flex;
      gap: 10rem;
      justify-content: space-between;
      margin-top: 5rem;
    }
  }

  .contact__banner {
    padding: 10rem 0;
    .contact__wrapper {
      background: linear-gradient(135deg, var(--deep-dark) 0%, var(--gray-2) 100%);
      border: 1px solid rgba(95, 140, 109, 0.3);
      border-radius: 20px;
      padding: 5rem 0rem;
      text-align: center;
      box-shadow: 0 8px 32px rgba(95, 140, 109, 0.1);
      transition: all 0.4s ease;
      
      &:hover {
        border-color: rgba(95, 140, 109, 0.6);
        box-shadow: 0 12px 48px rgba(95, 140, 109, 0.2);
      }
      
      p {
        font-size: 1.8rem;
        color: var(--gray-1);
      }
      .contact__heading {
        font-size: 4rem;
        margin-bottom: 5rem;
        background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero__heading {
      font-size: 1.5rem;
      .hero__name {
        font-size: 4rem;
      }
    }
    .hero__info {
      .buttons {
        a {
          margin: 0.5rem;
        }
      }
    }

    .scroll__icon {
      margin-top: 0;
    }

    .explore__section {
      padding: 5rem 0 3rem;
    }

    .services__section {
      .services__items {
        flex-direction: column;
        max-width: 350px;
        margin: 0 auto;
        margin-top: 5rem;
        gap: 5rem;
      }
    }

    .contact__heading {
      font-size: 1.8rem;
    }
  }
`;

export default function Home() {
  const [stage, setStage] = useState("greeting");

  const greeting = useTypewriter("Hello, this is", 70, () =>
    setStage((s) => (s === "greeting" ? "name" : s))
  );
  const name = useTypewriter(
    stage === "name" || stage === "info" ? "Saksham Agarwal" : "",
    85,
    () => setStage("info")
  );

  return (
    <HomeStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span className="hero__greeting">
              {greeting}
              <span
                className={`typewriter-cursor ${stage !== "greeting" ? "typewriter-cursor--done" : ""
                  }`}
              />
            </span>
            {stage !== "greeting" && (
              <span className="hero__name">
                {name}
                <span
                  className={`typewriter-cursor ${stage === "info" ? "typewriter-cursor--done" : ""
                    }`}
                />
              </span>
            )}
          </h1>
          {stage === "info" && (
            <div className="hero__info">
              <PText>
                {
                  "I'm a Software Development Engineer at Juspay, building high-performance fintech solutions. I thrive on solving complex problems and turning ideas into impactful, well-crafted software. With every line of code, I aim to push boundaries, learn, and explore new possibilities."
                }
              </PText>
              <div className="buttons">
                <DownloadCV />
                <Button btnLink="/contact" btnText="Contact" outline={true} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className="scroll__icon"
        role="button"
        tabIndex={0}
        aria-label="Scroll to next section"
        onClick={() =>
          document
            .querySelector(".explore__section")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            document
              .querySelector(".explore__section")
              ?.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <BsArrowDown />
      </div>

      <div className="explore__section">
        <div className="container">
          <SectionTitle
            heading="Explore"
            subheading="jump straight to what you're looking for..."
          ></SectionTitle>
          <ExploreLinks />
        </div>
      </div>

      <div className="services__section">
        <div className="container">
          <SectionTitle
            heading="Services"
            subheading="things I can do for you..."
          ></SectionTitle>
          <div className="services__items">
            <ServicesSectionItem
              icon={<FaGlobeAmericas />}
              title="Web Development"
              desc="I build responsive, high-performance websites using Node, React, Django, and HTML & Tailwind, tailored to your requirements."
            />
            <ServicesSectionItem
              icon={<MdDeveloperMode />}
              title="Mobile App Dev"
              desc="I create custom mobile apps, from native Android to cross-platform solutions with React Native, Flutter, and Spring."
            />
            <ServicesSectionItem
              icon={<MdCode />}
              title="Code Support"
              desc="I specialize in a wide range of scripting solutions, from efficient web scraping to developing advanced AIML models, tailored to your needs."
            />
          </div>
        </div>
      </div>

      <TestimonialsSection />

      <div className="contact__banner">
        <div className="container">
          <div className="contact__wrapper">
            <PText>Have a project in mind ?</PText>
            <h3 className="contact__heading">Let me help you</h3>
            <Button btnText="Contact Now" btnLink="/contact"></Button>
          </div>
        </div>
      </div>
    </HomeStyles>
  );
}
