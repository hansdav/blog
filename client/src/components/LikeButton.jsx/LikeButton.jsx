import "./LikeButton.css";

const LikeButton = (props) => {
  return <button className="likeButton" onClick={props.onLikeButtonClicked}>♥</button>;
};

export default LikeButton;
