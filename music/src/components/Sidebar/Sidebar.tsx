import styles from './Sidebar.module.css'
import classNames from 'classnames'

export const Sidebar = () => {
  return (
    <>
      <div className={styles.main__sidebar}>
        <div className={styles.sidebar__block}>
          <div className={styles.sidebar__list}>
            <div  className={classNames(styles.sidebar__item, styles.playlist01)}>
              <p className={styles.sidebar_text}>Плейлист дня</p>
            </div>
            <div
              className={classNames(styles.sidebar__item, styles.playlist02)}
            >
              <p className={styles.sidebar_text}> 100 танцевальных хитов</p>
              <a className={styles.sidebar__link} href="#"></a>
            </div>
            <div  className={classNames(styles.sidebar__item, styles.playlist03)}>
              <p className={styles.sidebar_text}>Инди-заряд</p>
            </div>
            <div
              className={classNames(styles.sidebar__item, styles.playlist04)}
            >
              <p className={styles.sidebar_text}>Избранные</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
