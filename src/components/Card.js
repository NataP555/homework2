import "../App.css";

export default function Card(props) {
  return (
    <div className="user-info">
      <h3>{props.gender}</h3>
      <div className="user">
       <span>{props.name.title}</span>
       <span>{" "}</span>
       <span>{props.name.first}</span>
       <span>{" "}</span>
       <span>{props.name.last}</span>
      </div>
      <div className="location">
        <div className="street">
         <span>{props.location.street.number}</span>
         <span>{" "}</span>
         <span>{props.location.street.name}</span>
        </div>
        <h3>{props.location.city}</h3>
        <span>{" "}</span>
        <h3>{props.location.state}</h3>
        <span>{" "}</span>
        <h3>{props.location.country}</h3>
        <span>{" "}</span>
        <h3>{props.location.postcode}</h3>
        <div className="coordinates">
         <span>{props.location.coordinates.latitude}</span>
         <span>{" "}</span>
         <span>{props.location.coordinates.longitude}</span>
        </div>
        <div className="timezone">
         <span>{props.location.timezone.offset}</span>
         <span>{" "}</span>
         <span>{props.location.timezone.description}</span>
        </div>
        <h3>{props.email}</h3>
        <div className="dob">
         <span>{props.dob.date}</span>
         <span>{" "}</span>
         <span>{props.dob.age}</span>
        </div>
        <div className="registered">
         <span>{props.registered.date}</span>
         <span>{" "}</span>
         <span>{props.registered.age}</span>
        </div>
        <h3>{props.phone}</h3>
        <h3>{props.cell}</h3>
        <div className="picture">
         <img src={props.picture.large} />
         
        </div>
        <h3>{props.nat}</h3>
      </div>

    </div>
 
  );
}
