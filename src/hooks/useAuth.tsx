import { useContext } from "react"
import { AuthContext } from "../contexts/auth"

export const useAuth = () => {
  const authentication = useContext(AuthContext)

  return {
    auth: { ...authentication },
    isAuthenticated: authentication.user != null,
  }
}
export default useAuth
