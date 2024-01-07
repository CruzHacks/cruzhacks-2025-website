import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateApplicationRsvp } from "../utils/apis/firebase"
import toast from "react-hot-toast"

const useApplicationStatusMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ email, rsvp }: { email: string; rsvp: boolean }) =>
      updateApplicationRsvp(email, rsvp),
    onSuccess: (data, { email, rsvp }) => {
      if (rsvp == true) {
        toast.success("Attendance Confirmed")
      } else {
        toast.error("Attendance Declined")
      }
      queryClient.setQueryData(
        ["applicationStatus", { email: email }],
        oldData => (oldData ? { ...oldData, rsvp } : oldData)
      )
    },
    onError: () => toast.error("Failed to confirm attendance"),
  })
}

export default useApplicationStatusMutation
