import validator from "validator"
import { z } from "zod"

export type ErrorResponse = { message: string }

export type CheckRoleSynced = {
  customClaimRole: string
  firestoreRole: string
  synced: boolean
}

export type UserBasics = {
  uid: string
  displayName?: string
  email: string
  role: string
}

// Schema pulled from 2023 Hacker Application form:
// https://docs.google.com/forms/d/1qtk6kBBq6jZ9rprDl-U_4Pvl5vhJ30PH2B759A-xA1k/edit
export const ApplicationSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  phone_number: z
    .string()
    .min(1, "A phone number is required")
    .refine(validator.isMobilePhone, "Invalid phone number"),

  // Demographic Section
  age: z
    .number()
    .min(12, "Must be at least 12 years old")
    .max(100, "Invalid age"),
  country: z.string(), // possibly use api to pull countries
  school: z.string(), // possibly use api to pull schools
  education_level: z.string(), // create enum
  graduation_year: z.string().optional(), // date picker or radio button,
  highest_education_level: z.string().optional(), // create enum
  ucsc_college_affiliation: z.string().optional(), // create enum
  area_of_study: z.string(), // possibly use api to pull countries
  first_hackathon: z.boolean().optional(),

  ethnic_background: z.string().array(),
  pronouns: z.string(),
  gender: z.string(),
  sexual_orientation: z.string(),
  underepresented_group: z.boolean().optional(),
})

export type ApplicationSchema = z.infer<typeof ApplicationSchema>
