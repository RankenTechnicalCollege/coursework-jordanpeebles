import { useState } from 'react';

const ThumbsRating = () => {
  const [thumbsUp, setThumbsUp] = useState(0);
  const [thumbsDown, setThumbsDown] = useState(0);

  const handleThumbsUp = () => {
    setThumbsUp(thumbsUp + 1);
  };

  const handleThumbsDown = () => {
    setThumbsDown(thumbsDown + 1);
  };

  return (
    <div className="thumbs-rating">
      <button className="thumbs-up" onClick={handleThumbsUp}>👍 Thumbs Up: {thumbsUp}</button>
      <button className="thumbs-down" onClick={handleThumbsDown}>👎 Thumbs Down: {thumbsDown}</button>
    </div>
  );
};

export default ThumbsRating;
