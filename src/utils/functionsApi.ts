import type { User } from "@firebase/auth"

// Cruzhacks-2024-Backend API

type ErrorResponse = { message: string }

type CheckRoleSyncedResponse =
  | {
      customClaimRole: string
      firestoreRole: string
      synced: boolean
    }
  | ErrorResponse

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
    const response = await fetch(
      `${import.meta.env.VITE_FIREBASE_ENDPOINT_URL}/auth/checkRoleSynced`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
      }
    )
    const data: CheckRoleSyncedResponse = await response.json()
    if ("message" in data) throw new Error(data.message)
    return data
  } catch (err) {
    console.error(err)
    return err as Error
  }
}
