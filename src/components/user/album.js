import userEvent from "@testing-library/user-event";
import React from "react";
import { Link } from "react-router-dom";

const Album = ({ album }) => {
  return (
    <div>
      <Link
        to={`/user/${album.userId}/album/${album.id}`}
        className="mg-1 d-flex flex-wrap width-300 bd-less-grey"
      >
        {album.title}
      </Link>
    </div>
  );
};
export default Album;
