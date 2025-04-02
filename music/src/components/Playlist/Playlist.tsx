import classNames from "classnames"
import styles from "./Playlist.module.css";

export const Playlist = () =>{
    return(
        <>
        <div className={styles.centerblock__content}>
        <div className={styles.content__title}>
          <div
            className={classNames(styles.playlistTitleCol, styles.col01)}
          >
            Трек
          </div>
          <div
            className={classNames(styles.playlistTitleCol, styles.col02)}
          >
            Исполнитель
          </div>
          <div
            className={classNames(styles.playlistTitleCol, styles.col03)}
          >
            Альбом
          </div>
          <div
            className={classNames(styles.playlistTitleCol, styles.col04)}
          >
            <svg className={styles.playlistTitleSvg}>
              <use xlinkHref="icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div className={styles.content__playlist}>
          <div className={styles.playlist__item}>
            <div className={styles.playlist__track}>
              <div className={styles.track__title}>
                <div className={styles.track__titleImage}>
                  <svg className={styles.track__titleSvg}>
                    <use xlinkHref="icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div>
                  <a className={styles.track__titleLink} href="http://">
                    Guilt{" "}
                    <span className={styles.track__titleSpan}></span>
                  </a>
                </div>
              </div>
              <div className={styles.track__author}>
                <a className={styles.track__authorlink} href="http://">
                  Nero
                </a>
              </div>
              <div className={styles.track__album}>
                <a className={styles.track__albumlink} href="http://">
                  Welcome Reality
                </a>
              </div>
              <div>
                <svg className={styles.track__timesvg}>
                  <use xlinkHref="icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={styles.track__timeText}>4:44</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}