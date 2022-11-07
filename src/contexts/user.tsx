import React, { createContext, useState, useEffect } from 'react'
import { userName } from '../constants/user'
import { api } from '../services/api'

interface IUser {
  name: string
  avatar_url: string
  followers: number
  html_url: string
  bio: string
  company: string
  login: string
}

interface UserContextData {
  user?: IUser
}

export const UserContext = createContext({} as UserContextData)

interface UserContextProps {
  children: React.ReactNode
}

export function UserContextProvider(props: UserContextProps) {
  const [user, setUser] = useState<IUser>()

  useEffect(() => {
    async function getUser() {
      try {
        const response = await api.get<IUser>(`/users/${userName}`)
        setUser({
          name: response.data.name,
          avatar_url: response.data.avatar_url,
          followers: response.data.followers,
          html_url: response.data.html_url,
          bio: response.data.bio,
          company: response.data.company,
          login: response.data.login,
        })
      } catch(err) {
        console.log(err)
      }
    }
    getUser()
  }, [])
  
  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  )
}
