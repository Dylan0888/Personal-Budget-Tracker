import React from 'react'
import { SiMoneygram } from "react-icons/si";

const Button = ({text, method, color}) => {

    const colorDict = {
        primary: "bg-[rgb(var(--prim-color))] ",
        secondary:"bg-[rgb(var(--sec-color))] "
    }

    const newText = text === "Budgetly" ? (
      <>
        <SiMoneygram />
        Budgetly
      </>
    )
    : text;

  return (
   <button onClick={method}
        className={`${colorDict[color]} ${text === "Budgetly" ? "text-lg":"text-sm"} flex justify-center items-center gap-1 px-4 py-2 text-white font-bold rounded-md cursor-pointer shadow-md active:scale-110  transform-all duration-100 ease-in-out`}>
        {newText}
    </button>
  )
}

export default Button
