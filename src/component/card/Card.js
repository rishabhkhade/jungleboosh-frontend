import React, { useContext } from "react";
import "./Card.scss";
import { UserContext } from "../../Context";

const Card = ({ children }) => {
  const { sidebar } = useContext(UserContext);
  return (
    <div className={sidebar ? "card_parent active" : "card_parent"}>
      {children}  {/* Allow children to be rendered inside */}
    </div>
  );
};

export default Card;
