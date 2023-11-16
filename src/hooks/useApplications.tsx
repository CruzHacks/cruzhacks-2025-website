import { useQuery } from "@tanstack/react-query"
import { getApplications } from "../utils/apis/firebase"

// TODO: Pagination
const useApplications = () => {
  return useQuery({
    queryKey: ["applications"],
    queryFn: () => getApplications(),
  })
}

export default useApplications
