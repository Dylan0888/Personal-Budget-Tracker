import { useState } from "react"
import Nav from "./components/Nav";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Button from "./components/Button";

function App() {
  const [theme , setTheme] = useState("light");

  const toggleTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
  }

   <button onClick={toggleTheme}>
      {theme === "light" ? <MdDarkMode/> : <MdLightMode/>}
    </button>






  return (
    <>
      <Nav />
   
  
      <section className="flex flex-col h-120 border">
          <div className="bg-[rgb(var(--prim-color))] flex p-4 gap-2">
            
            
            <div className="flex flex-col gap-5 w-[50%] p-4">
              <h1 className="text-4xl font-extrabold text-white  ">Take control of your money - effortlessly </h1>

              <p className="text-white text-md text-balance">
                See your spending, set budgets and reach your goals - all in one place 
              </p>

              <p className="text-white text-md text-balance">
                Budgetly tracks your income and expenses automatically so you can stop worrying and start planning. Simple setup, smart insights, and secure syncing across devices. 
              </p>

              <div className="flex place-items-center gap-3 text-white">
                <Button text={"Get Started - Its FREEEEE"} method={""} color={"secondary"}/>

                <a href="https://www.google.com/search?q=why&     rlz=1C1VDKB_enGB1121GB1121&oq=why+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg70gEJMjI1MGowajE1qAIIsAIB&sourceid=chrome&ie=UTF-8" 
                target="blank"
                className="hover:underline transition-all ">
                  Why Budgetly?
                </a>
              </div>

            </div>
            
            
            
            
            
            
            
            
            <div className="flex place-content-end bg-red-500 w-[40%] translate-y-1/4 p-5 ">

              <div className="flex flex-col gap-3 bg-white text-black h-full rounded-2xl p-5 w-80 shadow-lg text-neutral-700 ">
                <h1 className="text-3xl font-bold text-black">Welcome back!</h1>
                <p className="text-neutral-700">Sign in to your account to view your budget, log transactions and track progress.
                </p>


                <form action="" className="flex flex-col gap-3">
                  <input type="text" 
                  placeholder="Email"
                   className="outline-2 outline-neutral-400/60 px-2 py-1 rounded-md focus:outline-[rgb(var(--sec-color))] transition-all duration-100 ease-in-out"/>
                   <input 
                   type="text" 
                   placeholder="Password"
                   className="outline-2 outline-neutral-400/60 px-2 py-1 rounded-md focus:outline-[rgb(var(--sec-color))] transition-all duration-100 ease-in-out"/>

                  <div className="flex justify-between text-sm "> 
                    <div className="flex place-items-center ">
                      <input type="checkbox" id="remember"/>
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                     <a href="">Forgot Password?</a>
                  </div>
                      
                      <Button text={"Sign In"} method={""} color={"secondary"}/>
                  </form>
              
                <div className="flex justify-evenly">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </div>
              
                <p className="text-center font-bold text-sm text-neutral-900/90">New Here ? <a href="">Create an Account</a></p>
              
                <p className="">By singing in you agree to our <a href="" className="text-black font-bold text-sm">Terms & Privacy</a></p>
              </div>

           



            </div>










          </div>
          
          
          
          
          <div className="flex justify-around h-[30%]">
            
            <div>1</div>
            <div>2</div>
            <div>3</div>

          </div>
      </section>


       <button onClick={toggleTheme}>
      {theme === "light" ? <MdDarkMode/> : <MdLightMode/>}
    </button>
    </>
  )
}

export default App
