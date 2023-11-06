import type { User } from "@firebase/auth"
import { UserBasics } from "../utils/types"
import axios, { isAxiosError } from "axios"
import { API_URL } from "../utils/functionsApi"
import { useQuery } from "@tanstack/react-query"

/**
 * CruzHacks-2024-Backend API endpoint for retrieving a list of users
 * @param user Firebase User
 * @param pageToken OPTIONAL - The page token (used for pagination)
 * @returns The list of users if successful, otherwise an error message
 */
const getUsers = async (user: User, pageToken?: string) => {
  try {
    const idToken = await user.getIdToken(false)

    const response = await axios.get(`${API_URL}/auth/users`, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
      params: {
        pageToken,
      },
    })

    const { data, error } = response.data

    if (error) {
      throw new Error(error)
    }

    return data.users as UserBasics[]
  } catch (err) {
    if (isAxiosError(err)) {
      throw err.message
    }

    throw err
  }
}

const useUsers = (user?: User | null, pageToken?: string) => {
  if (!user) throw new Error("No user provided")
  return useQuery({
    queryKey: ["users", { uid: user.uid }],
    queryFn: () => getUsers(user, pageToken),
  })
}

export default useUsers
