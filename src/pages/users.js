import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/user/card";

const Users = () => {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    const users = response.data;
    setUsers(users);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="d-flex">
        <h1 className="mx-auto">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="bg-skyblue d-flex flex-wrap center">
      {users.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Users;
