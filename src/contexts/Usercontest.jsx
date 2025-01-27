
import { Children } from "react"
import { sample } from "./Users"
import { useState } from "react"
import { useEffect } from "react"
function Usercontest({children}) {
  let [currUser,setCurrUser]=useState([])
  let [loginStatus,setLoginStatus]=useState(false)
    async function login(userCred){
      try{
        let res=await fetch(`http://localhost:3000/users?username=${userCred.username}&password=${userCred.password}`)
        let userList=await res.json()
        console.log(res)
        console.log(userList)
        if(userList.length!==0){
        setCurrUser(userList)
        setLoginStatus(true)
        }
      }
    
    catch(error){
        console.error(error)
    }
   
}

  return (
   <sample.Provider value={{login,currUser,loginStatus,setLoginStatus}}>{children}</sample.Provider>
  )
}

export default Usercontest