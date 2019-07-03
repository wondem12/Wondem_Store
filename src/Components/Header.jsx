import React from "react";


const Header = () => {
  return (
      <div className="vid">
      <video id="background-video" autoPlay loop muted>
          <source src="video/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
  );
};

export default Header;
