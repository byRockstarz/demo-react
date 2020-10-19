import React from "react";

const Card = ({ hardware }) => {
  return (
    <div className="parent_book_listing">
      <div className="d-flex">
        <button>แก้ไขข้อมูล</button>
        <button className="ml-auto">ลบข้อมูล</button>
      </div>

      <div className="book_listing">
        <div className="wrap_img_book_list">
          <img src={hardware.imageUrl} className="img_book_list"></img>
        </div>

        <div className="wrap_text_book_list">
          <div>
            {hardware.id}. {hardware.name}
          </div>
          <div>{hardware.description}</div>
          <div>{hardware.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
