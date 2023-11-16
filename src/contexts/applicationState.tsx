import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react"

export const AppStateContext = createContext<
  [any | undefined, Dispatch<SetStateAction<any | undefined>>] | undefined
>(undefined)

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const value = useState<any>()
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  )
}
