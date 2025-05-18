import { cardData } from "./card-dummy";
import Card from "./card/card";

const CardList = () => {
  return (
    <>
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </>
  );
};

export default CardList;
