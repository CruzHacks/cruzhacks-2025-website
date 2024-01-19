import { useQuery } from "@tanstack/react-query"
import type { User } from "firebase/auth"
import { getTeamProfile } from "../utils/apis/firebase"

const useTeam = (user: User | null) => {
  return useQuery({
    queryKey: ["team", { user: user }],
    queryFn: () => {
      if (!user) throw new Error("User could not be fetched from session")
      return getTeamProfile(user)
    },
  })
}

export default useTeam
