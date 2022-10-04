import React, { memo, useRef } from "react";
import styles from "./video_search.module.css";

const VideoSearch = memo((props) => {
  const inputRef = useRef("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    console.log(inputRef.current.value);
    console.log(props);
    if (!inputRef.current.value) return;
    const keyword = inputRef.current.value;
    console.log(`keyword : ${keyword}`);
    props.onSearch(keyword);
  };

  return (
    <header className={styles.header}>
      <img
        className={styles.logo_image}
        src="/images/logo.png"
        alt="logo_image"
      />
      <h1 className={styles.title}>Youtube</h1>
      <input
        className={styles.search_input}
        type="text"
        placeholder="Search.."
        ref={inputRef}
        onKeyPress={handleKeyPress}
      />
      <button className={styles.button} onClick={handleSearch}>
        <img
          className={styles.button_image}
          src="/images/search.png"
          alt="search_icon"
        />
      </button>
    </header>
  );
});

export default VideoSearch;
