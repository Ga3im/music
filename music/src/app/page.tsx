import Image from "next/image";
import classNames from "classnames";
import styles from "./page.module.css";
import { Navigation } from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
        <Navigation/>
          <div className={styles.main__centerblock}>
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
          </div>
          <div className={styles.main__sidebar}>
            <div className={styles.sidebar__personal}>
              <p className={styles.sidebar__personalName}>Sergey.Ivanov</p>
              <div className={styles.sidebar__icon}>
                <svg>
                  <use xlinkHref="icon/sprite.svg#logout"></use>
                </svg>
              </div>
            </div>
            <div className={styles.sidebar__block}>
              <div className={styles.sidebar__list}>
                <div className={styles.sidebar__item}>
                  <a className={styles.sidebar__link} href="#">
                    <Image
                      className={styles.sidebar__img}
                      src="/playlist01.png"
                      alt="day's playlist"
                      width={250}
                      height={150}
                    />
                  </a>
                </div>
                <div className={styles.sidebar__item}>
                  <a className={styles.sidebar__link} href="#">
                    <Image
                      className={styles.sidebar__img}
                      src="/playlist02.png"
                      alt="day's playlist"
                      width={250}
                      height={150}
                    />
                  </a>
                </div>
                <div className={styles.sidebar__item}>
                  <a className={styles.sidebar__link} href="#">
                    <Image
                      className={styles.sidebar__img}
                      src="/playlist03.png"
                      alt="day's playlist"
                      width={250}
                      height={150}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
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
        <footer></footer>
      </div>
    </div>
  );
}
