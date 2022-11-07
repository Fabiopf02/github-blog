import styles from './Card.module.css'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom'
import { TIssue } from '../../@types/issues'

interface CardProps {
  data: TIssue
}

export function Card(props: CardProps) {
  const distance = formatDistanceToNow(new Date(props.data.created_at), { locale: ptBR })

  const routeToDetails = `/issue/${props.data.number}`

  return (
    <Link to={routeToDetails} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <p className={styles.cardTitle}>{props.data.title}</p>
          <p className={styles.cardTime}>Há {distance}</p>
        </div>
        <div className={styles.cardContent}>
          {props.data.body}
        </div>
      </div>
    </Link>
  )
}