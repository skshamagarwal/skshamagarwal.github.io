import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  MdPerson,
  MdFolderOpen,
  MdWorkHistory,
  MdMailOutline,
  MdArrowForward,
} from "react-icons/md";

const ExploreLinksStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  margin-top: 5rem;

  .explore__card {
    display: block;
    padding: 3rem 2rem;
    background: linear-gradient(135deg, rgba(95, 140, 109, 0.08) 0%, rgba(247, 244, 234, 0.05) 100%);
    border: 1px solid rgba(95, 140, 109, 0.2);
    border-radius: 16px;
    text-align: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    animation: fadeIn 0.8s ease-out;

    svg.explore__icon {
      width: 3.5rem;
      height: 3.5rem;
      color: var(--primary);
      transition: all 0.3s ease;
    }

    .explore__title {
      font-size: 2rem;
      font-family: "Montserrat SemiBold";
      color: var(--white);
      margin-top: 1.5rem;
    }

    .explore__cta {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1rem;
      font-size: 1.4rem;
      color: var(--gray-1);

      svg {
        width: 1.6rem;
        height: 1.6rem;
        transition: transform 0.3s ease;
      }
    }

    &:hover {
      transform: translateY(-10px);
      background: linear-gradient(135deg, rgba(95, 140, 109, 0.15) 0%, rgba(247, 244, 234, 0.1) 100%);
      border-color: rgba(95, 140, 109, 0.5);
      box-shadow: 0 20px 40px rgba(95, 140, 109, 0.2);

      svg.explore__icon {
        transform: scale(1.15) rotate(5deg);
        color: var(--secondary);
      }

      .explore__cta svg {
        transform: translateX(4px);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

const links = [
  { icon: <MdPerson className="explore__icon" />, title: "About", path: "/about" },
  { icon: <MdFolderOpen className="explore__icon" />, title: "Projects", path: "/projects" },
  { icon: <MdWorkHistory className="explore__icon" />, title: "Experience", path: "/experience" },
  { icon: <MdMailOutline className="explore__icon" />, title: "Contact", path: "/contact" },
];

export default function ExploreLinks() {
  return (
    <ExploreLinksStyles>
      {links.map((item) => (
        <Link key={item.path} to={item.path} className="explore__card">
          {item.icon}
          <div className="explore__title">{item.title}</div>
          <div className="explore__cta">
            View <MdArrowForward />
          </div>
        </Link>
      ))}
    </ExploreLinksStyles>
  );
}
