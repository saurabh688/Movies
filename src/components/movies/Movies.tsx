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
      <img src={props.data.image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
};

export default Movies;
