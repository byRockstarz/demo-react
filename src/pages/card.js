import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <div>
      {user.name}
      <Link to={`user/${user.id}`}>รายละเอียด</Link>
    </div>
  );
};

export default Card;
