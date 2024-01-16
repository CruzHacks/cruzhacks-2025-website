import React, { useEffect, useState } from "react"
import { TeamFormationProps } from "../../../../utils/types";
import { getTeams } from "../../../../utils/apis/firebase";
import useAuth from "../../../../hooks/useAuth";
import { TeamAdminDisplay } from "../../../../components/teams/TeamAdminDisplay";

const TeamsAdmin = () => {
    const {
        auth: { user },
      } = useAuth()

  const [render, setRender] = useState<boolean>(false);
  const [teams, setTeams] = useState<TeamFormationProps[]>([])

  useEffect(() => {
    if (!user) throw new Error("User could not be fetched from session")
    getTeams().then((teams) => {
        console.log(teams)
        setTeams(teams)
        setRender(true)
    })
  }, [])

  if (render) {
    return (
        <div>
            <h1 className='font-title text-xl'>Team Formation</h1>
            <div className="flex flex-row flex-wrap place-content-center justify-around rounded-xl border-2 border-[#DFDFF6] bg-[#FFF] p-5 drop-shadow-lg">
                {teams.map((team) => {
                    return (
                    <div key={team.teamName} className="w-full gap-4 rounded-lg border-2 border-[#DFDFDF] bg-[#DFDFDF] drop-shadow-sm sm:mb-4 md:mb-4 lg:mb-0 lg:w-1/2">
                        <TeamAdminDisplay teamPage={team} teamPages={teams} setTeamPages={setTeams}></TeamAdminDisplay>
                    </div>
                    )
                })}
            </div>
        </div>
    )
  } else {
    return <div>loading</div>
  }
}

export default TeamsAdmin
