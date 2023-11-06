import type { User } from "@firebase/auth"
import { ApplicationSchema } from "../views/portal/applicant/ApplicationApplicant"
import { CheckRoleSynced, ErrorResponse, UserBasics } from "./types"

// This URL resolve to the Firebase Functions emulator in development is hacky
// but works, prefer to have static URLs at build
// TODO: Find a better way to do this
const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID
const API_URL = import.meta.env.DEV
  ? `http://localhost:5001/${PROJECT_ID}/us-central1`
  : `https://us-central1-${PROJECT_ID}.cloudfunctions.net`

/**
 * CruzHacks-2024-Backend API endpoint for checking if a user's custom claim
 * role is synced with their corresponding Firestore user/:uid role
 * @param user Firebase User
 * @returns The custom claim role, the firestore role, and whether or not they
 * are synced as a boolean if successful, otherwise an error message
 */
export const checkRoleSynced = async (user: User) => {
  try {
    if (!user) throw new Error("No user provided")

    const idToken = await user.getIdToken(false)
    const response = await fetch(`${API_URL}/auth/checkRoleSynced`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
    })
    const data: CheckRoleSynced | ErrorResponse = await response.json()
    if ("message" in data) throw new Error(data.message)
    return data
  } catch (err) {
    console.error(err)
    return err as Error
  }
}

/**
 * CruzHacks-2024-Backend API endpoint for retrieving a list of users
 * @param user Firebase User
 * @param pageToken OPTIONAL - The page token (used for pagination)
 * @returns The list of users if successful, otherwise an error message
 */
export const getUsers = async (user: User, pageToken?: string) => {
  try {
    if (!user) throw new Error("No user provided")

    const idToken = await user.getIdToken(false)
    const response = await fetch(
      `${API_URL}/auth/users?pageToken=${pageToken}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
      }
    )
    const data: { users: UserBasics[] } | ErrorResponse = await response.json()
    if ("message" in data) throw new Error(data.message)
    return data
  } catch (err) {
    console.error(err)
    return err as Error
  }
}

/**
 * CruzHacks-2024-Backend API endpoint for submitting an application
 * @param user Firebase User
 * @param application Application data
 * @returns Success message if successful, otherwise an error message
 */
export const submitApplication = async ({
  user,
  application,
}: {
  user: User
  application: ApplicationSchema
}) => {
  try {
    if (!user) throw new Error("No user provided")
    if (!application) throw new Error("No application provided")

    // Validate the application data (throws error if invalid)
    const applicationParsed = ApplicationSchema.parse(application)

    const idToken = await user.getIdToken(false)
    const response = await fetch(`${API_URL}/application`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify(applicationParsed),
    })
    const data: { message: string } = await response.json()
    if (response.status !== 200) throw new Error(data.message)
    return data
  } catch (err) {
    console.error(err)
    return err as Error
  }
}
