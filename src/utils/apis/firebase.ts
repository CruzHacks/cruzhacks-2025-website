import {
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore"
import { db } from "../firebaseapp"
import {
  AppShortResponseSchema,
  ApplicationSchema,
  ApplicationStatus,
  InvitationProps,
  TeamFormationProps,
  TeamMemberProps,
  TeamProps,
} from "../types"
// eslint-disable-next-line import/named
import { User } from "firebase/auth"

/**
 * Function using Firebase sdk for checking if an application is
 * submitted.
 * @param user Firebase User
 * @returns True if application is submitted, false if not, otherwise an error
 * message
 */
export const checkApplicationSubmitted = async (email: string) => {
  if (!email) throw new Error("No email provided")

  const docRef = doc(db, `users/${email}/user_items/application`)
  const docSnap = await getDoc(docRef)

  console.log("docSnap.exists(): ", docSnap.exists())

  return docSnap.exists()
}

/**
 * Function using Firebase sdk to retrieve an application
 * @param user Firebase User
 * @returns An application if successful
 */
export const getApplication = async (email: string) => {
  if (!email) throw new Error("No user provided")

  const querySnapshot = await getDocs(
    collection(db, `users/${email}/user_items/application/sections`)
  )

  // Convert array of documents to object
  const application = querySnapshot.docs.reduce(
    (acc, doc) => ({ ...acc, [doc.id]: doc.data() }),
    {}
  )

  return application
}

/**
 * Function using Firebase sdk to retrieve an application
 * @param user Firebase User
 * @returns An application if successful
 */
export const getApplicationShortResponses = async (email: string) => {
  if (!email) throw new Error("No user provided")

  const querySnapshot = await getDoc(
    doc(db, `users/${email}/user_items/application/sections`, "short_response")
  )

  if (!querySnapshot.exists())
    throw new Error("No short responses found for applicant")

  const shortResponses = querySnapshot.data()

  return shortResponses as AppShortResponseSchema
}

/**
 * Function using Firebase sdk to retrieve information about all applications
 */
export const getApplications = async () => {
  try {
    // NOTE: This query requires a Firestore index
    // https://firebase.google.com/docs/firestore/query-data/queries#collection-group-query
    const q = query(collectionGroup(db, "user_items"), orderBy("_submitted"))
    const querySnapshot = await getDocs(q)

    const applications = querySnapshot.docs.map(doc => doc.data())

    return applications as ApplicationSchema[]
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * Function using Firebase sdk to retrieve information about all applications
 */
export const getTeams = async () => {
  try {
    // NOTE: This query requires a Firestore index
    // https://firebase.google.com/docs/firestore/query-data/queries#collection-group-query
    const q = query(collectionGroup(db, "teams"), orderBy("teamName"))
    const querySnapshot = await getDocs(q)

    const teams = querySnapshot.docs.map(doc => doc.data())

    return teams as TeamFormationProps[]
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * Function using Firebase sdk for checking if an application is
 * submitted.
 * @param user Firebase User
 * @returns updated application if successful
 */
export const approveApplication = async (email: string) => {
  try {
    if (!email) throw new Error("No user provided")

    const status: ApplicationStatus = "accepted"

    const docRef = doc(db, `users/${email}/user_items/application`)
    await updateDoc(docRef, {
      status: status,
    })

    console.log("docRef updated: ", docRef)

    return docRef
  } catch (error) {
    console.error("application", error)
    throw error as Error
  }
}

/**
 * Function using Firebase sdk for checking if an application is
 * accepted.
 * @param email Firebase User's Email
 * @returns updated application if successful
 */
export const denyApplication = async (email: string) => {
  try {
    if (!email) throw new Error("No user provided")

    const status: ApplicationStatus = "rejected"

    const docRef = doc(db, `users/${email}/user_items/application`)
    await updateDoc(docRef, {
      status: status,
    })

    console.log("docRef updated: ", docRef)

    return docRef
  } catch (error) {
    console.error("application", error)
    throw error as Error
  }
}

/**
 * Function using Firebase sdk for checking if an application is
 * accepted.
 * @param email Firebase User's Email
 * @returns updated application if successful
 */
export const getApplicationStatus = async (email: string) => {
  try {
    if (!email) throw new Error("No user provided")

    const docRef = doc(db, `users/${email}/user_items/application`)
    const docSnap = await getDoc(docRef)

    if (!docSnap.exists()) throw new Error("No application found")
    if (!docSnap.data()?.status)
      throw new Error("Application found but no status field")

    const status = {
      status: docSnap.data()?.status,
      rsvp: docSnap.data()?.rsvp,
    }

    return status as { status: ApplicationStatus; rsvp?: boolean }
  } catch (error) {
    console.error(error)
    throw error as Error
  }
}

/**
 * Function using Firebase sdk to update an application rsvp
 * @param email Firebase User's Email
 * @param rsvp Boolean
 * @returns updated application if successful
 */
export const updateApplicationRsvp = async (email: string, rsvp: boolean) => {
  try {
    if (!email) throw new Error("No user provided")

    const docRef = doc(db, `users/${email}/user_items/application`)
    await updateDoc(docRef, {
      rsvp: rsvp,
    })

    console.log("docRef updated: ", docRef)

    return rsvp
  } catch (error) {
    console.error("application", error)
    throw error as Error
  }
}

/**
 * Function using Firebase sdk for returning the team information of a user
 * @param user Firebase User
 * @returns teamProfile if user found, otherwise an error is thrown
 *
 */
export const getTeamProfile = async (user: User) => {
  try {
    if (!user) throw new Error("No user provided")

    const userDocRef = doc(db, `users/${user.email}/user_items/team`)
    const userDocSnap = await getDoc(userDocRef)

    const userInvites = userDocSnap.data()?.invites
    const teamName = userDocSnap.data()?.teamName

    // if user is not apart of a team, return their team invites
    if (teamName == "") return { invites: userInvites }

    const teamDocRef = doc(db, `teams/${teamName}`)
    const teamDocSnap = await getDoc(teamDocRef)

    if (!teamDocSnap.exists()) return {}

    const teamRef = teamDocSnap.data()

    return { teamName: teamName, ...teamRef } as any as TeamFormationProps
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * Function using Firebase sdk to remove a member of the team
 * @param user Firebase User who is the team leader
 * @param email Firebase User's Email to be removed
 * @returns updated team profile if success, error thrown otherwise
 *
 */
export const removeTeamMember = async (user: User, email: string) => {
  try {
    if (!email) throw new Error("No email provided")
    if (!user) throw new Error("No user provided")

    const userDocRef = doc(db, `users/${user.email}/user_items/team`)
    const userDocSnap = await getDoc(userDocRef)

    if (!userDocSnap.exists()) throw new Error("User is not on a team")

    const userTeamName = userDocSnap.data()?.teamName
    const userTeamLeader = userDocSnap.data()?.teamLeader

    if (userTeamLeader !== user.email)
      throw new Error("User is not team leader of their team")
    if (user.email == email)
      throw new Error("User cannot remove themselves from the team")

    let teamDocRef = doc(db, `teams/${userTeamName}`)
    let teamDocSnap = await getDoc(teamDocRef)
    const teamLeader = teamDocSnap.data()?.teamLeader

    if (teamLeader !== user.email)
      throw new Error("User is not team leader of the team being deleted")

    const teamMembers = teamDocSnap.data()?.teamMembers

    // get team members except for the one removed
    const newTeamMembers = teamMembers.filter(
      (teamMember: TeamMemberProps) => teamMember.memberEmail !== email
    )

    const invitedTeamMembers = teamDocSnap.data()?.invitedTeamMembers

    // get invited team members except for the one removed
    const newInvitedTeamMembers = invitedTeamMembers.filter(
      (teamMember: TeamMemberProps) => teamMember.memberEmail !== email
    )

    await updateDoc(teamDocRef, {
      teamMembers: newTeamMembers,
      invitedTeamMembers: newInvitedTeamMembers,
    })

    const oldMemberDocRef = doc(db, `users/${email}/user_items/team`)
    const oldMemberDocSnap = await getDoc(oldMemberDocRef)
    const oldMemberInvites = oldMemberDocSnap.data()?.invites

    // get invites except for the team removed
    // NOTE: I dont think this is needed, invites could be set to [] as the use shouldn't have any invites if they have been on a team
    const newOldMemberInvites = oldMemberInvites.filter(
      (invites: InvitationProps) => invites.teamName !== userTeamName
    )

    await updateDoc(oldMemberDocRef, {
      teamName: "",
      teamLeader: "",
      invites: newOldMemberInvites,
    })

    teamDocRef = doc(db, `teams/${userTeamName}`)
    teamDocSnap = await getDoc(teamDocRef)

    return teamDocSnap.data() as any as TeamFormationProps
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * Function using Firebase sdk to delete a team
 * @param user Firebase User who is the team leader
 * @param teamName Team to be removed
 * @returns Empty team profile if team deletion successful, error thrown otherwise
 *
 */
export const deleteTeam = async (user: User, teamName: string) => {
  try {
    if (!user) throw new Error("No user provided")
    if (!teamName || teamName == "") throw new Error("No team name provided")

    const userDocRef = doc(db, `users/${user.email}/user_items/team`)
    const userDocSnap = await getDoc(userDocRef)
    const userTeamName = userDocSnap.data()?.teamName
    const userTeamLeader = userDocSnap.data()?.teamLeader

    if (userTeamName !== teamName)
      throw new Error("User is not apart of the team")
    if (userTeamLeader !== user.email)
      throw new Error("User is not team leader of their team")

    const teamDocRef = doc(db, `teams/${teamName}`)
    const teamDocSnap = await getDoc(teamDocRef)

    const teamLeader = teamDocSnap.data()?.teamLeader
    const teamMembers = teamDocSnap.data()?.teamMembers
    const teamInvites = teamDocSnap.data()?.invitedTeamMembers

    if (teamLeader !== user.email)
      throw new Error("User is not team leader of the team being deleted")
    if (teamMembers.length > 1)
      throw new Error("All other team members must be removed before deletion")
    if (teamInvites.length >= 1)
      throw new Error("All pending invites must be removed before deletion")

    await updateDoc(userDocRef, {
      teamName: "",
      teamLeader: "",
    })

    await deleteDoc(doc(db, `teams/${teamName}`))

    return {
      invitationType: "JOIN",
      teamName: "",
      teamMembers: [],
      invitedTeamMembers: [],
      teamLeader: "",
      lockedIn: false,
      invites: [],
    } as TeamFormationProps
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * Function using Firebase sdk for setting lockedIn value to true
 * @param user Firebase User
 * @param teamName Team to be locked
 * @returns updated team profile if success, otherwise an error is thrown
 *
 */
export const lockTeam = async (user: User, teamName: string) => {
  try {
    if (!user) throw new Error("No user provided")
    if (!teamName || teamName == "") throw new Error("No team name provided")

    const userDocRef = doc(db, `users/${user.email}/user_items/team`)
    const userDocSnap = await getDoc(userDocRef)

    const userTeamName = userDocSnap.data()?.teamName
    const userTeamLeader = userDocSnap.data()?.teamLeader

    if (userTeamName !== teamName)
      throw new Error("User is not apart of the team")
    if (userTeamLeader !== user.email)
      throw new Error("User is not team leader of their team")

    let teamDocRef = doc(db, `teams/${teamName}`)
    let teamDocSnap = await getDoc(teamDocRef)

    const teamLeader = teamDocSnap.data()?.teamLeader

    if (teamLeader !== user.email)
      throw new Error("User is not team leader of the team being deleted")

    const invitedTeamMembers = teamDocSnap.data()?.invitedTeamMembers

    if (invitedTeamMembers.length > 0)
      throw new Error("All pending invites must be removed before lock in")

    await updateDoc(teamDocRef, {
      lockedIn: true,
    })

    teamDocRef = doc(db, `teams/${teamName}`)
    teamDocSnap = await getDoc(teamDocRef)

    return teamDocSnap.data() as any as TeamFormationProps
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * Function using Firebase sdk for creating a team in Firestore
 * @param user Firebase User
 * @param teamName Team name to be created
 * @returns new teamProfile created, otherwise an error is thrown
 *
 */
export const createTeam = async (user: User, teamName: string) => {
  try {
    if (!user) throw new Error("No user provided")
    if (!teamName || teamName == "") throw new Error("No team name provided")

    const userDocRef = doc(db, `users/${user.email}/user_items/team`)
    const userDocSnap = await getDoc(userDocRef)

    if (userDocSnap.exists()) {
      const userTeamName = userDocSnap.data()?.teamName
      const userTeamLeader = userDocSnap.data()?.teamLeader

      if (userTeamName !== "") throw new Error("User is on a team")
      if (userTeamLeader !== "") throw new Error("User is a team leader")
    }

    let teamDocRef = doc(db, `teams/${teamName}`)
    let teamDocSnap = await getDoc(teamDocRef)

    if (teamDocSnap.exists()) throw new Error("Team name already in use")

    await setDoc(teamDocRef, {
      teamName: teamName,
      teamMembers: [{ memberName: user.displayName, memberEmail: user.email }],
      invitedTeamMembers: [],
      teamLeader: user.email,
      lockedIn: false,
    })

    await setDoc(userDocRef, {
      teamName: teamName,
      teamLeader: user.email,
      invites: [],
    })

    teamDocRef = doc(db, `teams/${teamName}`)
    teamDocSnap = await getDoc(teamDocRef)

    return teamDocSnap.data() as any as TeamFormationProps
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * Function using Firebase sdk for inviting a team member to a team
 * @param user Firebase User
 * @param email Firebase User's Email to be invited
 * @returns updated teamProfile if email found, otherwise an error is thrown
 *
 */
export const inviteTeamMember = async (user: User, email: string) => {
  try {
    if (!user) throw new Error("No user provided")
    if (!email || email == "") throw new Error("No user email provided")

    const userDocRef = doc(db, `users/${user.email}/user_items/team`)
    const userDocSnap = await getDoc(userDocRef)
    const userTeamName = userDocSnap.data()?.teamName
    const userTeamLeader = userDocSnap.data()?.teamLeader

    if (userTeamLeader !== user.email)
      throw new Error("User is not the team leader")
    if (email == user.email)
      throw new Error("Cannot invite yourself to the team")

    const otherUserDocRef = doc(db, `users/${email}/user_items/team`)
    const otherUserDocSnap = await getDoc(otherUserDocRef)

    const otherUserRoleDocRef = doc(db, `users/${email}/user_items/role`)
    const otherUserRoleDocSnap = await getDoc(otherUserRoleDocRef)
    const role = otherUserRoleDocSnap.data()?.role.toLowerCase()

    if (!otherUserDocSnap.exists())
      throw new Error("Invited user does not exist")
    if (otherUserDocSnap.data()?.teamName === userTeamName)
      throw new Error("User is already on the team")
    if (otherUserDocSnap.data()?.teamName !== "")
      throw new Error("Invited user is already on a team")
    if (role !== "hacker")
      throw new Error("Invited user is not a participant of the hackathon")

    const teamName = userDocSnap.data()?.teamName

    let teamDocRef = doc(db, `teams/${teamName}`)
    let teamDocSnap = await getDoc(teamDocRef)

    const teamMembers = teamDocSnap.data()?.teamMembers
    const invitedTeamMembers = teamDocSnap.data()?.invitedTeamMembers
    const lockedIn = teamDocSnap.data()?.lockedIn

    if (lockedIn)
      throw new Error("Team is locked in, cannot invite new members")
    if (teamMembers.length + invitedTeamMembers.length >= 4)
      throw new Error(
        "Team is full, remove a team member or univnite a member to invite a new member"
      )

    // check that the user has not been already invited to the team
    if (
      otherUserDocSnap.data()?.invites !== undefined &&
      otherUserDocSnap
        .data()
        ?.invites.some((team: TeamProps) => team.teamName == teamName)
    )
      throw new Error("User has already been invited to the team")
    if (
      invitedTeamMembers !== undefined &&
      invitedTeamMembers.some(
        (member: TeamMemberProps) => member.memberEmail == email
      )
    )
      throw new Error("User has already been invited to the team")
    const invitedTeams = otherUserDocSnap.data()?.invites

    await updateDoc(otherUserDocRef, {
      invites: [
        ...invitedTeams,
        { teamName: teamName, teamLeader: user.email },
      ],
    })

    const otherUserNameDocRef = doc(db, `users/${email}/user_items/application`)
    const otherUserNameDocSnap = await getDoc(otherUserNameDocRef)
    const fullName = otherUserNameDocSnap.data()?.fullname

    await updateDoc(teamDocRef, {
      invitedTeamMembers: [
        ...invitedTeamMembers,
        { memberName: fullName, memberEmail: email },
      ],
    })

    teamDocRef = doc(db, `teams/${teamName}`)
    teamDocSnap = await getDoc(teamDocRef)

    return teamDocSnap.data() as any as TeamFormationProps
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * Function using Firebase sdk for accepting or denying a team's invite
 * @param user Firebase User
 * @param teamName Team name that is inviting the user
 * @param status ACCEPTED or DENIED response to invite
 * @returns updated team profile depending on status, otherwise an error is thrown
 *
 */
export const rsvpInvite = async (
  user: User,
  teamName: string,
  status: string
) => {
  try {
    if (!user) throw new Error("No user provided")
    if (!teamName || teamName == "") throw new Error("No team name provided")
    const userDocRef = doc(db, `users/${user.email}/user_items/team`)
    const userDocSnap = await getDoc(userDocRef)
    const userTeamName = userDocSnap.data()?.teamName
    if (userTeamName !== "") throw new Error("User is already on a team")
    let teamDocRef = doc(db, `teams/${teamName}`)
    let teamDocSnap = await getDoc(teamDocRef)
    if (!teamDocSnap.exists()) throw new Error("Team does not exist")
    const invitedTeamMembers = teamDocSnap.data()?.invitedTeamMembers

    // remove team member from the list of invitees of the team (doesn't matter
    // if they accept or deny, they will need to be removed)
    const newInvitedTeamMembers = invitedTeamMembers.filter(
      (teamMember: TeamMemberProps) => teamMember.memberEmail !== user.email
    )

    if (status === "ACCEPTED") {
      const lockedIn = teamDocSnap.data()?.lockedIn
      if (lockedIn)
        throw new Error(
          "Team is locked in, cannot join, please contact team leader"
        )

      const teamMembers = teamDocSnap.data()?.teamMembers
      const teamLeader = teamDocSnap.data()?.teamLeader

      const userNameDocRef = doc(
        db,
        `users/${user.email}/user_items/application`
      )
      const userNameDocSnap = await getDoc(userNameDocRef)
      const fullName = userNameDocSnap.data()?.fullname

      await updateDoc(teamDocRef, {
        teamMembers: [
          ...teamMembers,
          { memberName: fullName, memberEmail: user.email },
        ],
        invitedTeamMembers: newInvitedTeamMembers,
      })

      const invitedTeams = userDocSnap.data()?.invites

      // remove user from all other team's invite lists
      for (let i = 0; i < invitedTeams.length; i++) {
        if (invitedTeams[i].teamName != teamName) {
          const tempTeamDocRef = doc(db, `teams/${invitedTeams[i].teamName}`)
          const tempTeamDocSnap = await getDoc(tempTeamDocRef)
          const tempInvitedTeamMembers =
            tempTeamDocSnap.data()?.invitedTeamMembers
          const tempNewInvitedTeamMembers = tempInvitedTeamMembers.filter(
            (teamMember: TeamMemberProps) =>
              teamMember.memberEmail !== user.email
          )
          await updateDoc(tempTeamDocRef, {
            invitedTeamMembers: tempNewInvitedTeamMembers,
          })
        }
      }

      await updateDoc(userDocRef, {
        invites: [],
        teamName: teamName,
        teamLeader: teamLeader,
      })

      teamDocRef = doc(db, `teams/${teamName}`)
      teamDocSnap = await getDoc(teamDocRef)

      return teamDocSnap.data() as any as TeamFormationProps
    } else if (status === "DECLINED") {
      await updateDoc(teamDocRef, {
        invitedTeamMembers: newInvitedTeamMembers,
      })

      const invites = userDocSnap.data()?.invites
      const newInvites = invites.filter(
        (teams: TeamProps) => teams.teamName !== teamName
      )
      await updateDoc(userDocRef, {
        invites: newInvites,
      })
      return { invites: newInvites } as any as TeamFormationProps
    } else {
      throw new Error("Invalid status")
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * Function using Firebase sdk for removing a team member from a team using admin access
 * @param email email address to be removed from their team
 * @returns updated team profile if successful remove, otherwise an error is thrown
 *
 */
export const removeTeamMemberAdmin = async (email: string) => {
  try {
    if (!email) throw new Error("No email provided")
    const oldMemberDocRef = doc(db, `users/${email}/user_items/team`)
    const oldMemberDocSnap = await getDoc(oldMemberDocRef)
    const oldMemberInvites = oldMemberDocSnap.data()?.invites
    const userTeamName = oldMemberDocSnap.data()?.teamName

    let teamDocRef = doc(db, `teams/${userTeamName}`)
    let teamDocSnap = await getDoc(teamDocRef)
    const teamLeader = teamDocSnap.data()?.teamLeader
    if (teamLeader === email) throw new Error("Cannot remove team leader")

    const teamMembers = teamDocSnap.data()?.teamMembers

    const newTeamMembers = teamMembers.filter(
      (teamMember: TeamMemberProps) => teamMember.memberEmail !== email
    )

    const invitedTeamMembers = teamDocSnap.data()?.invitedTeamMembers

    const newInvitedTeamMembers = invitedTeamMembers.filter(
      (teamMember: TeamMemberProps) => teamMember.memberEmail !== email
    )

    await updateDoc(teamDocRef, {
      teamMembers: newTeamMembers,
      invitedTeamMembers: newInvitedTeamMembers,
    })

    const newOldMemberInvites = oldMemberInvites.filter(
      (invites: InvitationProps) => invites.teamName !== userTeamName
    )

    await updateDoc(oldMemberDocRef, {
      teamName: "",
      teamLeader: "",
      invites: newOldMemberInvites,
    })

    teamDocRef = doc(db, `teams/${userTeamName}`)
    teamDocSnap = await getDoc(teamDocRef)

    return teamDocSnap.data() as any as TeamFormationProps
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * Function using Firebase sdk for removing or adding a lock in to a team
 * @param teamName team to be locked or unlocked
 * @returns updated team profile if successful, otherwise an error is thrown
 *
 */
export const flipLockAdmin = async (teamName: string) => {
  try {
    if (!teamName || teamName == "") throw new Error("No team name provided")

    let teamDocRef = doc(db, `teams/${teamName}`)
    let teamDocSnap = await getDoc(teamDocRef)

    const invitedTeamMembers = teamDocSnap.data()?.invitedTeamMembers
    const lock = teamDocSnap.data()?.lockedIn

    if (invitedTeamMembers.length > 0)
      throw new Error("All pending invites must be removed before lock in")

    await updateDoc(teamDocRef, {
      lockedIn: !lock,
    })

    teamDocRef = doc(db, `teams/${teamName}`)
    teamDocSnap = await getDoc(teamDocRef)

    return teamDocSnap.data() as any as TeamFormationProps
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * Function using Firebase sdk for deleting a team using admin access
 * @param teamName team to be deleted from the database
 * @returns empty team profile if successful, otherwise an error is thrown
 *
 */
export const deleteTeamAdmin = async (teamName: string) => {
  try {
    if (!teamName || teamName == "") throw new Error("No team name provided")

    const teamDocRef = doc(db, `teams/${teamName}`)
    const teamDocSnap = await getDoc(teamDocRef)

    const teamLeader = teamDocSnap.data()?.teamLeader
    const teamMembers = teamDocSnap.data()?.teamMembers
    const teamInvites = teamDocSnap.data()?.invitedTeamMembers

    if (teamMembers.length > 1)
      throw new Error("All other team members must be removed before deletion")
    if (teamInvites.length >= 1)
      throw new Error("All pending invites must be removed before deletion")

    const leaderDocRef = doc(db, `users/${teamLeader}/user_items/team`)

    await updateDoc(leaderDocRef, {
      teamName: "",
      teamLeader: "",
    })

    await deleteDoc(doc(db, `teams/${teamName}`))

    return {} as TeamFormationProps
  } catch (error) {
    console.error(error)
    throw error
  }
}
