import { IssueDetailHeader } from '../../components/IssueDetailHeader'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import styles from './Issue.module.css'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { repo } from '../../contexts/issues'
import { TIssue } from '../../@types/issues'

interface IIssue extends TIssue {
  html_url: string
  login: string
}

export function Issue() {  
  const { id } = useParams<{id: string}>()
  const [issueData, setIssueData] = useState<IIssue>()

  useEffect(() => {
    async function loadIssue() {
      if (!id) return
      try {
        const { data } = await api.get(`/repos/${repo}/issues/${id}`)
        setIssueData({
          id: data.id,
          body: data.body,
          comments: data.comments,
          created_at: data.created_at,
          number: data.number,
          html_url: data.html_url,
          title: data.title,
          state: data.state,
          login: data.user.login,
        })
      } catch (err) {
        console.log(err)
      }
    }
    loadIssue()
  }, [id])

  return (
    <div className={styles.issueContainer}>
      <IssueDetailHeader data={issueData} />
      <div className={styles.issueContent}>
        <ReactMarkdown>
          {issueData?.body || ''}
        </ReactMarkdown>
      </div>
    </div>
  )
}