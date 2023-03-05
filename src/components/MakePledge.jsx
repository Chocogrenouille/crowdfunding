import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function MakePledge({
  value,
  name,
  amountInfo,
  description,
  minAmount,
  setAvailablePledges,
  setSelectedPledge,
  selectedPledge,
  availablePledges,
  money,
  setMoney,
  setShowRewards,
  setPledgers,
  setMoneyPledged,
  setShowThankYouMessage,
}) {
  const [pledgeError, setPledgeError] = useState("");
  const inputRef = useRef();

  const confirmPledge = () => {
    if (selectedPledge === "black-edition-pledge" && money < 75) {
      setPledgeError("Please pledge at least 75€.");
      return;
    }

    if (selectedPledge === "mahogany-special-pledge" && money < 200) {
      setPledgeError("Please pledge at least 200€.");
      return;
    }

    if (selectedPledge === "bamboo-pledge" && money < 25) {
      setPledgeError("Please pledge at least 25€.");
      return;
    }

    if (selectedPledge !== "email-pledge") {
      console.log(availablePledges[selectedPledge]);
      setMoneyPledged((prevState) => prevState + parseInt(money));
      setAvailablePledges((prevState) => ({
        ...prevState,
        [selectedPledge]: availablePledges[selectedPledge] - 1,
      }));
      setPledgeError("");
    }

    setPledgers((prevState) => prevState + 1);
    setShowRewards(false);
    setSelectedPledge("");
    setShowThankYouMessage(true);
  };

  return (
    <div
      className={`pledge-type ${
        selectedPledge === value ? "active-pledge" : "inactive-pledge"
      } ${availablePledges[value] <= 0 ? "sold-out-pledge" : ""}
      ${value}`}
    >
      <label htmlFor={value}>
        <input
          ref={inputRef}
          disabled={availablePledges[value] <= 0 ? true : false}
          type="radio"
          value={value}
          name="pledge-type"
          onChange={() => setSelectedPledge(value)}
        />
        {name} <span>{amountInfo}</span>
      </label>
      {value !== "email-pledge" && (
        <span className="pledges-left">
          <b>{availablePledges[value]}</b> left
        </span>
      )}
      <p className="pledge-description">{description}</p>
      {selectedPledge === value && (
        <div className="enter-pledge-amount">
          {value !== "email-pledge" && (
            <>
              <p>Enter your pledge</p>
              <div className="custom-input">
                €
                <input
                  type="number"
                  required
                  min={minAmount}
                  onChange={(e) => setMoney(e.target.value)}
                />
              </div>
            </>
          )}
          <button onClick={() => confirmPledge()}>Continue</button>
        </div>
      )}
      {pledgeError !== "" && value === selectedPledge && (
        <p className="pledge-error">{pledgeError}</p>
      )}
    </div>
  );
}
