import type { User } from "@firebase/auth"
import {
  ApplicationSchemaDto,
  CheckRoleSynced,
  ErrorResponse,
  UserBasics,
} from "../types"
import axios, { isAxiosError } from "axios"

// This URL resolve to the Firebase Functions emulator in development is hacky
// but works, prefer to have static URLs at build
// TODO: Find a better way to do this
export const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID
export const API_URL = import.meta.env.DEV
  ? `http://localhost:5001/${PROJECT_ID}/us-central1`
  : `https://us-central1-${PROJECT_ID}.cloudfunctions.net`

/**
 * CruzHacks-2024-Backend API endpoint for checking if an email is taken
 * @param email Email to check
 * @returns Whether or not the email is taken as a boolean if successful
 */
export const checkEmailTaken = async (email: string) => {
  try {
    if (!email) throw new Error("No email provided")

    const response = await axios.get(`${API_URL}/auth/emailTaken`, {
      params: {
        email,
      },
    })

    const { data, error } = response.data

    if (error) {
      throw new Error(error)
    }

    return data.exists as boolean
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.message)
    }
    throw err as Error
  }
}

/**
 * CruzHacks-2024-Backend API endpoint for checking if a phone number is taken
 * @param phoneNumber Phone number to check
 * @returns Whether or not the phone number is taken as a boolean if successful
 */
export const checkPhoneNumberTaken = async (phoneNumber: string) => {
  try {
    if (!phoneNumber) throw new Error("No phone number provided")

    const response = await axios.get(`${API_URL}/auth/phoneNumberTaken`, {
      params: {
        phoneNumber,
      },
    })

    const { data, error } = response.data

    if (error) {
      throw new Error(error)
    }
    console.log("data", data)

    return data.exists as boolean
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.message)
    }
    throw err as Error
  }
}

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
    throw err as Error
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
    const idToken = await user.getIdToken(false)

    const response = await axios.get(`${API_URL}/auth/users`, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
      params: {
        pageToken,
      },
    })

    const { data, error } = response.data

    if (error) {
      throw new Error(error)
    }

    return data.users as UserBasics[]
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.message)
    }

    throw err
  }
}

/**
 * CruzHacks-2024-Backend API endpoint for submitting an application for an
 * authenticated user
 * @param user Firebase User
 * @param application Application data
 * @returns Success message if successful, otherwise an error message
 */
export const submitApplicationAuthed = async (
  user: User,
  application: ApplicationSchemaDto
) => {
  try {
    if (!user) throw new Error("No user provided")
    if (!application) throw new Error("No application provided")

    // Validate the application data (throws error if invalid)
    const applicationParsed = ApplicationSchemaDto.parse(application)

    const idToken = await user.getIdToken(false)
    const response = await axios.post(
      `${API_URL}/application/authenticated`,
      applicationParsed,
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    )
    const { data, error } = response.data

    if (error) throw new Error(error)

    return data.message as string
  } catch (err) {
    if (isAxiosError(err)) {
      console.error(err)
      throw new Error(err.message)
    }
    return err as Error
  }
}

/**
 * CruzHacks-2024-Backend API endpoint for submitting an application and
 * creating an account for an unauthenticated user
 * @param application Application data
 * @returns Success message if successful, otherwise an error message
 */
export const submitApplicationUnauthed = async (
  application: ApplicationSchemaDto
) => {
  try {
    if (!application) throw new Error("No application provided")

    // Validate the application data (throws error if invalid)
    const applicationParsed = ApplicationSchemaDto.parse(application)

    const response = await axios.post(
      `${API_URL}/application/unauthenticated`,
      applicationParsed
    )
    const { data, error } = response.data

    if (error) throw new Error(error)

    return data.message as string
  } catch (err) {
    if (isAxiosError(err)) {
      if (err.response?.data?.data?.message) {
        throw new Error(err.response.data.data.message)
      }
      console.error(err)
      throw new Error(err.message)
    }
    throw err as Error
  }
}
