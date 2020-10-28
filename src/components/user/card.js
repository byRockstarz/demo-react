import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <div className="d-flex mg-2">
      <div className="bd-orange">
        <div className="book-listing pd-1 ">
          <div className="wrap_img_book_list text-align-center pd-1  box-shadow">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxoVYK9gVqDWkfv3blKuxWEO0t9JrH6XSjxg&usqp=CAU"
              alt="picture"
            />
            <div className="flip-card mx-auto">
              <div className="flip-card-inner">
                <div className=" font-size-20px flip-card-front pd-top-1rem">
                  {user.name}
                </div>
                <div className="flip-card-back">
                  <div className="mg-1">
                    <Link
                      className="text-decoration-none d-block font-size-20px"
                      to={`user/${user.id}`}
                    >
                      More ...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
