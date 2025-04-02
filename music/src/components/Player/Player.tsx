import classNames from "classnames"
import styles from "./Player.module.css"

export const Player = () =>{
    return(
        <div className={styles.bar}>
        <div className={styles.bar__content}>
          <div className={styles.bar__playerProgress}></div>
          <div className={styles.bar__playerBlock}>
            <div className={styles.bar__player}>
              <div className={styles.player__controls}>
                <div className={styles.player__btnPrev}>
                  <svg className={styles.player__btnPrevSvg}>
                    <use xlinkHref="icon/sprite.svg#icon-prev"></use>
                  </svg>
                </div>
                <div className={styles.player__btnPlay}>
                  <svg className={styles.player__btnPlaySvg}>
                    <use xlinkHref="icon/sprite.svg#icon-play"></use>
                  </svg>
                </div>
                <div className={styles.player__btnNext}>
                  <svg className={styles.player__btnNextSvg}>
                    <use xlinkHref="icon/sprite.svg#icon-next"></use>
                  </svg>
                </div>
                <div className={styles._btnIcon}>
                  <svg className={styles.player__btnRepeatSvg}>
                    <use xlinkHref="icon/sprite.svg#icon-repeat"></use>
                  </svg>
                </div>
                <div className={styles._btnIcon}>
                  <svg className={styles.player__btnShuffleSvg}>
                    <use xlinkHref="icon/sprite.svg#icon-shuffle"></use>
                  </svg>
                </div>
              </div>

              <div className={styles.player__trackPlay}>
                <div className={styles.trackPlay__contain}>
                  <div className={styles.trackPlay__image}>
                    <svg className={styles.trackPlay__svg}>
                      <use xlinkHref="icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.trackPlay__author}>
                    <a
                      className={styles.trackPlay__authorLink}
                      href="http://"
                    >
                      Ты та...
                    </a>
                  </div>
                  <div className={styles.trackPlay__album}>
                    <a
                      className={styles.trackPlay__authorLink}
                      href="http://"
                    >
                      Баста
                    </a>
                  </div>
                </div>

                <div className={styles.trackPlay__likeDis}>
                  <div
                    className={classNames(
                      styles.trackPlay__like,
                      styles._btnIcon
                    )}
                  >
                    <svg className={styles.trackPlay__likeSvg}>
                      <use xlinkHref="icon/sprite.svg#icon-like"></use>
                    </svg>
                  </div>
                  <div
                    className={classNames(
                      styles.trackPlay__dislike,
                      styles._btnIcon
                    )}
                  >
                    <svg className={styles.trackPlay__dislikeSvg}>
                      <use xlinkHref="icon/sprite.svg#icon-dislike"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bar__volumeBlock}>
              <div className={styles.volume__content}>
                <div className={styles.volume__image}>
                  <svg className={styles.volume__svg}>
                    <use xlinkHref="icon/sprite.svg#icon-volume"></use>
                  </svg>
                </div>
                <div className={styles.volume__progress}>
                  <input
                    className={styles.volume__progressLine}
                    type="range"
                    name="range"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}