import React from 'react'
import Button from './Button';
import { SiMoneygram } from "react-icons/si";

const Nav = () => {
  return (
    <nav className='bg-white dark:bg-neutral-800 border h-[30%] flex justify-evenly place-items-center p-3 gap-2 shadow-md '> 
        <div>
            <Button text={"Budgetly"} method={()=> console.log("fix later")} color={"primary"}/>
        </div>
        <div className=' text-gray-600 dark:text-neutral-400 '> 
            <ul className='flex gap-10 '>
                <li className='cursor-pointer hover:text-black dark:hover:text-white duration-100 ease-in-out'>Home</li>
                <li className='cursor-pointer hover:text-black dark:hover:text-white duration-100 ease-in-out'>Features</li>
                <li className='cursor-pointer hover:text-black dark:hover:text-white duration-100 ease-in-out'>Pricing</li>
                <li className='cursor-pointer hover:text-black dark:hover:text-white duration-100 ease-in-out'>Help</li>
            </ul>        
        </div>
      
      <div >
        <Button text={"Create Account"} method={""} color={"secondary"}/>      </div>
    </nav>
  )
}

export default Nav

