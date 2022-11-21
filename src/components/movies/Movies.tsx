import "./Movies.css";
const Movies = (props: any) => {
  return (
    <div className="Movies" key={props.data.id}>
      <div className="movie__info">
        <p>{props.data.title}</p>
        <p>Brand:{props.data.brand}</p>
        <p>Description:{props.data.description}</p>
        <p className="movie__price">
          <small>$</small>
          <strong>{props.data.price}</strong>
        </p>
      </div>
      <img src={`https://image.tmdb.org/t/p/w500/${props.data.backdrop_path}`} alt="image1" />
      <button>Add to favorite</button>
    </div>
  );
};

export default Movies;
