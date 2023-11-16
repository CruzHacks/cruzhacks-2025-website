import { useQuery } from "@tanstack/react-query"
import { getApplication } from "../utils/apis/firebase"

// TODO: Pagination
const useApplication = (email: string) => {
  return useQuery({
    queryKey: ["applications", { email: email }],
    queryFn: () => getApplication(email),
  })
}

export default useApplication
