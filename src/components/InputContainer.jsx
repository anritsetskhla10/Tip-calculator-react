import React from 'react';
import { StyledSection } from '../styledComponents/StyledInput';

const BtnArr = ['5%', '10%', '15%', '25%', '50%'];

export default function InputContainer({
  bill,
  tip,
  people,
  errorValue,
  onBillChange,
  onTipChange,
  setTip,
  onPeopleChange,
}) {
  const handleClick = (e) => {
    e.preventDefault();
  };


  return (
    <StyledSection $errorvalue={errorValue}>
      <form className="bill" onSubmit={handleClick}>
        <label htmlFor="billInput">Bill</label>
        <input id="billInput" type="number" placeholder="0" value={bill}  onChange={onBillChange} />
      </form>

      <form className="tip" onSubmit={handleClick}>
        <label htmlFor="tipInput">Select Tip %</label>
        <div className="buttons">
          {BtnArr.map((item, index) => (
            <button key={index} onClick={() => setTip(parseInt(item))}>
              {item}
            </button>
          ))}
          <input type="number" id="tipInput" placeholder="Custom" value={tip} onChange={onTipChange} />
        </div>
      </form>

      <form className="people" onSubmit={handleClick}>
        <label htmlFor="peopleInput">
          Number of People <span>{errorValue ? "Can't be zero" : ''}</span>
        </label>
        <input type="number" id="peopleInput" placeholder="0" value={people}  onChange={onPeopleChange} />
      </form>
    </StyledSection>
  );
}