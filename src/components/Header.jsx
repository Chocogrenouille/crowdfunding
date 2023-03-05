import { ReactComponent as Dots } from "../img/logo-mastercraft.svg";
import { ReactComponent as Bookmark } from "../img/icon-bookmark.svg";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [bookmarkedProject, setBookmarkedProject] = useState(false);

  return (
    <header>
      <Navbar />
      <section>
        <Dots />
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="header-buttons">
          <button className="back-button">Back to this project</button>
          <button
            className={bookmarkedProject ? "active" : "inactive"}
            onClick={() => setBookmarkedProject(!bookmarkedProject)}
          >
            <Bookmark />
            <span>{bookmarkedProject ? "Bookmarked" : "Bookmark"}</span>
          </button>
        </div>
      </section>
    </header>
  );
}
