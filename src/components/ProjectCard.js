import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const ProjectCardStyles = styled.div`
  .card {
    margin: 20px;
    width: 350px;
    height: 250px;
    border-style: solid;
    border-radius: 15px;
    border-width: 1px;
    border-color: var(--gray-2);
    background: linear-gradient(135deg, var(--dark-bg) 0%, var(--gray-2) 100%);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--primary), transparent);
      z-index: 10;
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 25px 50px rgba(95, 140, 109, 0.4);
      border-color: var(--primary);
    }
  }

  .card-image {
    position: relative;
    height: 250px;
    overflow: hidden;
  }

  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card:hover .card-image img {
    transform: scale(1.15);
  }

  .card-details {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, rgba(24, 42, 34, 0) 0%, rgba(24, 42, 34, 0.95) 30%, rgba(24, 42, 34, 0.99) 100%);
    color: var(--white);
    padding: 25px 20px;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(100%);
  }

  .card:hover .card-details {
    transform: translateY(0);
  }

  .card-details h3 {
    margin: 0 0 10px 0;
    font-size: 22px;
    font-weight: 700;
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .card-details p {
    margin: 0 0 20px 0;
    font-size: 14px;
    line-height: 1.6;
    color: var(--gray-1);
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .gap-6 {
    gap: 1rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
    border-radius: 8px;
    background: rgba(95, 140, 109, 0.1);
    color: var(--primary);
    transition: all 0.3s ease;

    &:hover {
      background: var(--primary);
      color: var(--white);
      transform: scale(1.2);
    }
  }

  @media only screen and (max-width: 768px) {
    .card {
      width: calc(100% - 40px);
      margin: 20px;
    }

    .card-details h3 {
      font-size: 18px;
    }

    .card-details p {
      font-size: 13px;
    }
  }
`;

export default function ProjectCard({ project }) {
  return (
    <ProjectCardStyles>
      <div className="card">
        <div className="card-image">
          <img
            src={project.img}
            loading="lazy"
            alt={project.name + " project screenshot"}
          />
          <div className="card-details">
            <div className="flex gap-6">
              <h3>{project.name}</h3>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="transition ease-in-out hover:scale-150 cursor-pointer" />
              </a>
            </div>
            <p>{project.desc}</p>
          </div>
        </div>
      </div>
    </ProjectCardStyles>
  );
}
