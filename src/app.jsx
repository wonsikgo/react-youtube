import { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import VideoSearch from "./components/video_search/video_search";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    // const requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };

    // fetch(
    //   "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBYPS3vYonoWeIkqtq2LOMAibPKsnH2rEI",
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) => setVideos(result.items))
    //   .catch((error) => console.log("error", error));
    getVideoList();
  }, []);

  const onSearch = (keyword) => {
    console.log(keyword);
  };

  const getVideoList = (keyword) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?q=bts&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBYPS3vYonoWeIkqtq2LOMAibPKsnH2rEI`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className={styles.app}>
      <VideoSearch onSearch={onSearch} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
