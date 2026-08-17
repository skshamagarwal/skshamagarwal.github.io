import React from "react";
import { MdPlace } from "react-icons/md";
import styled from "styled-components";
import PText from "./PText";

const ContactInfoItemStyles = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, rgba(95, 140, 109, 0.1) 0%, rgba(247, 244, 234, 0.05) 100%);
  display: flex;
  align-items: center;
  gap: 2rem;
  border: 1px solid rgba(95, 140, 109, 0.2);
  border-radius: 15px;
  margin-bottom: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(95, 140, 109, 0.4);
    box-shadow: 0 12px 30px rgba(95, 140, 109, 0.2);
    background: linear-gradient(135deg, rgba(95, 140, 109, 0.15) 0%, rgba(247, 244, 234, 0.1) 100%);
  }

  .icon {
    color: var(--white);
    background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
    padding: 1.3rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
    box-shadow: 0 4px 15px rgba(95, 140, 109, 0.3);
  }
  
  svg {
    width: 3.5rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = "this is an info",
}) {
  return (
    <ContactInfoItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ContactInfoItemStyles>
  );
}
