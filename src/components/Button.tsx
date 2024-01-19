import React from "react"
import { Link } from "react-router-dom"

interface ButtonProps {
  text: string
  override?: string
  link: string
  type: "clear" | "full"
}

const Button: React.FC<ButtonProps> = ({ text, override, link, type }) => {
  const typeStyling =
    type === "clear" ? "text-blue-chinese" : "bg-blue-chinese text-[#FFF]"

  return (
    <Link
      target='_blank'
      rel='noopener noreferrer'
      to={link}
      className={
        "rounded-md border-2 border-blue-chinese p-3 text-center " +
        typeStyling +
        " " +
        override
      }
    >
      {text}
    </Link>
  )
}

export default Button
