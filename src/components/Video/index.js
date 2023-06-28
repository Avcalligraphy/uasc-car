import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { storage } from "../../Fire/Fire";

const Video = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "videos/");
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
          console.log(url);
        });
      });
    });
  }, [imagesListRef]);
  return (
    <div>
      <h1>Video</h1>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=4BgkLvH7T0Y"
        playing={true}
        loop={true}
        width={"100%"}
        height={"100%"}
      />
      {/* <img src={imageUrls} alt="" /> */}
    </div>
  );
};

export default Video;
