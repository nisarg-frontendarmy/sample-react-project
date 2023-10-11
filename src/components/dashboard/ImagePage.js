import React from "react";
import { useParams } from "react-router-dom";

function ImagePage() {
  const { imageId } = useParams();

  const imageUrl = `https://reqres.in/img/faces/${imageId}-image.jpg`;

  return (
    <div className="main-img">
      <div className="p-5">
        <h2>Image Page</h2>
        <img src={imageUrl} alt="Image" />
      </div>
    </div>
  );
}

export default ImagePage;
