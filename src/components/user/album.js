import userEvent from "@testing-library/user-event";
import React from "react";
import { Link } from "react-router-dom";

const Album = ({ album }) => {
  return (
    <div className="d-flex mx-auto">
      <div className="bg-skyblue radian-10 h-200px width-100 mx-auto box-shadow mg-20px">
        <div className="mg-1">
          <Link
            to={`/user/${album.userId}/album/${album.id}`}
            className="text-decoration-none"
          >
            {album.title}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Album;
