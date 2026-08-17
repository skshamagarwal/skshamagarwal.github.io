import React from "react";
import PText from "../components/PText";
import styled from "styled-components";
import AboutItems from "../components/AboutItems";
import Img from "../assets/images/img.jpeg";
import DownloadCV from "../components/DownloadCV";

const AboutStyles = styled.div`
  padding: 16rem 0 10rem 0;
  background: linear-gradient(180deg, transparent 0%, rgba(95, 140, 109, 0.04) 50%, transparent 100%);
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    animation: fadeIn 0.8s ease-out;
    .left {
      flex: 3;
      .about__subheading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
        color: var(--primary);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        span {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          padding: 0.8rem 1.5rem;
          border-radius: 12px;
          color: var(--white);
          display: inline-block;
          margin-top: 0.5rem;
          box-shadow: 0 4px 15px rgba(95, 140, 109, 0.3);
        }
      }
      .about__heading {
        font-size: 3.6rem;
        margin-bottom: 3rem;
        background: linear-gradient(135deg, var(--white) 0%, var(--gray-1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 900;
      }
      .about__info {
        margin-bottom: 5rem;
        padding-right: 5rem;
        p {
          max-width: 100%;
          font-size: 1.5rem;
          color: var(--gray-1);
          line-height: 1.8;
        }
      }
    }
    .right {
      margin-right: 20px;
      flex: 1.5;
      img {
        border: 2px solid var(--primary);
        border-radius: 16px;
        box-shadow: 0 10px 40px rgba(95, 140, 109, 0.3);
        transition: all 0.4s ease;
        
        &:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 50px rgba(95, 140, 109, 0.4);
          border-color: var(--secondary);
        }
      }
    }
  }

  .about__info__items {
    margin-top: 15rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem, 2rem;
    .top-section {
      flex-direction: column;
      gap: 7rem;
      .left {
        flex: 3;
        .about__subheading {
          font-size: 1.8rem;
        }
        .about__heading {
          font-size: 3rem;
        }
        .about__info {
          margin-bottom: 3rem;
          padding-right: 0;
        }
      }
    }
  }
`;

export default function About() {
  return (
    <AboutStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Saksham Agarwal</span>
            </p>
            <h1 className="about__heading">
              Passionate Software Engineer & Tech Innovator
            </h1>
            <div className="about__info">
              <PText>
                I'm a Software Development Engineer at JUSPAY, based in Mumbai, specializing in building high-performance fintech solutions. With expertise in full-stack development and a proven track record of delivering scalable applications, I'm passionate about solving complex problems and creating elegant code.
                <br />
                <br />
                Beyond my professional work, I'm deeply invested in competitive programming, open-source contributions, and mentoring. I believe technology is a superpower that can transform ideas into reality. My journey in tech has taught me that continuous learning and innovation are keys to success in this ever-evolving field.
              </PText>
            </div>
            <DownloadCV />
          </div>
          <div className="right">
            <img loading="lazy" src={Img} alt="Saksham Agarwal" />
          </div>
        </div>

        <div className="about__info__items">
          <AboutItems
            heading="My Skills"
            entries={[
              {
                title: "FrontEnd",
                items: [
                  "HTML",
                  "CSS",
                  "SCSS",
                  "React JS",
                  "Rescript",
                  "Tailwind",
                ],
              },
              {
                title: "Databases",
                items: ["MySQL", "MongoDB"],
              },
              {
                title: "BackEnd",
                items: ["Django", "Node"],
              },
              {
                title: "App Development",
                items: ["Flutter", "Dart", "Firebase", "Android Native"],
              },
              {
                title: "Languages",
                items: ["Python", "C++", "JavaScript", "Haskell", "Java"],
              },
            ]}
          />
          <AboutItems
            heading="Education"
            entries={[
              {
                title: "B.Tech - CSE",
                items: [
                  "D.Y. Patil International University, Akurdi, Pune",
                  "UGC",
                  "CGPA: 8.9",
                ],
              },
              {
                title: "HSC",
                items: [
                  "S.T. John's Senior Secondary School, Aburoad, Rajasthan",
                  "CBSE",
                  "CGPA: 7.2",
                ],
              },
            ]}
          />
        </div>
      </div>
    </AboutStyles>
  );
}
