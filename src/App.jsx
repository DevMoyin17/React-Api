import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [users, setUsers] = useState([]);

  // Function to fetch data
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="App">
      <div className="d-flex justify-content-center mt-4">
        <button onClick={fetchData} className="btn btn-primary">
          Click To Generate User Info
        </button>
      </div>

      <div className="container mt-4">
        <div className="row">
          {users.map((user) => (
            <div key={user.id} className=" col-lg-4 mb-4">
              <div
                className="card d-flex flex-column box-shadow align-items-center"
                style={{ width: "18rem" }}>
                  
                <div className="card-body">
                  <h5 className="card-title"> Name: {user.name}</h5>
                  <p className="card-text">Id: {user.id}</p>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">Username: {user.username}</p>
                  <p className="card-text">
                    Address: {user.address.street}, {user.address.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
