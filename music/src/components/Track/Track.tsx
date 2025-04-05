import styles from './Track.module.css'

export const Track = ({ name, author, album, time }) => {
  return (
    <div className={styles.playlist__track}>
      <div className={styles.track__title}>
        <div className={styles.track__titleImage}>
          <svg className={styles.track__titleSvg}>
            <use xlinkHref="icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div>
          <a className={styles.track__titleLink} href="http://">
            {name} <span className={styles.track__titleSpan}></span>
          </a>
        </div>
      </div>
      <div className={styles.track__author}>
        <a className={styles.track__authorlink} href="http://">
          {author}
        </a>
      </div>
      <div className={styles.track__album}>
        <a className={styles.track__albumlink} href="http://">
          {album}
        </a>
      </div>
      <div>
        <svg className={styles.track__timesvg}>
          <use xlinkHref="icon/sprite.svg#icon-like"></use>
        </svg>
        <span className={styles.track__timeText}>{time}</span>
      </div>
    </div>
  )
}
