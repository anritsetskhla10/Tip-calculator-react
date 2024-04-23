import styled from "styled-components";


const StyledSection = styled.section`
    
    width: 311px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    .bill, .people{
        display: flex;
        flex-direction:column;
        gap:6px;
    }

    label{
        font-size: 16px;
        font-weight: bold;
        text-align: left;
        color: #5e7a7d;
    }

    span{
        color: #E17457;
        margin-left: 10px;
    }

    .tip{
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .buttons{
        display: flex;
        flex-wrap: wrap;
        gap: 17px 16px;
    }

    button,#tipInput{
        width: 147px;
        border: none;
        padding: 6px 17.5px 6px 16.3px;
        border-radius: 5px;
        background-color: #00474b;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        color: #fff;
    }
    #tipInput{
        width: 147px;
        padding: 0;
        background-color: #F3F9FA;
        color: #547878;
    }

    button:focus {
        background-color: #26c2ae;
        color: #00474b;
    }

    #tipInput:focus{
        color: #00474b;
    }

    #billInput{
        border: none;
        padding: 6px 17.5px 6px 19.7px;
        border-radius: 5px;
        background-color: #f3f9fa;
        background-image: url(./images/icon-dollar.svg);
        background-repeat: no-repeat;
        background-position: 17px ;
        font-size: 24px;
        font-weight: bold;
        text-align: right;
        color: #00474b;
    }

    #peopleInput{
        border: ${(props) => props.$errorvalue ? "solid 2px #e17052" : "none"};
        padding: 6px 17.5px 6px 19.7px;
        border-radius: 5px;
        background-color: #f3f9fa;
        background-image: url(./images/icon-person.svg);
        background-repeat: no-repeat;
        background-position: 17px ;
        font-size: 24px;
        font-weight: bold;
        text-align: right;
        color: #00474b;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;;
    }


    @media only screen and (min-width:1440px) {
        width: 379px;
        gap: 40px;

        .bill, .people{
            width: 379px;
        }

        #billInput{
            padding: 6px 17px 6px 19.3px;
        }
        
        #billInput:hover{
            cursor: pointer;
            border: solid 2px #26c2ae;
            background-color: #f3f9fa;
        }

        .buttons{
            gap: 16px 14px;
        }

        button{
            width: 117px;
            padding: 6px 17.5px 6px 16.3px;
        }

        #tipInput{
            width: 116px;
        }

        button:hover, #tipInput:hover{
            cursor: pointer;
            background-color: #9fe8df;
        }

        #peopleInput{
            padding: 6px 17.5px 6px 19.7px;
            margin-bottom: 16px;
        }

        #peopleInput:hover{
            cursor: pointer;
            border: solid 2px #26c2ae;
            background-color: #f3f9fa;
        }

        span{
        margin-left: 84px;
        }

    }

`


export { StyledSection };