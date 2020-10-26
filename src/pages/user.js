import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Profile from "../components/user/profile";
import Post from "../components/user/post";
import Album from "../components/user/album";

const User = () => {
  useEffect(() => {
    getUserById();
  }, []);

  const param = useParams();
  const [IsLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);

  const getUserById = async () => {
    const response = await axios(
      `https://jsonplaceholder.typicode.com/users/${param.userId}`
    );
    const user = response.data;
    setUser(user);
    await getPostsByUserId();
    await getAlbumsByUserId();
    setIsLoading(false);
  };

  const getPostsByUserId = async () => {
    const responsePost = await axios(
      `https://jsonplaceholder.typicode.com/users/${param.userId}/posts`
    );
    const posts = responsePost.data;
    console.log(responsePost);
    setPosts(posts);
  };

  const getAlbumsByUserId = async () => {
    const responseAlbum = await axios(
      `http://jsonplaceholder.typicode.com/users/${param.userId}/albums`
    );
    const albums = responseAlbum.data;
    setAlbums(albums);
  };

  if (IsLoading) {
    return (
      <div className="d-flex">
        <h1 className="mx-auto">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="mg-1">
      <Profile user={user} />

      <div className="d-flex">
        <div className="d-flex flex-wrap bd-grey center">
          <h1 className="width-100 text-align-center mt-3">Post</h1>
          {posts.map((post) => {
            return <Post key={post.id} post={post} album={albums} />;
          })}
        </div>
      </div>

      <div className="d-flex">
        <div className="d-flex flex-wrap bd-grey center">
          <h1 className="width-100 text-align-center mt-3">Albums</h1>
          {albums.map((album) => {
            return <Album key={album.id} album={album} />;
          })}
        </div>
      </div>

      <div className="d-flex">
        <NavLink
          className="mx-auto text-decoration-none bd-grey-3px pd-5px"
          to="/users"
        >
          Back
        </NavLink>
      </div>
    </div>
  );
};
export default User;
