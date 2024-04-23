import { useState } from 'react'
import { GlobalStyles } from './GlobalStyle'
import styled from 'styled-components'
import LogoImg from '/images/logo.svg'
import InputContainer from './components/InputContainer'
import Result from './components/Result'


function App() {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [people, setPeople] = useState('');
  const [errorValue, setErrorValue] = useState(false);

  const handleBillChange = (e) => {
    setBill(e.target.value);
  };

  const handleTipChange = (e) => {
    setTip(e.target.value);
  };

  const handlePeopleChange = (e) => {
    setPeople(e.target.value);

    if (e.target.value !== '0') {
      setErrorValue(false);
    } else {
      setErrorValue(true);
    }
  };

  const handleReset = (e) => {
    setBill('');
    setTip('');
    setPeople('');
    setErrorValue(false);
  }
 

  return (
    <>
      <GlobalStyles/>
      <Container>
        <img src={LogoImg} alt="logo" />
        <div className='card'>
        <InputContainer 
        bill={bill}
        tip={tip}
        people={people}
        errorValue={errorValue}
        onBillChange={handleBillChange}
        onTipChange={handleTipChange}
        setTip = {setTip}
        onPeopleChange={handlePeopleChange}
        />

        <Result bill={bill} tip={tip} people={people} handleReset={handleReset} />
        </div>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    margin: 50px 0 41px;
  }

  .card{
    display: flex;
    flex-direction: column;
    gap: 32px;
    background-color: #FFFFFF;
    padding: 32px;
    box-shadow: 0 32px 43px 0 rgba(79, 166, 175, 0.2);
    background-color: #fff;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }

  @media screen and (min-width:1440px) {
    img{
      margin: 163px 0 88px;
    }

    .card{
        width: 920px;
        flex-direction:row;
        align-items: center;
        gap:  48px;    
        padding: 32px 32px 32px 48px;
        border-radius: 25px;
        box-shadow: 0 32px 43px 0 rgba(79, 166, 175, 0.2);
        margin-bottom: 239px;
  }
  }

`

export default App
