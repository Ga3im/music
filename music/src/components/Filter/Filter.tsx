'use client'
import styles from './Filter.module.css'
import { FilterItem } from '../FilterItem/FilterItem'

export const Filter = () => {
  const filters: string[] = ['исполнителью', 'году выпуска', 'жанру']
  const openFilter = () => {
    console.log('saw')
  }
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
        {filters.filter((filter: string) => (
          <FilterItem onclick={openFilter} key={filter} title={filter} />
        ))}
      </div>
    </>
  )
}
