import React from 'react'
import styled from 'styled-components'

const SectionTitleStyles = styled.div`
    text-align: center;
    animation: fadeIn 0.8s ease-out;
    p {
        font-family: 'RobotoMono Regular';
        font-size: 1.8rem;
        color: var(--primary);
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 1rem;
    }
    h1, h2 {
        font-family: 'Montserrat Bold';
        font-size: 6rem;
        margin-top: 0.5rem;
        text-transform: uppercase;
        background: linear-gradient(135deg, var(--white) 0%, var(--gray-1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 900;
        letter-spacing: 1px;
    }
    @media only screen and (max-width: 768px) {
        p {
            font-size: 1.2rem;
        }
        h1, h2 {
            font-size: 3.6rem;
        }
    }
`;
export default function SectionTitle({ heading, subheading, headingLevel = 2 }) {
    const HeadingTag = headingLevel === 1 ? 'h1' : 'h2';
    return (
        <SectionTitleStyles>
            <p>{subheading}</p>
            <HeadingTag>{heading}</HeadingTag>
        </SectionTitleStyles>
    )
}
