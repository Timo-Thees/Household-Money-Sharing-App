import styled from "styled-components"

export const Overlay = styled.div`
background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
--tw-bg-opacity: 0.5;
height: 100%;
width: 100%;
position: fixed;
top: 0px;
right: 0px;
bottom: 0px;
left: 0px;
z-index: 10;
`
export const GreenBox = styled.div`
background-color: #7ECA5A;
outline: 1px solid #358D16;
outline-offset: -20px,
box-shadow: 10px 10px 8px;
min-width: 40vw;
min-height: 30vh;
padding: 30px;
display: flex;
flex-direction: colum;
`

export const Button = styled.button`
background-color: #FFD337;
box-shadow: 5px 5px #BFA74F;
corner-radius: 100%;
`