import'./Login.css'
import { useForm } from 'react-hook-form';
import { sample } from '../../contexts/Users';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  let {login,loginStatus}=useContext(sample)
  let [err,setErr]=useState("")
  const navigate=useNavigate()
  let {register,handleSubmit,formState:{errors}}=useForm()
  async function handleLogin(Usercred){
    login(Usercred)
    if(loginStatus===true){
      navigate("/cart")
      setErr("")
    }
    else{
      setErr("Invaild Username/Password")
    }
    
  }
  useEffect(()=>{
    login()
  },[])
  return (
  
  <div className="card mt-5 w-50 mx-auto text-center bg-light">
     <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
          <fieldset>
            <legend className="mx-auto  text-center">Login</legend>
          {err.length!==0&&<p className='text-center text-danger fs-2'>{err}</p>}
            <div className="form-group mx-auto p-4 text-center">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" {...register('username',{required:true,minLength:4})} id="username" className="form-control" />
              {
            errors.username?.type==='required'&&<p className='text-center text-danger'>Username is required</p>
          }
           {errors.username?.type==='minLength'&&<p className='text-center text-danger'>Min lenght should be 4</p>}
            </div>
         
            <div className="form-group mx-auto p-4 text-center">
              <label htmlFor="password">Password</label>
              <input type="password" {...register('password',{required:true,minLength:4})} name="password" id="password" className="form-control" />
              {errors.password?.type==='required'&&<p className='text-center text-danger'>password is required</p>}
              {errors.password?.type==='minLength'&&<p className='text-center text-danger'>Min lenght should be 4</p>}
            </div>
          

            <div className="form-group mx-auto p-4 text-center">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </fieldset>
        </form>
  </div>
  )
}

export default Login