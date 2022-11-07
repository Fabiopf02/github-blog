import { useContext } from 'react'
import { UserContext } from '../contexts/user'

export function useUser() {
  const userContext = useContext(UserContext)

  return userContext
}