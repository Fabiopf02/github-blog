import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaCalendarDay, FaChevronLeft, FaComment, FaGithub } from "react-icons/fa";
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from "../Link";
import styles from './IssueDetailHeader.module.css'
import linkStyle from '../Link/Link.module.css'

interface IssuesDetailHeaderProps {
  data?: {
    title: string
    login: string
    comments: number
    created_at: string
    html_url: string
  }
}

export function IssueDetailHeader({ data }: IssuesDetailHeaderProps) {
  const distance = data?.created_at ? formatDistanceToNow(new Date(data?.created_at!), { locale: ptBR }) : ''
  
  return (
    <div className="card">
      <div className={styles.content}>
        <div className={styles.head}>
          <Link to='/'>
            <FaChevronLeft />
            Voltar
          </Link>
          <a href={data?.html_url} className={linkStyle.link} target='_blank'>
            Ver no Github
            <BsBoxArrowUpRight fontWeight={700} />
          </a>
        </div>
        <h2 className={styles.title}>{data?.title}</h2>
        <div className={styles.footer}>
          <div className={styles.footerIcon}>
            <FaGithub size={18} />
            <span>{data?.login}</span>
          </div>
          <div className={styles.footerIcon}>
            <FaCalendarDay size={18} />
            <span>Há {distance}</span>
          </div>
          <div className={styles.footerIcon}>
            <FaComment size={18} />
            <span>{data?.comments} comentário(s)</span>
          </div>
        </div>
      </div>
    </div>
  )
}