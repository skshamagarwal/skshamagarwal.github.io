import React from "react";
import styled from "styled-components";
import FooterColumns from "./FooterColumns";
import PText from "./PText";

const FooterStyles = styled.footer`
  padding-top: 5rem;
  background: linear-gradient(180deg, var(--deep-dark) 0%, rgba(5, 6, 9, 0.98) 100%);
  border-top: 1px solid rgba(95, 140, 109, 0.15);
  margin-top: 5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(95, 140, 109, 0.5), transparent);
    animation: shimmer 3s infinite;
  }
  
  .container {
    display: flex;
    gap: 2rem;
    animation: fadeIn 0.8s ease-out;
    
    .footer__col1 {
      flex: 2;
      padding-right: 10rem;
      
      .footer__c1__title {
        font-size: 3.5rem;
        margin-bottom: 2rem;
        background: linear-gradient(135deg, var(--white) 0%, var(--gray-1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        font-weight: 900;
      }
      
      p {
        font-size: 1.8rem;
        color: var(--gray-1);
        line-height: 1.8;
        animation: slideInLeft 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
      }
    }
    
    .footer__col2,
    .footer__col3, 
    .footer__col4 {
      flex: 1;
      animation: slideInUp 0.8s ease-out 0.2s both;
    }
  }
  
  .copyright {
    background: linear-gradient(90deg, rgba(95, 140, 109, 0.12) 0%, rgba(247, 244, 234, 0.08) 50%, rgba(95, 140, 109, 0.12) 100%);
    margin-top: 3rem;
    padding: 1.5rem 0;
    text-align: center;
    border-top: 1px solid rgba(95, 140, 109, 0.15);
    animation: fadeIn 1s ease-out 0.4s both;
    
    p {
      display: inline-block;
      font-size: 1.8rem;
      color: var(--gray-1);
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
          margin-top: 5rem;
      }
      .footer__col1 {
        padding: 0;
      }
    }
  }
`;
export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h2 className="footer__c1__title">Saksham Agarwal</h2>
          <PText>
            {
              "Software Development Engineer at Juspay, passionate about solving complex problems and bringing impactful ideas to life through clean, scalable code."
            }
          </PText>
        </div>
        <div className="footer__col2">
          <FooterColumns
            heading="Nav Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                title: "About",
                path: "/about",
                type: "Link",
              },
              {
                title: "Projects",
                path: "/projects",
                type: "Link",
              },
              {
                title: "Experience",
                path: "/experience",
                type: "Link",
              },
              {
                title: "Contact",
                path: "/contact",
                type: "Link",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterColumns
            heading="Social Links"
            links={[
              {
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/skshamagarwal/",
              },
              {
                title: "Github",
                path: "https://github.com/skshamagarwal",
              },
              {
                title: "Instagram",
                path: "https://www.instagram.com/_sakshmmm/",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterColumns
            heading="Coding Profiles"
            links={[
              {
                title: "HackerRank",
                path: "https://www.hackerrank.com/skshamagarwal",
              },
              {
                title: "LeetCode",
                path: "https://leetcode.com/skshamagarwal/",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p> © {new Date().getFullYear()} · Saksham Agarwal</p>
        </div>
      </div>
    </FooterStyles>
  );
}
