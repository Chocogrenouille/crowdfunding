import { useState } from "react";
import MakePledge from "./MakePledge";
import ThankYou from "./ThankYou";

export default function PledgeCard({
  allPledges,
  pledge,
  setMoneyPledged,
  setPledgers,
}) {
  const [showRewards, setShowRewards] = useState(false);
  const [money, setMoney] = useState("");
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [selectedPledge, setSelectedPledge] = useState("");
  const [availablePledges, setAvailablePledges] = useState({
    "bamboo-pledge": 1,
    "mahogany-special-pledge": 3,
    "black-edition-pledge": 3,
  });

  const showRewardsPopup = () => {
    setShowRewards(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {(showRewards || showThankYouMessage) && <div className="overlay"></div>}
      <div
        className={`pledge-card ${
          availablePledges[pledge.inputValue] <= 0 ? "sold-out-pledge" : ""
        }`}
      >
        <div className="pledge-card-headline-wrapper">
          <h5>{pledge.name}</h5>
          <span>Pledge {pledge.pledgeAmount}€ or more</span>
        </div>
        <p>{pledge.description}</p>
        <div className="make-pledge">
          <p>
            <span>{availablePledges[pledge.inputValue]}</span> left
          </p>
          <button
            disabled={availablePledges[pledge.inputValue] <= 0 ? true : false}
            onClick={showRewardsPopup}
          >
            Select Reward
          </button>
        </div>
        {showRewards && (
          <div className="rewards">
            <h4>Back this Project</h4>
            <p>
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
            {allPledges.map((pledge, index) => (
              <MakePledge
                key={index}
                value={pledge.inputValue}
                name={pledge.name}
                amountInfo={pledge.amountInfo}
                description={pledge.description}
                minAmount={pledge.pledgeAmount}
                setSelectedPledge={setSelectedPledge}
                selectedPledge={selectedPledge}
                availablePledges={availablePledges}
                setAvailablePledges={setAvailablePledges}
                setMoney={setMoney}
                money={money}
                setShowRewards={setShowRewards}
                setPledgers={setPledgers}
                setMoneyPledged={setMoneyPledged}
                setShowThankYouMessage={setShowThankYouMessage}
              />
            ))}
          </div>
        )}
      </div>
      {showThankYouMessage && (
        <ThankYou setShowThankYouMessage={setShowThankYouMessage} />
      )}
    </>
  );
}
