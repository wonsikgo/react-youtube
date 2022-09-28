import React from "react";
import styles from "./video_search.module.css";

const VideoSearch = () => {
  // const [keyword, setKeyword] = useState([]);

  return (
    <header className={styles.header}>
      <img
        className={styles.logo_image}
        src={`${process.env.PUBLIC_URL}/images/logo.png`}
        alt="logo_image"
      />
      <span className={styles.title}>Youtube</span>
      <input
        className={styles.search_input}
        type="text"
        placeholder="Search.."
      />
      <img
        className={styles.button_image}
        src={`${process.env.PUBLIC_URL}/images/search.png`}
        alt="search_icon"
      />
    </header>
  );
};

export default VideoSearch;
