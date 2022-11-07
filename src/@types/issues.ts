export interface IssueResponse {
  id: number
  url: string
  number: number
  title: string
  user: {
    login: string
    id: number
    avatar_url: string
    html_url: string
  }
  comments: number
  state: string
  created_at: string
  body: string
}

export interface IssuesResponse {
  total_count: number
  items: IssueResponse[]
}

export interface TIssue {
  id: number
  number: number
  title: string
  state: string
  created_at: string
  comments: number
  body: string
}
