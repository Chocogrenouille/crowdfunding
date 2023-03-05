export default function DonationProgress({ moneyPledged, pledgers }) {
  const today = new Date();
  const endDate = new Date("March 31, 2023 00:00:00");

  const diffTime = Math.abs(endDate - today);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div className="donation-progress">
      <div className="progress-indicators">
        <div className="progress-indicator">
          <span>{moneyPledged}€</span> of 100,000€ backed
        </div>
        <div className="progress-indicator">
          <span>{pledgers}</span> total backers
        </div>
        <div className="progress-indicator">
          {/* randomly set end date of project 31st March */}
          <span>{diffDays}</span> days left
        </div>
      </div>
      <div className="progress-bar">
        <div
          className="bar"
          style={{
            width: `${(moneyPledged / 100000) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
