import { useMutation, useQueryClient } from "@tanstack/react-query"
import { submitLink } from "../utils/apis/firebase"
import type { User } from "firebase/auth"
import toast from "react-hot-toast"

const useTeamSubmitMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      user,
      devPostLink,
      prizeTrack,
    }: {
      user: User
      devPostLink: string
      prizeTrack: string
    }) => submitLink(user, devPostLink, prizeTrack),
    onSuccess: (data, { user, devPostLink, prizeTrack }) => {
      toast.success("Submission Successful")
      queryClient.setQueryData(["team", { user: user }], oldData =>
        oldData ? { ...oldData, devPostLink, prizeTrack } : oldData
      )
    },
    onError: () => toast.error("Failed to submit"),
  })
}

export default useTeamSubmitMutation
