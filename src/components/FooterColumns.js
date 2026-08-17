import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ColStyles = styled.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    color: var(--white);
    font-weight: 700;
    position: relative;
    padding-bottom: 1rem;
    animation: slideInUp 0.8s ease-out;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 3rem;
      height: 3px;
      background: var(--gradient-1);
      border-radius: 2px;
    }
  }
  
  ul {
    li {
      margin-bottom: 1.2rem;
      list-style: none;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      animation: slideInUp 0.8s ease-out 0.1s both;
      
      &:hover {
        transform: translateX(10px);
      }
      
      a {
        font-size: 1.8rem;
        letter-spacing: 1px;
        color: rgba(223, 232, 217, 0.6);
        transition: all 0.3s ease-out;
        text-decoration: none;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease-out;
        }

        &:hover {
          color: var(--white);

          &::before {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default function FooterColumns({
  heading = "col heading",
  links = [
    {
      type: "Link",
      title: "Home",
      path: "/home",
    },
    {
      type: "Link",
      title: "About",
      path: "/about",
    },
  ],
}) {
  return (
    <ColStyles>
      <h2 className="heading">{heading}</h2>
      <ul>
        {links.map((item, index) => (
          <li className="hover:scale-110 transition ease-in-out delay-150" key={index}>
            {item.type === "Link" ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyles>
  );
}
