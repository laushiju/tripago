import "./App.css";
import TripList from "./component/TripList";
import { useState } from "react";
function App() {
  const [showTrips, setShowTrips] = useState(true);
  return (
    <div className="App">
      {showTrips && (
        <button onClick={() => setShowTrips(false)}>hide trips</button>
      )}
      {!showTrips && (
        <button onClick={() => setShowTrips(true)}>show trips</button>
      )}
      {showTrips && <TripList />}
    </div>
  );
}

export default App;

//json-server --watch ./data/db.json
//git push https://github.com/laushiju/tripago.git

//#57
