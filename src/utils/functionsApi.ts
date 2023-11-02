import type { User } from "@firebase/auth"

// This URL resolve to the Firebase Functions emulator in development is hacky
// but works, prefer to have static URLs at build
// TODO: Find a better way to do this
const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID
let API_URL = `https://us-central1-${PROJECT_ID}.cloudfunctions.net`
if (import.meta.env.DEV) {
  API_URL = `http://localhost:5001/${PROJECT_ID}/us-central1`
}

// Cruzhacks-2024-Backend API

type ErrorResponse = { message: string }

type CheckRoleSynced = {
  customClaimRole: string
  firestoreRole: string
  synced: boolean
}

/**
 * CruzHacks-2024-Backend API endpoint for checking if a user's custom claim
 * role is synced with their corresponding Firestore user/:uid role
 * @param user Firebase User
 * @returns The custom claim role, the firestore role, and whether or not they
 * are synced as a boolean if successful, otherwise an error message
 */
export const checkRoleSynced = async (user: User | null) => {
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
