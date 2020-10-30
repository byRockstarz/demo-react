import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Album = () => {
  useEffect(() => {
    getPhotosByAlbumId();
  }, []);
  const param = useParams();
  console.log(param);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPhotosByAlbumId = async () => {
    const responsePhoto = await axios(
      `https://jsonplaceholder.typicode.com/albums/${param.albumId}/photos`
    );
    const photos = responsePhoto.data;
    setPhotos(photos);
    setIsLoading(false);
  };
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <button>
        <Link to={`/user/${param.userId}`}>back</Link>
      </button>
      <Carousel className="albums-photo-size mx-auto">
        {photos.map((photo) => (
          <div>
            <img src={photo.url} alt={photo.title} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Album;
