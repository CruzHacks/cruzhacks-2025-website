import { useQuery } from "@tanstack/react-query"
import { getApplicationStatus } from "../utils/apis/firebase"

const useApplicationStatus = (email: string) => {
  return useQuery({
    queryKey: ["applicationStatus", { email: email }],
    queryFn: () => getApplicationStatus(email),
  })
}

export default useApplicationStatus
