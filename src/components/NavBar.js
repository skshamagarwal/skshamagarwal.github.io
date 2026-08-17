import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavBarStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(180deg, rgba(24, 42, 34, 0.95) 0%, rgba(24, 42, 34, 0.8) 100%);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(95, 140, 109, 0.1);
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: ${(props) => (props.visible ? "translateY(0)" : "translateY(-100%)")};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};

  .wrapper {
    padding: 2rem 3rem;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;

    .logo {
      p {
        display: inline;
        font-size: 1.8rem;
        letter-spacing: 2px;
        font-family: "LilitaOne Regular";
        background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      p + p {
        margin-left: 0.6rem;
      }
    }
  }
`;

export default function NavBar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(window.scrollY > 80);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setScrolled(window.scrollY > 80);
  }, [pathname]);

  const visible = pathname !== "/" || scrolled;

  return (
    <NavBarStyles visible={visible}>
      <div className="wrapper">
        <div className="logo">
          <NavLink to="/">
            <p>SAKSHAM</p>
            <p>AGARWAL</p>
          </NavLink>
        </div>
      </div>
    </NavBarStyles>
  );
}
