import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <div className="d-flex">
      <div className="bd-orange width-300">
        <div className="book-listing pd-1">
          <div className="wrap_img_book_list bd-grey text-align-center width-300">
            <div className="mg-1 font-size-20px">{user.name}</div>
            <Link
              className="text-decoration-none d-block"
              to={`user/${user.id}`}
            >
              More ...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
