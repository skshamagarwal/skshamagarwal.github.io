import React from "react";
import styled from "styled-components";

const ToastStyles = styled.div`
  position: fixed;
  top: 3rem;
  right: 3rem;
  z-index: 300;
  max-width: 400px;
  width: calc(100% - 6rem);
  padding: 1.5rem 2rem;
  border-radius: 12px;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  animation: slideInRight 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

  &.success {
    background: linear-gradient(135deg, rgba(95, 140, 109, 0.25) 0%, rgba(95, 140, 109, 0.15) 100%);
    border: 1px solid var(--success);
    color: var(--gray-1);
  }

  &.error {
    background: linear-gradient(135deg, rgba(181, 83, 60, 0.25) 0%, rgba(181, 83, 60, 0.15) 100%);
    border: 1px solid var(--danger);
    color: var(--gray-1);
  }

  &.loading {
    background: linear-gradient(135deg, rgba(95, 140, 109, 0.2) 0%, rgba(95, 140, 109, 0.1) 100%);
    border: 1px solid var(--primary);
    color: var(--gray-1);
  }

  @media only screen and (max-width: 768px) {
    top: 1.5rem;
    right: 1.5rem;
    left: 1.5rem;
    width: auto;
    max-width: none;
  }
`;

const icons = {
  success: "✓",
  error: "✕",
  loading: "⏳",
};

export default function Toast({ status, message }) {
  if (!status) return null;

  return (
    <ToastStyles className={status}>
      <span>{icons[status]}</span>
      <span>{message}</span>
    </ToastStyles>
  );
}
