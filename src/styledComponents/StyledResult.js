

import styled from "styled-components";


const StyledResult = styled.section`
    width: 311px;
    display: flex;
    flex-direction: column;
    padding: 37px 22px 24px 24px;
    border-radius: 15px;
    background-color: #00474b;

    .amount{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .info{
        font-size: 16px;
        font-weight: bold;
        text-align: left;
        color: #fff;
    }

    span{
        color: #7f9d9f;
    }

    .tipResult, .totalResult{
        font-size: 32px;
        font-weight: bold;
        letter-spacing: -0.67px;
        text-align: right;
        color: #26c2ae;
    }

    .resetBtn{
        width:265px;
        margin-top: 12px;
        border: none;
        padding: 9px 32px 9px 33px;
        border-radius: 5px;
        background-color: #26c2ae;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        color: #00474b;
    }

    .resetBtn:hover{
        cursor: pointer;
        background-color: #9fe8df;
    }

    @media only screen and (min-width:1440px) {
        width: 413px;
        padding: 40px;

        .amount{
            margin-bottom: 25px;
        }

        .tipResult, .totalResult{
            font-size: 48px;
            letter-spacing: -1px;
        }

        .resetBtn{
            margin-top: 122px;
            width: 333px;
            padding: 9px 40px 9px 37px;
        }

    }

`



export { StyledResult}