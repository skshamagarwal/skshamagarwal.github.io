import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 1.8rem;
    font-weight: 600;
    padding: 0.9em 2em;
    border-radius: 12px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease;
    position: relative;
    letter-spacing: 0.5px;
    display: inline-block;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 0;
    }

    .button__label {
      position: relative;
      z-index: 1;
    }

    ${(props) => props.outline
    ? `
        background-color: transparent;
        border: none;
        color: var(--primary);
        box-shadow: inset 0 0 0 2px var(--primary);

        &::before {
          background-color: rgba(95, 140, 109, 0.1);
        }

        &:hover {
          color: var(--accent);
          box-shadow: inset 0 0 0 2px var(--accent), 0 4px 15px rgba(95, 140, 109, 0.3);
        }

        &:hover::before {
          opacity: 1;
        }
      `
    : `
        background-image: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
        border: none;
        color: var(--white);
        box-shadow: 0 4px 15px rgba(95, 140, 109, 0.3);

        &::before {
          background-image: linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%);
        }

        &:hover {
          box-shadow: 0 8px 25px rgba(95, 140, 109, 0.5);
        }

        &:hover::before {
          opacity: 1;
        }
      `}

    &:hover {
      transform: translateY(-3px);
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

export default function Button({
  btnLink = "/",
  btnText = "Click Me",
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline}>
      <Link to={btnLink} className="button">
        <span className="button__label">{btnText}</span>
      </Link>
    </ButtonStyle>
  );
}
