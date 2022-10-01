import { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import VideoSearch from "./components/video_search/video_search";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState([]);

  const onSearch = (keyword) => {
    console.log(keyword);
    youtube
      .search(keyword)
      .then((videos) => {
        console.log(videos);
        setVideos(videos);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    youtube
      .mostPopular()
      .then((videos) => {
        setVideos(videos);
      })
      .catch((error) => console.log("error", error));
  }, []);

  // const getVideoList = (keyword) => {
  //   const requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/search?q=bts&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBYPS3vYonoWeIkqtq2LOMAibPKsnH2rEI`,
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => setVideos(result.items))
  //     .catch((error) => console.log("error", error));
  // };

  return (
    <div className={styles.app}>
      <VideoSearch onSearch={onSearch} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
