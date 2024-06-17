import { useState,useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../util/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../util/firebase";
// import userEvent from "@testing-library/user-event";
const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
//to store msg we use usestate
  const[errorMessage,setErrorMessage]=useState(null);

  // const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleButtonClick=()=>{
     const message=checkValidData(email.current.value,password.current.value);
      setErrorMessage(message);
      if(message)return ;
      if(!isSignInForm){
        //signup logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
           .then((userCredential)=>{
            const user=userCredential.user;
            console.log(user);
           })
           .catch((error)=>{
                 const errorcode=error.code;
                 const errorMessage=error.message;
                 setErrorMessage(errorcode+" "+errorMessage);
           });
          }
          else{

          }


      };
  // };
  const toggleSignInForm=()=>{
         setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
        <Header/>
    <div className="absolute">
    
    {/* 2 {<div> and img} children of  parent div   */}
        <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="logo"
        />
    </div>
    <form onSubmit={(e)=>e.preventDefault()}className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm?"Sign In":"Sign Up"}

        </h1>
        {
          !isSignInForm&&(
            <input
            // ref={name}
            type="text" 
            placeholder="Full Name"
             className="p-4 my-4 w-full bg-gray-700"/>
          )
        }
        <input
        ref={email}
         type="text" 
         placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"/>
        <input
        ref={password}
         type="password"
          placeholder="password"
           className="p-4 my-4 w-full bg-gray-700"/>
           <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button 
        className="p-4 my-6 bg-red-700 w-full rounded-lg   "onClick={handleButtonClick}>
        
        {!isSignInForm?"Sign Up":"Sign In"}
        </button>

        {/* on single form sign in and signup facility provided due to toggle action */}
         <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
         {!isSignInForm?"already user,then sign in":"new user,Sign Up"}
          </p>
    </form>
    </div>
  );
};

export default Login;