import './Register.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
function Register() {
  let {register,handleSubmit,formState:{errors}}=useForm()
  const navigate=useNavigate()
 async function handleRegister(RegisteredUser){
    try{
      let res=await fetch('http://localhost:3000/users',{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(RegisteredUser)
      })
      console.log(res)
      if(res.status===201){
        navigate('/login')
      }
      else{
        console.error("Registration Failed")
      }
    }
    catch(error){
      console.error(error)
    }
  }
  return (
    <div className="row">
      <div className="card he w-50 mx-auto mt-5 col-sm-11 col-md-6 col-4">
        <form className="card-body" onSubmit={handleSubmit(handleRegister)}>
          <fieldset>
            <legend className="mx-auto  text-center">Register</legend>

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
              <label htmlFor="email">Email</label>
              <input type="email" {...register('email',{pattern:{value:/^[^@\s]+@[^@\s]+\.[^@\s]+$/,message:"Invaild Email" }} )} name="email" id="email" className="form-control" />
            </div>

            <div className="form-group mx-auto p-4 text-center">
              <label htmlFor="num">Phone</label>
              <input type="tel" {...register('num')} name="num" id="num" className="form-control" />
            </div>

            <div className="form-group mx-auto p-4 text-center">
              <label htmlFor="img">Profile URL</label>
              <input type="url" {...register('img',{required:true})} name="img" id="img" className="form-control" />
              {errors.img&&<p className='text-center text-danger'>Prolie URL is required</p>}
            </div>

            <div className="form-group mx-auto p-4 text-center">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Register;
