import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="d-flex">
      <div className="bg-white mx-auto bd-grey max-width-400">
        <div className="d-flex">
          <h1 className="mx-auto">Profile</h1>
        </div>
        <div className="mg-1">Name : {user.name}</div>
        <div className="mg-1">Username : {user.username}</div>
        <div className="mg-1">Email : {user.email}</div>
        <div className="mg-1 flex-wrap">
          Address : {user.address.street} {user.address.suite}{" "}
          {user.address.city} {user.address.zipcode}
        </div>
        <div className="mg-1">Phone : {user.phone}</div>
        <div className="mg-1">Website : {user.website}</div>
      </div>
    </div>
  );
};

export default Profile;
