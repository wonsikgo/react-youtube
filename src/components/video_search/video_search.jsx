import React, { useState } from "react";
import styles from "./video_search.module.css";

const VideoSearch = () => {
  const [keyword, setKeyword] = useState("");

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (!keyword) return;
    // console.log(keyword);
    console.log(this.props);
    // this.props.onSearch(keyword);
  };

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
        value={keyword}
        onChange={handleKeywordChange}
        onKeyPress={handleKeyPress}
      />
      <img
        className={styles.button_image}
        src={`${process.env.PUBLIC_URL}/images/search.png`}
        alt="search_icon"
        onClick={handleSearch}
      />
    </header>
  );
};

export default VideoSearch;
