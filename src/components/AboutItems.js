import React from "react";
import styled from "styled-components";
import PText from "./PText";

const AboutItemsStyles = styled.div`
  margin-bottom: 8rem;
  animation: fadeIn 0.8s ease-out;

  .heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    text-transform: uppercase;
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 900;
  }
  
  .entries {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2rem;
    gap: 2rem;
    
    .title {
      font-size: 2.4rem;
      color: var(--primary-light);
      font-weight: 600;
      min-width: 150px;
    }
    
    .items {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      
      .item {
        background: linear-gradient(135deg, rgba(95, 140, 109, 0.15) 0%, rgba(247, 244, 234, 0.08) 100%);
        border: 1px solid rgba(95, 140, 109, 0.3);
        padding: 0.8rem 1.5rem;
        border-radius: 12px;
        transition: all 0.3s ease;
        
        &:hover {
          background: linear-gradient(135deg, rgba(95, 140, 109, 0.25) 0%, rgba(247, 244, 234, 0.15) 100%);
          border-color: rgba(95, 140, 109, 0.6);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(95, 140, 109, 0.2);
        }

        p {
          font-size: 1.6rem;
          color: var(--gray-1);
          margin: 0;
          font-weight: 500;
        }
      }
    }
  }
  
  @media only screen and (max-width: 768px) {
    .heading {
      font-size: 3rem;
    }
    .entries {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
      
      .items {
        position: initial;
        gap: 1rem;
        margin-left: 0;
      }
      
      .title {
        font-size: 2rem;
      }
    }
  }
`;
export default function AboutItems({
  heading = "Heading",
  entries = {
    title: "Title",
    items: ["HTML", "CSS"],
  },
}) {
  return (
    <AboutItemsStyles>
      <h2 className="heading">{heading}</h2>
      {entries.map((entry, idx) => (
        <div className="entries" key={idx}>
          <h3 className="title">{entry.title}</h3>
          <div className="items">
            {entry.items.map((item, index) => (
              <div className="item" key={index}>
                <PText>{item}</PText>
              </div>
            ))}
          </div>
        </div>
      ))}
    </AboutItemsStyles>
  );
}
