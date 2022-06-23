// import { useState } from "react";
import { Loan } from "../loan/Loan";

import "./Home.css";

export const Home = ({ loans }) => {
  return (
    <div className="container">
      <header className="header">
        <div className="header__logo">
          <h1 className="header__logo-title">Current Loans</h1>
        </div>
        <hr />
      </header>
      <ul>
        {loans.map(({ id, title, available, amount }) => (
          <Loan
            key={id}
            id={id}
            title={title}
            available={available}
            amount={amount}
          />
        ))}
      </ul>
      <div className="content__summary">
        <h3 className="content__summary-item">
          Total amount available for investment:
        </h3>
        <p className="content__summary-amount">$238,456</p>
      </div>
    </div>
  );
};
