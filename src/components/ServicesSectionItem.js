import React from "react";
import { MdDesktopMac } from "react-icons/md";
import styled from "styled-components";
import PText from "./PText";

const ServicesSectionItemStyles = styled.div`
  text-align: center;
  animation: fadeIn 0.8s ease-out;
  display: flex;
  .services__item {
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 2rem;
    background: linear-gradient(135deg, rgba(95, 140, 109, 0.08) 0%, rgba(247, 244, 234, 0.05) 100%);
    border: 1px solid rgba(95, 140, 109, 0.2);
    border-radius: 16px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(95, 140, 109, 0.2), transparent);
      transition: left 0.6s ease;
    }

    &:hover {
      transform: translateY(-10px);
      background: linear-gradient(135deg, rgba(95, 140, 109, 0.15) 0%, rgba(247, 244, 234, 0.1) 100%);
      border-color: rgba(95, 140, 109, 0.5);
      box-shadow: 0 20px 40px rgba(95, 140, 109, 0.2);
    }

    &:hover::before {
      left: 100%;
    }

    svg {
      height: 4rem;
      margin-bottom: 1.5rem;
      color: var(--primary);
      transition: all 0.3s ease;
      
      &:hover {
        transform: scale(1.2) rotate(5deg);
        color: var(--secondary);
      }
    }
    
    .services__item__title {
      font-size: 2.5rem;
      font-family: "Montserrat SemiBold";
      background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
    }
    
    p {
      font-size: 1.6rem;
      margin-top: 1.5rem;
      color: var(--gray-1);
      line-height: 1.6;
    }
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = "Web Design",
  desc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium minus, eos ullam omnis aliquid voluptate.",
}) {
  return (
    <ServicesSectionItemStyles>
      <div className="services__item">
        {icon}
        <div className="services__item__title">{title}</div>
        <PText>{desc}</PText>
      </div>
    </ServicesSectionItemStyles>
  );
}
