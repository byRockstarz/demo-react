import React, { useState } from "react";
import Card from "../components/home/Card";
import Modal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


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
  const [modalIsOpen,setIsOpen] = useState(false);
  const [cardState,setcardState] = useState(
    {
      title:'',
      description:'',
      price:'',
      rating:'',
      imageUrl:'',
    }
  );

  const handleClear = () => setCardsState([]); // เช็ทค่าในอาร์เรย์ เท่ากับ 0 คือ ลบทั้งหมด

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  
  

  



  // ฟังชั่นลบทีละการ์ด (การ์ดที่เลือก)

  const handleDeleteCard = (cardId) => {
    const newCardsState = cardsState.filter( (card) => card.id !== cardId)
    setCardsState(newCardsState)
  };



  const handleChange = (event) => {
    setcardState({ ...cardState, [event.target.name] : event.target.value});
    console.log(event.target.name , event.target.value)
  }

  // ฟังก์ชั่นกดยืนยันกรอกข้อมูล

  const handleSubmit = () => {
    setCardsState([...cardsState , {...cardState , id:cardsState.length +1}]);
    setcardState({})
    closeModal()
  }


  

  return (
    <div className="mt-3">
      <button onClick={openModal}>เพิ่มข้อมูล</button>
      <button onClick={handleClear}>ล้างข้อมูล</button>

      <div className="d-flex">
        <Modal              // เริ่มต้น   Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      >
        <form onSubmit = {handleSubmit}>
          
          <div>
            <label>Title</label>
            <input
            name = 'title'
            value = {cardState.title}
            onChange = {handleChange}
            />
          </div>

          <div>
            <label>Description</label>
            <input
            name = 'description'
            value = {cardState.description}
            onChange = {handleChange}
            />
          </div>

          <div>
            <label>Price</label>
            <input
            type = 'number'
            name = 'price'
            value = {cardState.price}
            onChange = {handleChange}
            />
          </div>

          <div>
            <label>Rating</label>
            <input
            type = 'number'
            name = 'rating'
            value = {cardState.rating}
            onChange = {handleChange}
            />
          </div>

          <div>
            <label>ImageUrl</label>
            <input
            name = 'imageUrl'
            value = {cardState.imageUrl}
            onChange = {handleChange}
            />
          </div>

        </form> 
        
        <button onClick={handleSubmit}>ยืนยัน</button>
        
        </Modal>




        {cardsState.map(function (card) {
          return (
            <Card key={card.id} card={card} handleDeleteCard={handleDeleteCard}>
              </Card>
          );
        })}
        
      </div>
      </div>
  );
}

export default Home;
