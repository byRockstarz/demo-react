import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const User = () => {
  useEffect(() => {
    getUserById();
  }, []);
  const param = useParams();
  const [IsLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  const getUserById = async () => {
    const response = await axios(
      `https://jsonplaceholder.typicode.com/users/${param.userId}`
    );
    const user = response.data;
    setUser(user);
    setIsLoading(false);
  };
  if (IsLoading) {
    return <div> Loading ... </div>;
  }
  return <div>{user.name}</div>;
};

export default User;
