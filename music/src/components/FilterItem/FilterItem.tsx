'use client'
import classNames from 'classnames'
import styles from './FilterItem.module.css'
import { TypeFilters } from '../Filter/Filter'

export const FilterItem = ({
  title,
  list,
  activeFilter,
  setActiveFilter,
}: TypeFilters) => {
  const openFilter = () => {
    if (setActiveFilter) {
      setActiveFilter(activeFilter === title ? null : title)
    }
  }

  return (
    <div className={styles.content}>
      <div
        onClick={openFilter}
        className={
          activeFilter === title
            ? classNames(styles.filter__button__active, styles.btnText_active)
            : classNames(styles.filter__button, styles.btnText)
        }
      >
        {title}
      </div>

      {activeFilter === title && (
        <div className={styles.list}>
          {list?.map((i) => {
            return <p key={i}>{i}</p>
          })}
        </div>
      )}
    </div>
  )
}
