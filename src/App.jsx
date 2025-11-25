import { useState } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md";

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
 
   
  

    </>
  )
}

export default App
