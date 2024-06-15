import Header from "./Header";

const Login = () => {
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
    <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">Sign  In</h1>
        <input
         type="text" 
         placeholder="Email Address"
          className="p-2 m-2 w-full"/>
        <input
         type="password"
          placeholder="password"
           className="p-2 m-2 w-full"/>
        <button className="p-4 m-4 bg-red-700 w-full">Sign In</button>

    </form>
    </div>
  );
};

export default Login;