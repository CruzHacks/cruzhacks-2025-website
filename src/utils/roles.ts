const userRoles = ["applicant", "hacker", "judge", "admin"] as const
export type UserRole = (typeof userRoles)[number]

export default userRoles
