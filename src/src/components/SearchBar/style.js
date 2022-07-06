import styled from "styled-components";

export const Bar = styled.div`
    font-size: 20px;
    height: 45px;
    width: 450px;
    background-color: #d9d9d9;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    

    input{
        height: 100%;
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        color: #545454;
        font-family: 'Roboto', sans-serif;
    }

    svg{
        padding: 5px;
        height: 100%;
    }
`;