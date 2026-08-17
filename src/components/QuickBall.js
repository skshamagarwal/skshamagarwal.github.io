import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  MdHome,
  MdPerson,
  MdFolderOpen,
  MdWorkHistory,
  MdMailOutline,
  MdClose,
  MdApps,
} from "react-icons/md";

const QuickBallStyles = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 200;
  display: block;

  @media only screen and (max-width: 768px) {
    bottom: 2rem;
    right: 2rem;
  }

  .quickball-button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--gradient-1);
    border: none;
    cursor: grab;
    touch-action: none;
    user-select: none;
    -webkit-user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 30px rgba(95, 140, 109, 0.4);
    transition: box-shadow 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    z-index: 10;

    svg {
      width: 2.5rem;
      height: 2.5rem;
      color: var(--white);
      pointer-events: none;
    }

    &:hover {
      box-shadow: 0 12px 40px rgba(95, 140, 109, 0.6);
    }

    &:active {
      cursor: grabbing;
    }

    &.dragging {
      cursor: grabbing;
      transition: none;
    }
  }

  .quickball-menu {
    position: absolute;
    ${(props) => (props.openUp ? "bottom: 80px;" : "top: 80px;")}
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    opacity: 0;
    visibility: hidden;
    transform: scale(0.8) translateY(${(props) => (props.openUp ? "20px" : "-20px")});
    transform-origin: ${(props) => (props.openUp ? "bottom right" : "top right")};
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: 5;

    &.active {
      opacity: 1;
      visibility: visible;
      transform: scale(1) translateY(0);
    }

    .menu-item {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      background: var(--gradient-2);
      border: 2px solid var(--white);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 6px 20px rgba(95, 140, 109, 0.3);
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      position: relative;
      text-decoration: none;

      svg {
        width: 2rem;
        height: 2rem;
        color: var(--white);
        transition: all 0.3s ease;
      }

      &:hover {
        transform: scale(1.15);
        box-shadow: 0 10px 30px rgba(247, 244, 234, 0.5);

        svg {
          transform: rotate(10deg);
        }
      }

      ${(props) => {
        const popIn = props.openUp ? "popInUp" : "popInDown";
        const popOut = props.openUp ? "popOutUp" : "popOutDown";
        return [0, 1, 2, 3, 4]
          .map(
            (i) => `
              &:nth-child(${i + 1}) {
                animation: ${
                  props.isOpen
                    ? `${popIn} 0.4s ease ${i * 0.1}s`
                    : `${popOut} 0.3s ease`
                };
              }
            `
          )
          .join("");
      }}
    }
  }

  @keyframes popInUp {
    0% {
      opacity: 0;
      transform: scale(0) translateY(20px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes popOutUp {
    0% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    100% {
      opacity: 0;
      transform: scale(0) translateY(20px);
    }
  }

  @keyframes popInDown {
    0% {
      opacity: 0;
      transform: scale(0) translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes popOutDown {
    0% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    100% {
      opacity: 0;
      transform: scale(0) translateY(-20px);
    }
  }

  .backdrop {
    position: fixed;
    inset: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 4;
    background: rgba(0, 0, 0, 0.3);

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const menuItems = [
  { icon: <MdHome />, label: "Home", path: "/" },
  { icon: <MdPerson />, label: "About", path: "/about" },
  { icon: <MdFolderOpen />, label: "Projects", path: "/projects" },
  { icon: <MdWorkHistory />, label: "Experience", path: "/experience" },
  { icon: <MdMailOutline />, label: "Contact", path: "/contact" },
];

const BALL_SIZE = 60;
const EDGE_MARGIN = 8;

function clampPosition(x, y) {
  const maxX = window.innerWidth - BALL_SIZE - EDGE_MARGIN;
  const maxY = window.innerHeight - BALL_SIZE - EDGE_MARGIN;
  return {
    x: Math.min(Math.max(x, EDGE_MARGIN), Math.max(maxX, EDGE_MARGIN)),
    y: Math.min(Math.max(y, EDGE_MARGIN), Math.max(maxY, EDGE_MARGIN)),
  };
}

const MENU_SPACE_NEEDED =
  80 + menuItems.length * 55 + (menuItems.length - 1) * 16 + 20;

export default function QuickBall() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [openUp, setOpenUp] = useState(true);
  const containerRef = useRef(null);
  const dragInfo = useRef({ dragging: false, moved: false, offsetX: 0, offsetY: 0 });

  const recomputeOpenDirection = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setOpenUp(rect.top > MENU_SPACE_NEEDED);
  };

  useEffect(() => {
    const handleResize = () => {
      setPosition((pos) => (pos ? clampPosition(pos.x, pos.y) : pos));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePointerMove = (e) => {
    if (!dragInfo.current.dragging) return;
    dragInfo.current.moved = true;
    const x = e.clientX - dragInfo.current.offsetX;
    const y = e.clientY - dragInfo.current.offsetY;
    setPosition(clampPosition(x, y));
  };

  const handlePointerUp = () => {
    dragInfo.current.dragging = false;
    setIsDragging(false);
    recomputeOpenDirection();
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
  };

  const handlePointerDown = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    dragInfo.current = {
      dragging: true,
      moved: false,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    };
    setIsDragging(true);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const toggleMenu = () => {
    if (dragInfo.current.moved) {
      dragInfo.current.moved = false;
      return;
    }
    setIsOpen((v) => {
      if (!v) recomputeOpenDirection();
      return !v;
    });
  };

  const handleMenuItemClick = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const positionStyle = position
    ? { top: position.y, left: position.x, right: "auto", bottom: "auto" }
    : undefined;

  return (
    <QuickBallStyles ref={containerRef} isOpen={isOpen} openUp={openUp} style={positionStyle}>
      <div className={`backdrop ${isOpen ? "active" : ""}`} onClick={toggleMenu} />

      <div className={`quickball-menu ${isOpen ? "active" : ""}`}>
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="menu-item"
            onClick={handleMenuItemClick}
            title={item.label}
          >
            {item.icon}
          </NavLink>
        ))}
      </div>

      <button
        className={`quickball-button ${isDragging ? "dragging" : ""}`}
        onPointerDown={handlePointerDown}
        onClick={toggleMenu}
        title="Navigate (drag to move)"
      >
        {isOpen ? <MdClose /> : <MdApps />}
      </button>
    </QuickBallStyles>
  );
}
