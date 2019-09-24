import React from "react";

import Card from "../card/card.component";

import "./card-list.styles.css";

const CardList = props => (
  <div className="card-list">
    {props.monsters.map(monster => (
      <Card monster={monster} />
    ))}
  </div>
);

export default CardList;