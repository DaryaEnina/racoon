import React, { useRef, useState } from "react";
import "./style.scss";

const Loading = ({ onVideoEnd }) => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isSoundAllowed, setIsSoundAllowed] = useState(false);

  const handleVideoClick = () => {
    if (!isVideoPlaying) {
      setIsVideoPlaying(true);
      videoRef.current.play();
    }
  };

  const handleSoundAllowance = () => {
    setIsSoundAllowed(true);
    if (!isVideoPlaying) {
      setIsVideoPlaying(true);
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    onVideoEnd(); // Вызываем колбэк, чтобы уведомить App.js о завершении воспроизведения видео
  };

  return (
    <div className="loading_wrapper">
      <h2>Loading...</h2>
      {!isSoundAllowed && (
        <button className="loading_button" onClick={handleSoundAllowance}>
          Включи енота!
        </button>
      )}
      <video
        ref={videoRef}
        onClick={handleVideoClick}
        onEnded={handleVideoEnd}
        muted={!isSoundAllowed}
      >
        <source src="video/racoon.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Loading;

// import React from "react";
// import ReactPlayer from "react-player";
// import "./style.scss";

// const Loading = () => {
//   return (
//     <div className="loading_wrapper">
//       <h2>Loading...</h2>
//       <video autoPlay controls>
//         <source src="video/racoon.mp4" type="video/mp4" />
//       </video>
//     </div>
//   );
// };

// export default Loading;
