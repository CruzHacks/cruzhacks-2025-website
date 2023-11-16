import { useContext } from "react"
import { AppStateContext } from "../contexts/applicationState"

export const useAppState = () => {
  const context = useContext(AppStateContext)
  if (!context) {
    throw new Error(
      "useAppState must be used within a ApplicationStateProvider"
    )
  }
  return context
}
