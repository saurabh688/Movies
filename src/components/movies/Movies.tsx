import "./Movies.css";
const Movies = (props: any) => {
  return (
    <div className="Movies" key={props.data.id}>
      <div>
        <h4 style={{margin:"0px"}}>{props.data.title} &nbsp;&nbsp; {props.data.original_language === "en"?"":`  ${props.data?.original_title}`}</h4>
        <hr/>
        <p>
          <b>Language:</b>
          {props.data.original_language}
          <span style={{float:"right"}}>
          &nbsp;&nbsp;&nbsp;&#9733;{props.data.vote_average} 
          </span>
          
        </p>
        <p>
          <b>Release Date:</b>
          {props.data.release_date}
          
        </p>

      </div>

      <br />
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.data.backdrop_path}`}
        alt="image1"
        height={"200px"}
        style={{ borderRadius: "40px" }}
      />
      <br />
      <h5 className="movieSummary">{props.data.overview}</h5>
      <br />
      {props.isAdd ? (
        <button className="MovieButton" onClick={props.onClick}>Add to favorite</button>
      ) : null}
    </div>
  );
};

export default Movies;
