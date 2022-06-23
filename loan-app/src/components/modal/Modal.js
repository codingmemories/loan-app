import React from "react";

import "./Modal.css";

export const Modal = () => {
  return (
    <div className="modal__container">
      <div className="modal__container-content">
        <button>X</button>
        <div className="modal__container-title">Invest in Loan</div>
        <div className="modal__container-body">
          <h3>loan title you've clicked</h3>
          <p>Amount available: $12,362</p>
          <p>Loan ends in: 1 month 10 days</p>
        </div>
        <div className="modal__container-footer">
          <h3>Investment amount</h3>
          <form>
            <input type="text" value="0" />
            <input type="submit" value="invest" />
          </form>
        </div>
      </div>
    </div>
  );
};
