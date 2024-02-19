import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  background: #fff;
  font-family: 'Arvo', serif;
`;

export const NotFoundContent = styled.div`
  text-align: center;
`;

export const FourZeroFourBg = styled.div`
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);   
  background-position: center;
  width: 700px;  
  height: 400px;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

export const Link404 = styled.a`
  color: #fff!important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
