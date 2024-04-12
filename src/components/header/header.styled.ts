import { motion } from "framer-motion";
import styled from "styled-components";

export const Head = styled.header`
    display: flex;
    width: 100%;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.blue};
    position: relative;

`

export const Nav = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 2rem 4rem;
    align-items: center;
    @media screen and (max-width: 576px) {
        padding: 2rem 2rem;
    }
`

export const Logo = styled.div`
    color: ${({ theme }) => theme.colors.background};

    &>:nth-child(1){
        font-size: 40px;
        font-weight: 600;
    }
    &>:nth-child(2){
        font-size: 20px;
        font-weight: 300;
    }
`

export const Menu = styled.div`

`

export const MenuButton = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    width: 90px;
    height: 45px;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 8px;
    cursor: pointer;

`

export const AsideMenu = styled(motion.div)`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    right: 0;
    top: 0;
    width: 486px;
    z-index: 100;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.blue};
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
    @media screen and (max-width: 576px) {
      width: 330px;
    }


`

export const AsideMenuHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 36px 46px;
    @media screen and (max-width: 576px) {
        padding: 16px 26px;
       
    }
    span{
        font-size: 27px;
        color: ${({ theme }) => theme.colors.background};
        font-weight: 700;
        line-height: 32.91px;
        width: 180px;
    }

`

export const AsideMenuContent = styled(motion.div)`
    display: flex;
    flex-direction: column;
    padding: 36px 46px;
    gap: 22px;
    overflow-y: auto;
    height: 100%;



    @media screen and (max-width: 576px) {
        padding: 16px 26px;
       
    }
`
export const AsideMenuCard = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.background};
    position: relative;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    box-shadow: 2px -2px 10px #0000000D;

    .icon-remove{
        top: -5px;
        position: absolute;
        right: -5px;
        cursor: pointer;
    }
    & > .name{
        display: flex;
        align-items: center;
        font-size: 13px;
        font-weight: 400;
        line-height: 17px;
        width: 113px;
        height: 33px;
    }
    .box{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        @media screen and (max-width: 576px) {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
       
        }
        
        & > .price{
            display: flex;
            font-size: 14px;
            font-weight: 700;
            line-height: 17px;
            height: 17px;
        }
    }
   

   
`

export const AsideMenuCardButtonQ = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;

    & > span{
        font-size: 10px;
        font-weight: 400;
        line-height: 6.1px;
    }
    & > div{
        display: flex;
        align-items: center;
        border: 1px solid  #00000021;
        height: 20px;
        border-radius: 4px;
        padding: 2px 0;
        gap: 0.5rem;
        user-select: none;
        &> div{
            display: flex;
            background-color: #00000021;
            width: 2px;
            height: 80%;
            border-radius: 4px;
        }
        &> span{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2px 4px;
            text-align: center;
            &:hover{
                cursor: pointer;
                box-shadow: inset 2px 0 5px #00000021;
            }
        }

  
    }
`


export const AsideMenuFooter = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.background};
    flex-direction: column;
    padding: 36px 46px;
    @media screen and (max-width: 576px) {
        padding: 16px 26px;
       
    }
    &>.total-prices{
        display: flex;
        justify-content: space-between;
        width: 100%;
        &>  span{
        font-size: 28px;
        font-weight: 700;
        line-height: 15px;
    }
    }
   

`
export const AsideMenuFooterButton = styled.button`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.background};
    border: none;
    align-items: center;
    width: 100%;
    height: 97px;
    font-size: 28px;
    line-height: 15px;
    font-weight: 700;
`






