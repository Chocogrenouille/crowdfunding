import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import DonationProgress from "./components/DonationProgress";
import PledgeCard from "./components/PledgeCard";

function App() {
  const [moneyPledged, setMoneyPledged] = useState(0);
  const [pledgers, setPledgers] = useState(0);

  const pledges = [
    {
      name: "Pledge with no reward",
      amountInfo: "",
      description:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
      inputValue: "email-pledge",
      pledgeAmount: 0,
    },
    {
      name: "Bamboo Stand Pledge",
      amountInfo: "Pledge 25€ or more",
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      inputValue: "bamboo-pledge",
      pledgeAmount: 25,
    },
    {
      name: "Black Edition Pledge",
      amountInfo: "Pledge 75€ or more",
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      inputValue: "black-edition-pledge",
      pledgeAmount: 75,
    },
    {
      name: "Mahogany Special Pledge",
      amountInfo: "Pledge 200€ or more",
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list.",
      inputValue: "mahogany-special-pledge",
      pledgeAmount: 200,
    },
  ];

  return (
    <div className="wrapper">
      <Header />
      <DonationProgress moneyPledged={moneyPledged} pledgers={pledgers} />
      <div className="project-card">
        <section>
          <h4>About this project</h4>
          <p className="project-explanation-paragraph">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand. Featuring artisan
            craftsmanship, the simplicity of design creates extra desk space
            below your computer to allow notepads, pens, and USB sticks to be
            stored under the stand.{" "}
          </p>
        </section>
        {pledges.slice(1).map((pledge) => (
          <div key={pledge.name}>
            <PledgeCard
              pledge={pledge}
              allPledges={pledges}
              setMoneyPledged={setMoneyPledged}
              setPledgers={setPledgers}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
