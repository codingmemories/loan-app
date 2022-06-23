import { useState } from "react";

import { Modal } from "../modal/Modal";

import "./Loan.css";

export const Loan = ({ id, title, available, amount }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="content">
      <h2 className="content__item">{title}</h2>
      <p className="content__text">Available: {available}</p>
      <p className="content__text">Amount: {amount}</p>
      <div className="content__manage">
        <small className="content__info">Invested</small>
        <button
          className="content__button-invest"
          onClick={() => setOpenModal(true)}
        >
          <span className="content__button-invest-text">Invest</span>
        </button>
        {openModal && <Modal />}
      </div>
    </div>
  );
};
