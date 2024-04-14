import "./App.css";

export default function Card(props) {
  return (
    <div className="shopping-item">
      <h3>{props.title}</h3>
      <img src="https://source.unsplash.com/random/200x300" alt={props.alt} />
      <div className="description">
        <span>{props.availability}</span>
        <span>{props.points}</span>
      </div>

      <div className="badges">
        <span className="badges-1">{props.style}</span>
        <span className="badges-2">{props.lifestyle}</span>
      </div>

      <button>Add To Cart</button>
    </div>
  );
}
