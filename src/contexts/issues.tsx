import React, { createContext, startTransition, useState } from 'react'
import { TIssue, IssuesResponse } from '../@types/issues'
import { api } from '../services/api'

interface IssuesContextData {
  issues: TIssue[]
  totalIssues: number
  searchTerm: string
  searchIssues: () => Promise<void>
  updateSearchTerm: (term: string) => void
}

export const IssuesContext = createContext({} as IssuesContextData)

interface IssuesContextProps {
  children: React.ReactNode
}

export const repo = 'rocketseat-education/reactjs-github-blog-challenge'

export function IssuesContextProvider(props: IssuesContextProps) {
  const [issues, setIssues] = useState<TIssue[]>([] as TIssue[])
  const [searchTerm, setSearchTerm] = useState('')
  const [totalIssues, setTotalIssues] = useState(0)

  const searchIssues = async () => {
    try {
      const { data } = await api.get<IssuesResponse>(`/search/issues?q=${searchTerm}%20repo:${repo}`)
      const issuesData = data.items.map(issue => ({
        id: issue.id,
        number: issue.number,
        title: issue.title,
        state: issue.state,
        created_at: issue.created_at,
        comments: issue.comments,
        body: issue.body,
      }))
      setIssues(issuesData)
      setTotalIssues(data.total_count)
      return 
    } catch(err) {
      alert('Não foi possível realizar a busca.')
    }
  }

  const updateSearchTerm = (term: string) => {
    startTransition(() => {
      setSearchTerm(term)
    })
  }
  
  return (
    <IssuesContext.Provider value={{ issues, searchIssues, totalIssues, searchTerm, updateSearchTerm }}>
      {props.children}
    </IssuesContext.Provider>
  )
}
