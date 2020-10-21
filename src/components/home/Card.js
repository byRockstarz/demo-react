import React, { useState } from "react";
import Modal from "react-modal";
import { customStyles } from "../../pages/Home.js";

function Card({ card, handleDeleteCard, handleUpdate }) {
  const [cardState, setcardState] = useState(card);
  const [modalIsOpen, setIsOpen] = useState(false);
  const OpenModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleChange = (event) => {
    setcardState({ ...cardState, [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  };
  const handleSubmit = () => {
    handleUpdate(cardState);
    closeModal();
  };

  const handleDelete = () => {
    handleDeleteCard(card.id);
  };

  const handleCancel = () => {
    setcardState(card);
    closeModal();
  };

  return (
    <div className="parent_book_listing">
      <Modal // เริ่มต้น   Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input
              name="title"
              value={cardState.title}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Description</label>
            <input
              name="description"
              value={cardState.description}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={cardState.price}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Rating</label>
            <input
              type="number"
              name="rating"
              value={cardState.rating}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>ImageUrl</label>
            <input
              name="imageUrl"
              value={cardState.imageUrl}
              onChange={handleChange}
            />
          </div>
        </form>

        <div className="d-flex">
          <button type="reset" onClick={handleSubmit}>
            ยืนยัน
          </button>
          <button className="ml-auto" type="submit" onClick={handleCancel}>
            ยกเลิก
          </button>
        </div>
      </Modal>

      <div className="d-flex">
        <button onClick={OpenModal}>แก้ไขข้อมูล</button>
        <button className="ml-auto" onClick={handleDelete}>
          ลบข้อมูล
        </button>
      </div>

      <div className="book_listing">
        <div className="wrap_img_book_list">
          <img src={card.imageUrl} className="img_book_list" alt="" />
        </div>

        <div className="wrap_text_book_list">
          <h3 className="book_name">{card.title}</h3>
          <div className="book_meta_info">{card.description}</div>
          <div className="div_book_list_category">คะแนน {card.rating}</div>
        </div>

        <div className="wrap_btn_book_list">ราคา {card.price} บาท</div>
      </div>
    </div>
  );
}

export default Card;
