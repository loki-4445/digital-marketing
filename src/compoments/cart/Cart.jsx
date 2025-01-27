import "./Cart.css";
import { useState, useEffect } from "react";
import Carts from "../carts/Carts";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { sample } from "../../contexts/Users";

function Cart() {
  const [jobs, setJobs] = useState([]);
  const { currUser } = useContext(sample);

  async function getJobs() {
    try {
      let res = await fetch('http://localhost:3000/jobs');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      let data = await res.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  }

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="cart">
      <div className="work">
        <Link to="profile">{currUser?.username}</Link>
        <div className="job row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
          {jobs.map((job) => (
            <div className="col" key={job.id}>
              <Carts job={job} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
