import "./App.css"
import Layouts from "./Layouts"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './compoments/home/Home'
import Register from './compoments/register/Register'
import Login from './compoments/login/Login'
import Certifications from "./compoments/certfications/Certifications"
import Cart from "./compoments/cart/Cart"
import profile from "./compoments/Profile/profile"
function App() {
    let browserRouter=createBrowserRouter([
        {
            path:'/',
            element:<Layouts />,
            children:[{
                path:'',
                element:<Home/>
            },
            {
                path:'register',
                element:<Register/>
            },
            {
                path:'login',
                element:<Login/>,
            },
            {
                path:'cart',
                    element:<Cart />,
                    children:[
                        {
                            path:'./profile',
                            element:<profile />
                        }
                    ]
            },
            {
                path:'certifications',
                element:<Certifications/>
            }
        ]
        }
    ])
  return (
    <div><RouterProvider router={browserRouter} /></div>
  )
}

export default App