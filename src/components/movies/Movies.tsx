import "./Movies.css";
const Movies = (props: any) => {
  return (
    <div className="Movies" key={props.data.id}>
      <div className="movie__info">
        <p>{props.data.title}</p>
        <p>Language:{props.data.original_language}</p>
        <p>Release Date:{props.data.release_date}</p>
        <p className="movie__price">
          <small>$</small>
          <strong>{props.data.price}</strong>
        </p>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.data.backdrop_path}`}
        alt="image1"
      />
      {props.isAdd ? (
        <button onClick={props.onClick}>Add to favorite</button>
      ) : null}
    </div>
  );
};

export default Movies;
