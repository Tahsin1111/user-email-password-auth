import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye,FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const [registerError,setRegisterError] =useState('');
  const[success,setSuccess] = useState('');
  const [showPassword,setShowPassword] = useState(false)
  const handleRegister = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    if(password.length < 6){
      setRegisterError('Password should be at least 6 characters or longer');
      return;
    }
    else if(!accepted){
        setRegisterError("please accept our terms and condition");
        return ;
    }
    //reset error
    setRegisterError('');
    setSuccess('');
    
    // create user
    createUserWithEmailAndPassword(auth,email,password)
    .then(result => {
      console.log(result.user);
      setSuccess('User Created Successfully');
    })
    .catch(error =>{
      console.error(error);
      setRegisterError(error.message);
    })
  } 
   
    return (
        <div>
          <div className="mx-auto md:w-1/2">
          <h2 className="text-3xl mb-8 ">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input  className="mb-4 w-full py-2 px-4" type="email" placeholder="Your Email" name="email" required />
                <br />
                <div className="relative">
                <input  className="mb-4 w-full py-2 px-4" 
                type={ showPassword ? "text" : "password" }
                placeholder="Password" 
                name="password" required />
                <span className="absolute mt-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                {
                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                }
                </span>
                </div>
                <br />
                <div>
                    <input  type="checkbox" name="terms" id="terms" />
                    <label className="ml-2" htmlFor="terms"> Accept our <a href="">Terms and Condition</a></label>
                </div>
                <br />
                <input  className="btn btn-secondary mb-4 w-full " type="submit" value="Register" />
            </form>
            {
             registerError && <p className="text-red-800">{registerError}</p>
            }
            {
              success && <p className="text-green-700">{success}</p>
            }
          </div>
        </div>
    );
};

export default Register;