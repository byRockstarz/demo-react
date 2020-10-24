import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (<div>
    
      <div className='d-flex'>{user.name}</div>
      <Link to={`user/${user.id}`}>รายละเอียดเพิ่มเติม</Link>
      </div>
  );
};

export default Card;
