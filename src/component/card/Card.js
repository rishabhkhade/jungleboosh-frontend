import React, { useContext } from "react";
import "./Card.scss";
import { UserContext } from "../../Context";
const Card = () => {
  const { sidebar } = useContext(UserContext);
  return (
    <>
      <div class={sidebar ? "card_parent active" : "card_parent"}></div>
    </>
  );
};

export default Card;
