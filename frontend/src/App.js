import "./App.css";
import Home from "./Components/Home";

import Axios from "axios"

function App() {
  Axios({
    method: 'GET',
    url: "http://localhost:5000/",
    headers: {
      "Content-type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
