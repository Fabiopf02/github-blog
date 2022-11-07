import { useContext } from 'react'
import { IssuesContext } from '../contexts/issues'

export function useIssues() {
  const issuesContext = useContext(IssuesContext)

  return issuesContext
}
