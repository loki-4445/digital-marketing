import { Outlet } from "react-router-dom"
import Header from "./compoments/header/Header"
import Footer from "./compoments/footer/Footer"
import Title from "./compoments/title/Title"
function Layouts() {
  return (
    <div className="bg-light">
        <Title/>
        <Header />
        <div className="container m-5" style={{minHeight:"100vh",width:"1200px"}}>
            <Outlet></Outlet>
        </div>
        <Footer />
    </div>
  )
}

export default Layouts