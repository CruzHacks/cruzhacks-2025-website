import { useQuery } from "@tanstack/react-query"
import { getStatistics } from "../utils/apis/cloudFunctions"

const useStatistics = () => {
  return useQuery({
    queryKey: ["statistics"],
    queryFn: () => getStatistics(),
  })
}

export default useStatistics
