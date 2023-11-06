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
