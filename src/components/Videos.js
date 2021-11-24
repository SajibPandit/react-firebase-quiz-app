import React from "react";
import styles from "../styles/Videos.module.css";
import Video from "./Video";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";

function Videos() {
  const { loading, error, videos } = useVideoList();
  return (
    <div className={styles.videos}>
      {videos.length > 0 &&
        videos.map((video) => (
          <Link to="/quiz" key={video.youtubeID}>
            <Video title={video.title} id={video.youtubeID} noq={video.noq} />
          </Link>
        ))}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default Videos;