'use client'
import classNames from 'classnames'
import styles from './FilterItem.module.css'
import { TypeFilters } from '../Filter/Filter'
import { useState } from 'react'

export const FilterItem = ({ title, list }: TypeFilters) => {
  let [activeFilter, setActiveFilter] = useState<string | null>(null)

  const openFilter = () => {
    setActiveFilter(
      activeFilter === title ? (activeFilter = null) : (activeFilter = title),
    )
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

      {activeFilter && activeFilter === title ? (
        <div className={styles.list}>
          {list?.map((i) => {
            return <p key={i}>{i}</p>
          })}
        </div>
      ) : null}
    </div>
  )
}
