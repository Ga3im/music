import classNames from "classnames";
import styles from "./Filter.module.css";

export const Filter = () =>{
    return(
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
        <div
          className={classNames(styles.filter__button, styles.btnText)}
        >
          исполнителю
        </div>
        <div
          className={classNames(styles.filter__button, styles.btnText)}
        >
          году выпуска
        </div>
        <div
          className={classNames(styles.filter__button, styles.btnText)}
        >
          жанру
        </div>
      </div>
      </>
    )
}