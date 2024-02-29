import styled from 'styled-components';

export const Typography = styled.div`
font-family: "Cinzel", serif;
font-optical-sizing: auto;
font-weight: 500;
font-style: normal;
font-size: 20px;
  height: 300px;
  overflow-y: auto;
  padding: 0;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5); 
  border-right: .15em solid black;
  &::-webkit-scrollbar {
    display: none;
  }`;
