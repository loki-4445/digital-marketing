import "./Header.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { sample } from "../../contexts/Users"
function Header() {
  let {loginStatus,setLoginStatus}=useContext(sample)
  function logout(){
    setLoginStatus(false)
  }
  return (
   <div>
    <div className="scrolling-banner">
      <p className="lead text-white p-0 ">Welcome to Digital Marketing Freelancher</p>
    </div>
    <div className="nav head " style={{position:"static"}}>
      <div className="nav-list">
        <Link to="/" className="nav-link text-white">Home</Link>
      </div>
      <div className="nav-list">
        <Link to="register" className="nav-link text-white">Register</Link> 
       </div>
      <div className="nav-list">
      {
        loginStatus===true? <Link to="login" onClick={logout} className="nav-link text-white">Logout</Link>:
         <Link to="login" className="nav-link text-white">Login</Link>
      }
      </div>
      <div className="nav-list">
        <Link to="certifications" className="nav-link text-white">Certifications</Link>
      </div>
    </div>
    
   </div>
  )
}

export default Header