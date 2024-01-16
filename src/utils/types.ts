import { Dispatch } from "react"
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
  pronouns?: string
}

// Schema pulled from 2023 Hacker Application form:
// https://docs.google.com/forms/d/1qtk6kBBq6jZ9rprDl-U_4Pvl5vhJ30PH2B759A-xA1k/edit
export const ApplicationStatuses = [
  "draft",
  "submitted",
  "accepted",
  "rejected",
] as const
export type ApplicationStatus = (typeof ApplicationStatuses)[number]

export const UserRoles = ["applicant", "hacker", "judge", "admin"] as const
export type UserRole = (typeof UserRoles)[number]

export const ApplicationSchema = z.object({
  status: z.enum(ApplicationStatuses),
  rsvp: z.boolean().optional(),
  email: z.string().email("Invalid email address."),
  fullname: z.string(),
  _submitted: z.any(),
  _last_committed: z.any(),
})
export type ApplicationSchema = z.infer<typeof ApplicationSchema>

// Section 0 - User Information
export const AppUserSchema = z.object({
  email: z
    .string()
    .min(1, "Please include an email")
    .email("Invalid email address"),
  first_name: z.string().min(1, "Please include a first name"),
  last_name: z.string().min(1, "Please include a last name"),
  phone_number: z
    .string()
    .min(1, "Phone number is required")
    .refine(
      value => /^\d{10}$/.test(value),
      "Please format digits as 1231231234"
    ),
  password: z.string().min(1, "Please include a password"),
})
export type AppUserSchema = z.infer<typeof AppUserSchema>

// Section 1 - Demographics
const prefer__not_to_answer =
  'Please specify "Prefer not to answer" if you do not want to answer this question'
export const AppDemographicsSchema = z.object({
  age: z
    .number({ invalid_type_error: "Please include an age" })
    .min(1, "Please include an age")
    .min(12, "Must be at least 12 years old")
    .max(120, "Invalid age"),
  country: z.string().min(1, "Please include a country"),
  school: z.string().min(1, "Please include a school"),

  ucsc_college_affiliation: z.string().min(1, "Please Answer"),

  year_in_school: z.string().min(5, "Please specify your year in school"),

  education_level: z.string().min(1, "Please specify your education level"),

  graduation_year: z.string().min(1, "Please specify your graduation year"),

  area_of_study: z.string().min(1, "Please specify your area of study"),

  first_cruzhacks: z.string().min(1, "Please Answer"),
  hackathon_experience: z.string().min(1, "Please Answer"),
  tech_experience: z.string().max(1500, "Character limit exceeded."),

  ethnic_background: z.string(),

  pronouns: z.string(),

  gender_identity_one: z.string({ required_error: prefer__not_to_answer }),
  gender_identity_two: z.string({ required_error: prefer__not_to_answer }),

  sexual_orientation: z.string().optional(),

  underepresented_group: z.string().optional(),
})
export type AppDemographicsSchema = z.infer<typeof AppDemographicsSchema>

// Section 2 - short response
export const AppShortResponseSchema = z.object({
  why_cruzhacks: z.string().max(1500, "Character limit exceeded."),
  what_would_you_like_to_see: z.string().max(1500, "Character limit exceeded."),
  grand_invention: z.string().max(1500, "Character limit exceeded."),
  back_in_time_invention: z.string().max(1500, "Character limit exceeded."),
  one_plane_ticket_anywhere: z.string().max(1500, "Character limit exceeded."),
})

export type AppShortResponseSchema = z.infer<typeof AppShortResponseSchema>

// Section 3 - logistcs
export const AppLogisticsSchema = z.object({
  need_travel_reimbursement: z.string(),
  need_charter_bus: z.string(),
  attendence_possible_wo_reimbursement: z.string(),

  need_campus_parking_permit: z.string(),
  travel_plan: z.string().max(1500, "Character limit exceeded."),

  tshirt_size: z.string(),
  dietary_restrictions: z.string(),
})
export type AppLogisticsSchema = z.infer<typeof AppLogisticsSchema>

// Section 4 - socials
export const AppSocialsSchema = z.object({
  resume_drop_form: z.string(),

  linkedin: z.string().optional(),
  github: z.string().optional(),
  discord: z.string().optional(),

  cruzhacks_referral: z.string().optional(), // how did you hear about CruzHacks
  // email of person who referred
  cruzhacks_refferal_email: z.string().optional(),
  cruzhacks_refferal_organization: z
    .string()
    .max(200, "Character limit exceeded.")
    .optional(),
  anything_else: z.string().max(1500, "Character limit exceeded."),
})
export type AppSocialsSchema = z.infer<typeof AppSocialsSchema>

