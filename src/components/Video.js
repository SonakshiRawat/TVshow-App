import "./Video.css";
function Video(props) {
  // console.log(props.poster);

  return (
    <button className="watch">
      <a
        target="_blank"
        rel="noreferrer"
        href={`${props.poster?props.poster.url:''}`}
      >
        Watch
      </a>
    </button>
  );
}

export default Video;
