import { useQuery } from "@tanstack/react-query"
import { getApplicationShortResponses } from "../utils/apis/firebase"

// TODO: Pagination
const useApplicationShortResponses = (email: string) => {
  return useQuery({
    queryKey: ["applications", { email: email }],
    queryFn: () => getApplicationShortResponses(email),
  })
}

export default useApplicationShortResponses
