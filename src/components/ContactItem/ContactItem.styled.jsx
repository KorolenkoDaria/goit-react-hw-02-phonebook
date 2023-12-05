import styled from "styled-components";

export const Item = styled.li`
    color: #2c3d50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    position: relative;
    padding-left: 35px;

    &::before{
        position: absolute;
        content: "✅";
        top: 4px;
        left: 0;
    }
    
`
export const Name = styled.p`
    color: #2c3d50;
    margin: 0;
    font-weight: 600;
    font-size: 22px;
`
export const Number = styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 20px;
`
export const Button = styled.button`
    cursor: pointer;
    background-color: tomato;
    color: #fff;
    border: 1px solid tomato;
    padding: 4px;
    border-radius: 4px;
    transition: background-color .25s cubic-bezier(.4,0,.2,1), color .25s cubic-bezier(.4,0,.2,1);
    &:hover{
            background-color: #fff;
            color: tomato; 
        }
`