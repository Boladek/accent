import React from 'react';
import styled from 'styled-components';

export default function Header({ name, dob, stats}) {
    return (
        <HeaderContainer>
            <Image />
            <TitleContainer>
                <Title>{name}</Title>
            </TitleContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    height: 50%;
    width: 100%;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const TitleContainer = styled.div`
    position: absolute;
    width: 60%;
    background-color: rgba(0,0,0,0.5);
    bottom: -5%;
    left: 20%;
    // clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%);
    // clip-path: polygon(100% 0%, 100% 100%, 10% 100%, 0% 0%);
`

const Title = styled.h1`
    text-align: center;
    font-size: 1em;
`