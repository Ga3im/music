'use client'
import styles from './Filter.module.css'
import { FilterItem } from '../FilterItem/FilterItem'

export type TypeFilters = {
  id?: string
  title: string
  list?: string[]
}

export const Filter = () => {
  const filterDate = ['По умолчанию', 'Сначала новые', 'Сначала старые']
  const filters: TypeFilters[] = [
    { id: '1', title: 'исполнителью' },
    { id: '2', title: 'году выпуска', list: filterDate },
    { id: '3', title: 'жанру' },
  ]
  return (
    <>
      <div className={styles.centerblock__search}>
        <svg className={styles.search__svg}>
          <use xlinkHref="icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className={styles.search__text}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <div className={styles.centerblock__filter}>
        <div className={styles.filter__title}>Искать по:</div>

        {filters.map((i) => (
          <FilterItem key={i.id} title={i.title} list={i.list}/>
        ))}
      </div>
    </>
  )
}
