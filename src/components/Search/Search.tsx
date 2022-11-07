import React, { FormEvent, startTransition, useState } from "react";
import { useIssues } from "../../hooks/issues";
import { Input } from "../Input";
import styles from './Search.module.css'

export function Search() {
  const { totalIssues, searchIssues, updateSearchTerm, searchTerm } = useIssues()

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchTerm(event.target.value)
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    await searchIssues()
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchRow}>
        <label htmlFor="search" className={styles.searchLabel}>Publicações</label>
        <span className={styles.searchResponse}>{totalIssues} publicações</span>
      </div>
      <form onSubmit={onSubmit}>
        <Input id='search' placeholder="Buscar conteúdo" onChange={onChangeInput} value={searchTerm} />
      </form>
    </div>
  )
}