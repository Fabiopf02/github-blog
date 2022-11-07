import React from "react"
import { NavLink as RouterLink } from 'react-router-dom'
import styles from './Link.module.css'

interface LinkProps {
  to?: string
  children: React.ReactNode
  target?: React.HTMLAttributeAnchorTarget
}

export function Link(props: LinkProps) {
  return (
    <RouterLink to={props.to || ''} target={props.target} className={styles.link}>
      {props.children}
    </RouterLink>
  )
}