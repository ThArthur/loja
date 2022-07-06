import styled from "styled-components";

export const HeaderDiv = styled.div`
    border-bottom: solid 1px;
    border-color: #c6c6c6;
    position: -webkit-sticky;
    position: sticky;
    top: -110px;

`;

export const HeaderContact = styled.div`
    background-color: #363636;
    height: 35px;
    width: 100vw;
    display: flex;
    justify-content: center;
`;

export const ItemContact = styled.div`

        display: flex;
        justify-content: space-between;
        width: 1200px;
        max-width: 1200px;

        div{
            height: 35px;
            display: flex;
            align-items: center;
        }

        span{
            color: #FFFFFF;
            font-size: 13px;
            padding-left: 20px;
            padding-right: 20px;
        }

        div:nth-child(1){

            span{
                color: #FFFFFF;
                font-family: 'Roboto', sans-serif;
                font-weight: 600;
            }

        }

        div:nth-child(2){

            display: flex;
            align-items: center;

            div{
                
                border-right: 1px solid;
                border-color: #FFFFFF;

                span{
                    font-family: 'Roboto', sans-serif;
                    font-weight: 100;
                }

            }
            

        }
    
`;

export const HeaderSearch = styled.div`

    display: flex;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto', sans-serif;

    img{
        width: 50px;
        height: 50px;
    }
    
`;

export const OptionsDiv = styled.div`

    display: flex;
    align-items: center;

    svg{
        padding-right: 10px;
        padding-left: 10px;
    }
`;

export const ItemDiv = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    margin-left: 20px;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }


`;

export const QuantItemCarrinho = styled.div`
    display: flex;
    align-items: center;
    background-color: #FF7216;
    padding: 1px 0 1px 0;
    border-radius: 10px;
    color: #FFFFFF;
    font-weight: bold;

`;

export const CategoryDiv = styled.div`
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;

    span{
        height: 100%;
        padding: 10px 20px;
        font-size: 15px;
        font-family: 'Roboto', sans-serif;
    }

`;