import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="d-flex">
      <div className="bg-skyblue mx-auto box-shadow d-flex width-800 allradian-10">
        <img
          className="mg-20px box-shadow radian-60"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxoVYK9gVqDWkfv3blKuxWEO0t9JrH6XSjxg&usqp=CAU"
        />

        <div>
          <div className="mg-1 font-weight-600">Name : {user.name}</div>
          <div className="mg-1 font-weight-600">Username : {user.username}</div>
          <div className="mg-1 font-weight-600">Email : {user.email}</div>
          <div className="mg-1 flex-wrap font-weight-600">
            Address : {user.address.street} {user.address.suite}{" "}
            {user.address.city} {user.address.zipcode}
          </div>
          <div className="mg-1 font-weight-600">Phone : {user.phone}</div>
          <div className="mg-1 font-weight-600">Website : {user.website}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
