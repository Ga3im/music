'use client'
import classNames from 'classnames'
import styles from './FilterItem.module.css'
export const FilterItem = (title: any) => {
  return (
    <>
      <div className={classNames(styles.filter__button, styles.btnText)}>
        {title}
      </div>
      <div className={styles.list}></div>
    </>
  )
}
