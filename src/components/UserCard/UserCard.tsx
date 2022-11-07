import styles from './UserCard.module.css'
import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'
import { Link } from '../Link'
import { useUser } from '../../hooks/user'
import { BsBoxArrowUpRight } from 'react-icons/bs'

export function UserCard() {
  const { user } = useUser()

  return (
    <div className='card'>
      <img srcSet={user?.avatar_url} className={styles.userImage} />
      <div className={styles.userInfo}>
        <Link to={user?.html_url} target='_blank'>
          Github
          <BsBoxArrowUpRight fontWeight={700} />
        </Link>
        <h2 className={styles.userTitle}>{user?.name}</h2>
        <p className={styles.userDescription}>{user?.bio || 'No description.'}</p>
        <div className={styles.row}>
          <div>
            <FaGithub size={18} />
            <span>{user?.login}</span>
          </div>
          <div>
            <FaBuilding size={18} />
            <span>{user?.company || 'No company'}</span>
          </div>
          <div>
            <FaUserFriends size={18} />
            <span>{user?.followers} seguidores</span>
          </div>
        </div>
      </div>
    </div>
  )
}