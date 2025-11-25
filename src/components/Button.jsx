import React from 'react'
import { SiMoneygram } from "react-icons/si";

const Button = ({text, method, color}) => {

    const colorDict = {
        primary: "bg-[rgb(var(--prim-color))] active:shadow-[rgb(var(--prim-color)/0.5)] dark:shadow-[rgb(var(--prim-color)/0.3)",
        secondary:"bg-[rgb(var(--sec-color))] active:shadow-[rgb(var(--sec-color)/0.5)] dark:shadow-[rgb(var(--sec-color)/0.3)"
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
        className={`${colorDict[color]} ${text === "Budgetly" ? "text-lg":"text-sm"} flex items-center gap-1 px-4 py-2 text-white font-bold rounded-md cursor-pointer shadow-md active:scale-105 transform-all duration-100 ease-in-out`}>
        {newText}
    </button>
  )
}

export default Button
