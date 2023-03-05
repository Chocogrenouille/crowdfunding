import { ReactComponent as Check } from "../img/icon-check.svg";

export default function ThankYou({ setShowThankYouMessage }) {
  return (
    <div className="thank-you">
      <Check />
      <h5>Thanks for your support!</h5>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button onClick={() => setShowThankYouMessage(false)}>Got it! </button>
    </div>
  );
}
