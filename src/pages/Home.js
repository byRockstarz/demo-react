import React, { useState } from "react";
import Card from "../components/home/Card";

function Home() {
  let cards = [
    {
      id: 1,
      title: "จำเลยรักลวงใจ",
      description: "เป็นนิยายรัก",
      price: 149,
      rating: 3,
      imageUrl:
        "https://cdn-local.mebmarket.com/meb/server1/134219/Thumbnail/web_large2.gif?2",
    },
    {
      id: 2,
      title: "กลยุทธ์",
      description: "เป็นนิยายรัก",
      price: 999,
      rating: 1,
      imageUrl:
        "https://cdn-local.mebmarket.com/meb/server1/134219/Thumbnail/web_large2.gif?2",
    },
    {
      id: 3,
      title: "เดิมพันแค้น",
      description: "เป็นนิยายรัก",
      price: 200,
      rating: 3,
      imageUrl:
        "https://cdn-local.mebmarket.com/meb/server1/134219/Thumbnail/web_large2.gif?2",
    },
    {
      id: 4,
      title: "บ้านสกุลหลิน",
      description: "เป็นนิยายรัก",
      price: 100,
      rating: 4,
      imageUrl:
        "https://cdn-local.mebmarket.com/meb/server1/134219/Thumbnail/web_large2.gif?2",
    },
  ];
  const [cardsState, setCardsState] = useState(cards); 

  function handleClear () {
    setCardsState([]);
  };

  function handleDeleteCard  (cardId)  {
    const newCardsState = cardsState.filter((card) => {
      return card.id !== cardId;
    });
    setCardsState(newCardsState);
  };

  return (
    <div className="mt-3">
      <button onClick={handleClear}>ล้างข้อมูล</button>
      <div className="d-flex">
        {cardsState.map(function (card) {
          return (
            <Card key={card.id} card={card} handleDeleteCard={handleDeleteCard}>
              <div>สวัสดี</div>
              <div>ดีๆๆๆ</div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
