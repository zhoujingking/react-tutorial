import React from "react";
import Card from "@/components/Card";

import { randomize } from "@/utils/card";

class TexasHoldem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: [randomize(), randomize(), randomize(), randomize(), randomize()]
    }
  }

  onCardClick = (index) => {
    const tmpCards = [...this.state.cardList];
    tmpCards[index] = randomize();
    this.setState({
      cardList: tmpCards
    });
  }

  render() {
    const cardListHtml = this.state.cardList.map((card, index) => {
      return (
        <Card key={`${card.suit}-${card.rank}-${index}`} 
          suit={card.suit} rank={card.rank} onClick={() => this.onCardClick(index)}/>
      )
    })
    return (
      <div className="row texas-holdem">
        {cardListHtml}
      </div>
    )
  }
}

export default TexasHoldem;
