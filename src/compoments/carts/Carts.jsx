import "./Carts.css";
import { useEffect, useState } from "react";
import { sample } from "../../contexts/Users";
import { useContext } from "react";
function Carts({ job }) {
  const [mouse, setMouse] = useState(false);
  const {currUser}=useContext(sample)
  function handleMouseEnter() {
    setMouse(true);
    setTimeout(() => {
      setMouse(false);
    }, 4000);
  }
  async function handleClick(productObj){
    productObj.username=currUser.username;
    let res=await fetch('http://localhost:4000/cart',{
      method:"POST",
      headers: { "Content-type": "application/json" },
      body:JSON.stringify(productObj)
    })
    console.log(res)
  }

  useEffect(() => {
    handleMouseEnter();
  }, []);

  return (
    <div className="card" >
      <div className="card-body car text-center p-3">
        <div className="lead">{job.id}</div>
        <h3>{job.title}</h3>
        <p className="lead">{job.description}</p>
        <p>Experience: {job.experience}</p>
        <button onClick={handleClick} className="bg-success text-white text-center" onMouseEnter={handleMouseEnter}>
          Add my work
        </button>
        {mouse && (
          <div>
            <p>{job.skills}</p>
            <p>{job.employmentType}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carts;
