import React from 'react'
import styled from 'styled-components';

const PStyle = styled.div`
    color: var(--gray-1);
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    font-size: 2rem;
    line-height: 1.8em;
    font-weight: 400;
    letter-spacing: 0.3px;
    p {
        margin: 0;
    }
    @media only screen and (max-width: 768px) {
        font-size: 1.6rem;
        line-height: 1.6em;
    }
`;

export default function PText(props) {
    return (
        <PStyle>
            <p>{props.children}</p>
        </PStyle>
    )
}
