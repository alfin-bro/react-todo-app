import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  background-color: #364F6B;
  color: #F5F5F5;
  border-radius: 20px;
  width: 100vh;
  height: 100vh;
`;

export const Title = styled.h1`
font-family: 'Poppins';
letter-spacing: 2px;
padding: 30px 0 20px 0;
`;

export const Input = styled.input`
width: 600px;
height: 30px;
padding: 10px;
color: #F5F5F5;
background-color:#3FC1C9;
border: none;
outline: none;
border-radius: 10px;
font-size: 16px;
letter-spacing: 1.3px;
font-weight: bold;
margin: 0 0 20px 0;
`;


export const WrapperItem = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
padding: 10px 0;

`;

export const CheckBox = styled.input`
width: 28px;
height: 28px;
border-radius: 50%;
border: none;
outline: none;
`;

export const Li = styled.li`
list-style: none;
width: 400px;
margin: 0 50px;
font-family: 'Poppins';
font-size: 18px;
font-weight: bold;
letter-spacing: 1.4px;
`;

export const ButtonDelete = styled.button`
background-color: #FC5185;
color: #fff;
border: none;
outline: none;
font-weight: bold;
padding: 8px 14px;
font-size: 18px;
`;