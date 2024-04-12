import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

`
export const AlternativeMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`


export const Cards = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    padding: 4rem 6rem;
    @media screen and (max-width: 576px) {
        padding: 2rem 2rem;
        justify-items: center;
    }
`

export const Card = styled(motion.div)`
    display: flex;

    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 2px 0 8px #00000022;
    width: 250px;
    height: 300px;
    border-radius: 10px;
`

export const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    &> p{
        font-weight: 300;
        line-height: 12px;
        font-size: 10px;
        width: 192px;
        height: 25px;
    }
`

export const CardDetailsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.text};
    width: 100%;
    &>:nth-child(1){
        width: 124px;
        height: 38px;
        font-weight: 400;
        line-height: 19px;
        font-size: 16px;
    }
    &>:nth-child(2){
        display: flex;
        align-items: center;
        font-weight: 700;
        line-height: 15px;
        border-radius: 5px;
        color: ${({ theme }) => theme.colors.background};
        background-color: ${({ theme }) => theme.colors.accent};
        padding: 4px 7px;
        font-size: 16px;
    }
`

export const CardButton = styled.button`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    justify-content: center;
    text-transform: uppercase;
    gap: 1rem;
    width: 100%;
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.blue};
    border: none;
    padding: 0.5rem 1rem;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 5px;

    span{
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
    }

    &:hover{
        cursor: pointer;
    }
`