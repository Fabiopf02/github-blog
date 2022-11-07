import LogoSvg from '../../assets/Logo.svg'
import EffectLeftSvg from '../../assets/header-effect-left.svg'
import EffectRightSvg from '../../assets/header-effect-right.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={EffectLeftSvg} alt="Logo Github Blog" />
      <img src={LogoSvg} alt="Logo Github Blog" className={styles.mainLogo} />
      <img src={EffectRightSvg} alt="Logo Github Blog" />
    </header>
  )
}