import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./TripList.css";

export default function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, isPending, error } = useFetch(url);

  return (
    <div className="trip-list">
      <h2>TripList</h2>
      {isPending && <h4>Loading....</h4>}
      {error && <h4>{error}</h4>}
      <ul>
        {!isPending &&
          trips &&
          trips.map((trips) => (
            <li key={trips.id}>
              <h3>{trips.title}</h3>
              <p>{trips.price}</p>
            </li>
          ))}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
        >
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
}