// Section 5 - waivers
const required_error = "Sorry, you must agree to continue"
export const AppWaiversSchema = z.object({
  mlh_code_conduct: z.string({
    required_error,
  }),
  mlh_data_sharing: z.string({
    required_error,
  }),
  cruzhacks_conduct: z.string({
    required_error,
  }),
  comm_from_mlh: z.string({
    required_error,
  }),
  comm_from_cruzhacks: z.string({
    required_error,
  }),
  covid_safety: z.string({
    required_error,
  }),
  parental_consent: z.string({
    required_error:
      "Please confirm that you are 18 years or older or get an adult to sign the form",
  }),
})
export type AppWaiversSchema = z.infer<typeof AppWaiversSchema>

// Application Transfer Schema, used for sending application data to the server
export const ApplicationSchemaDto = z.object({
  user: AppUserSchema,
  demographics: AppDemographicsSchema,
  short_response: AppShortResponseSchema,
  logistics: AppLogisticsSchema,
  socials: AppSocialsSchema,
})
export type ApplicationSchemaDto = z.infer<typeof ApplicationSchemaDto>

// Application Download Schema, used for downloading application data from the
// database
export const ApplicationSchemaDownload = z.object({
  user: z.object({
    email: z.string(),
    phone_number: z.string(),
    display_name: z.string(),
    checked_in: z.boolean().optional(),
  }),
  submission: z.object({
    status: z.enum(ApplicationStatuses),
    rsvp: z.boolean().optional(),
    _submitted: z.any(),
  }),
  demographics: AppDemographicsSchema,
  short_response: AppShortResponseSchema,
  logistics: AppLogisticsSchema,
  socials: AppSocialsSchema,
})
export type ApplicationSchemaDownload = z.infer<
  typeof ApplicationSchemaDownload
>

// Tailwindcss Heroicon
export type HeroIcon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined
    titleId?: string | undefined
  } & React.RefAttributes<SVGSVGElement>
>

// Team Creation
export type InvitationMode = "JOIN" | "CREATE" | "INTEAM"

export interface TeamProps {
  teamName: string
  teamLeader: string
  invites: Array<InvitationProps>
}

export interface TeamMemberProps {
  memberName: string
  memberEmail: string
}

export interface InvitationProps {
  teamName: string
}

export interface TeamFormationProps {
  teamName: string
  teamMembers: Array<TeamMemberProps>
  invitedTeamMembers: Array<TeamMemberProps>
  teamLeader: string
  lockedIn: boolean
  invites: Array<InvitationProps>
}

export interface TeamDisplayProps {
  teamPage: TeamFormationProps
  setTeamPage: Dispatch<TeamFormationProps>
  setTeamStatus: Dispatch<InvitationMode>
}

export interface TeamBuilderProps {
  teamPage: TeamFormationProps
  teamStatus: InvitationMode
  setTeamPage: Dispatch<TeamFormationProps>
  setTeamStatus: Dispatch<InvitationMode>
}

export interface TeamInviteProps {
  teamPage: TeamFormationProps
  setTeamPage: Dispatch<TeamFormationProps>
}

export interface TeamMemberTagProps {
  name: string
  email: string
  type: "INVITED" | "ACCEPTED"
  teamLeader: string
  setTeamPage: Dispatch<TeamFormationProps>
}

// Statistics Types
export type ReChartsArray = { name: string; value: number }[]

export type Statistics = {
  submissions: {
    per_day: ReChartsArray
    total: number
    accepted: number
    rejected: number
    approvalRate: number
  }
  demographics: {
    age: ReChartsArray
    age_range_18_to_25: ReChartsArray
    ethnic_background: ReChartsArray
    sexual_orientation: ReChartsArray
    gender_identity_one: ReChartsArray
    gender_identity_two: ReChartsArray
    underepresented_group: ReChartsArray

    country: ReChartsArray
    ucsc_vs_non_ucsc: ReChartsArray
    ucsc_college_affiliation: ReChartsArray
    year_in_school: ReChartsArray
    graduation_year: ReChartsArray
    area_of_study: ReChartsArray
    area_of_study_cs_ce_gd_other: ReChartsArray
    hackathon_experience: ReChartsArray
    first_cruzhacks: ReChartsArray
  }
  logistics: {
    need_travel_reimbursement: ReChartsArray
    need_charter_bus: ReChartsArray
    need_campus_parking_permit: ReChartsArray
    attendence_possible_wo_reimbursement: ReChartsArray

    tshirt_size: { [key: string]: number }
    rsvpd_tshirt_size: { [key: string]: number }
    other_tshirt_size: ReChartsArray
    rsvpd_other_tshirt_size: ReChartsArray
    dietary_restrictions: { [key: string]: number }
    rsvpd_dietary_restrictions: { [key: string]: number }
    other_dietary_restrictions: ReChartsArray
    rsvpd_other_dietary_restrictions: ReChartsArray
  }
  referral: {
    cruzhacks_referral: ReChartsArray
  }
}
