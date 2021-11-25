import React from 'react'
import styled from 'styled-components';

export default function Bottom({stats, dob}) {
    console.log(dob)

    function formatDate(str){
        let split = str.split('-');
        let day = split[0];
        let month = split[1];
        let year = split[2];
        return [month, day, year].join('-');
    }

    function dateFormatter(str){
        str = formatDate(str);
        let currentDate = new Date().getFullYear();
        let personalDate = new Date(str).getFullYear();
        let currentMonth = new Date().getMonth();
        let personMonth = new Date(str).getMonth();
        let currentDay = new Date().getDate();
        let personDay = new Date(str).getDate();;
        let day = currentDay - personDay;
        let month = currentMonth - personMonth;
        if(day <= 0){
            day = day + 30;
            month = month - 1;
        }
        let age = currentDate - personalDate;
        return age + "Y " + month + "M " + day + "D";
    }

    return (
        <BottomContainer>
            <AllStats>
                <StatsContainer>
                    <Stats><p>Time Alive..</p></Stats>
                    <MainStats><p>{dateFormatter(dob)}</p></MainStats>
                </StatsContainer>
                <StatsContainer>
                    <Stats><p>Technology..</p></Stats>
                    <MainStats><p>{stats.technology}</p></MainStats>
                </StatsContainer>
                <StatsContainer>
                    <Stats><p>Strength..</p></Stats>
                    <MainStats><p>{stats.strength}</p></MainStats>
                </StatsContainer>
                <StatsContainer>
                    <Stats><p>Special Powers...</p></Stats>
                    <MainStats><p>{stats.special_powers}</p></MainStats>
                </StatsContainer>
                <StatsContainer>
                    <Stats><p>Loyalty..</p></Stats>
                    <MainStats><p>{stats.loyalty}</p></MainStats>
                </StatsContainer>
            </AllStats>
            <TextContainer>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
            </TextContainer>
        </BottomContainer>
    )
}

const BottomContainer = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Stats = styled.p`
    flex: 2;
    padding: 0;
    margin: 0;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    // clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%);
    font-size: .7em;
    height: 100%;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    // clip-path: polygon(100% 0%, 100% 100%, 10% 100%, 0% 0%);
`
const MainStats = styled(Stats)`
    flex: 1.5;
    align-item: stretch;
    height: 100%;
    background-color: white;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
`

const StatsContainer = styled.div`
    display: flex;
    flex: 1;
    padding: 3px;
    align-items: stretch;
`
const AllStats = styled.div`
    flex: 1.5;
    dipaly: flex;
    align-items: stretch;
    justify-content: center;
`

const TextContainer = styled.p`
    flex: 0.9;
    background-color: rgba(100,0,0,0.5);
    border-radius: 5px;
    align-self: stretch;
    font-size: 12px;
    box-sizing: border-box;
    padding: 15px;
`
