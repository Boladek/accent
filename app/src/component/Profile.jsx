import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Bottom from './Bottom';

export default function Profile({ name, dob, stats}) {

    return (
        <ProfileContainer>
            <Header name={name} />
            <Bottom dob={dob} stats={stats}/>
        </ProfileContainer>
    )
}

export const ProfileContainer = styled.div`
    margin: 10px;
    padding: 5px;
    max-width: 30%;
    border: 1px solid black;
    background-color: #fcead2;
    border-radius: 5px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
