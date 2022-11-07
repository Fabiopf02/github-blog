import { Card } from "../../components/Card";
import { Search } from "../../components/Search";
import { UserCard } from "../../components/UserCard";
import { useIssues } from "../../hooks/issues";
import styles from './Home.module.css'

export function Home() {
  const { issues } = useIssues()

  return (
    <main className={styles.main}>
      <UserCard />

      <Search />

      <section className={styles.content}>
        {issues.map(issue => (
          <Card key={issue.id} data={issue} />
        ))}
      </section>
    </main>
  )
}