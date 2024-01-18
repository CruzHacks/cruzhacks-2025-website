import React from "react"

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
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={link}
      className={
        "rounded-md border-2 border-blue-chinese p-3 text-center " +
        typeStyling +
        " " +
        override
      }
    >
      {text}
    </a>
  )
}

export default Button
