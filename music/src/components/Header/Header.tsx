import Image from 'next/image'
import styles from './Header.module.css'

export const Header = () => {
  const navigateToMain = () => {

  }

  return (
    <div className={styles.wrapper}>
      <div onClick={navigateToMain} className={styles.nav__logo}>
        <Image
          className={styles.logo__image}
          width={128}
          height={46}
          src="/logo_dark.png"
          alt="logo"
        />
      </div>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personalName}>Sergey.Ivanov</p>
        <div className={styles.sidebar__icon}>
          <svg>
            <use xlinkHref="icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
    </div>
  )
}
