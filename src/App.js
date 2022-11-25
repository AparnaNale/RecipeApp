

 import "./App.css";
import { useState } from "react";
import { Products } from "./component/Products";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "fb59f28f";
  const YOUR_APP_KEY = "c313ceecec630f50464ba9bec8d76e3e";

  const submitHandler = (e) => {
    e.preventDefault();
    
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=15&calories=591-722&health=alcohol-free`
    )
      .then((responce) => responce.json())
      .then((data) => setData(data.hits));
  };
  return (
    <div className="App">
      <h4>Food Recipe App</h4>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> <br /> <br />
        <input className="btn btn-primary" type="submit" value="Search" />
      </form>

      {data.length>=1 ? <Products data={data} /> : null}
    </div>
  );
}

export default App;

