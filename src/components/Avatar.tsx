import React from "react"
import { default as BoringAvatars } from "boring-avatars"

const colors = [
  "#190CA6",
  "#13E4CA",
  "#F9D318",
  "#F9A318",
  "#ECBC50",
  "#E558F4",
  "#8924F1",
]

interface AvatarProps {
  size?: number
  email: string
}

const Avatar = ({ email, size = 30 }: AvatarProps) => {
  return (
    <BoringAvatars size={size} name={email} variant='beam' colors={colors} />
  )
}

export default Avatar
