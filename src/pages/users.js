import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card";

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
    return <div>Loading ... </div>;
  }

  return (
    <div>
      {users.map(function (user) {
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Users;
