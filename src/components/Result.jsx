import React from 'react';
import { StyledResult } from '../styledComponents/StyledResult';

export default function Result({ bill, tip, people, handleReset }) {
  let tipAmount = 0;
  let totalAmount = 0;

  if (bill && tip && people) {
    tipAmount = (bill * tip) / 100 / people;
    totalAmount = bill / people + tipAmount;
  }


  return (
    <StyledResult>
      <div className="amount">
        <div className="info">
          Tip Amount <br />
          <span>/ person </span>
        </div>
        <div className="tipResult">{tipAmount ? `$${tipAmount.toFixed(2)}` : '$0.00'}</div>
      </div>

      <div className="amount">
        <div className="info">
          Total <br />
          <span> / person </span>
        </div>
        <div className="totalResult">{totalAmount ? `$${totalAmount.toFixed(2)}` : '$0.00'}</div>
      </div>

      <button className="resetBtn" onClick={handleReset}>RESET</button>
    </StyledResult>
  );
}