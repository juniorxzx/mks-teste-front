import styled from "styled-components";



export const LoadingIcon = styled.div`
  border: 4px solid ${({theme}) => theme.colors.background};
  border-top: 4px solid ${({theme}) => theme.colors.blue};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { 
        transform: rotate(0deg); 
    }
    100% { 
        transform: rotate(360deg); 
    }
  }
`