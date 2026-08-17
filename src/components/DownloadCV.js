import React from 'react'
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 1.8rem;
    font-weight: 600;
    background-image: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
    padding: 0.9em 2em;
    border-radius: 12px;
    border: none;
    color: var(--white);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-block;
    letter-spacing: 0.5px;
    box-shadow: 0 4px 15px rgba(95, 140, 109, 0.3);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background-image: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 0;
    }

    .button__label {
      position: relative;
      z-index: 1;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(95, 140, 109, 0.5);
    }

    &:hover::before {
      opacity: 1;
    }

    &:active {
      transform: translateY(-1px);
    }
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.4rem;
      padding: 0.8em 1.8em;
    }
  }
`;

export default function DownloadCV() {
  return (
    <ButtonStyle>
      <a className="button" href={"https://docs.google.com/document/d/1F7rJytrOBecW9mDPQM37BG2RSApb0sZD2kRN8BMBLXc/edit?usp=sharing"} target='_blank' rel="noreferrer">
        <span className="button__label">Download CV</span>
      </a>
    </ButtonStyle>
  )
}
