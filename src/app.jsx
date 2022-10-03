import { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";
import VideoSearch from "./components/video_search/video_search";

function App({ youtube }) {
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const onSearch = (keyword) => {
    youtube
      .search(keyword)
      .then((videos) => {
        console.log(videos);
        setIsSelected(false);
        setVideos(videos);
      })
      .catch((error) => console.log("error", error));
  };

  const onVideoClick = (video) => {
    console.log(video);
    setVideo(video);
    setIsSelected(true);
  };

  useEffect(() => {
    youtube
      .mostPopular()
      .then((videos) => {
        setVideos(videos);
      })
      .catch((error) => console.log("error", error));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <VideoSearch onSearch={onSearch} />
      <section lassName={styles.content}>
        {isSelected && (
          <div className={styles.detail}>
            <VideoDetail video={video} />
          </div>
        )}
        <VideoList
          videos={videos}
          onVideoClick={onVideoClick}
          display={isSelected ? "list" : "grid"}
        />
      </section>
    </div>
  );
}

export default App;
