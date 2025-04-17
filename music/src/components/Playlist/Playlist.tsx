import classNames from 'classnames'
import styles from './Playlist.module.css'
import { Track } from '../Track/Track'
import { TrackType } from '../../../types/TrackType'
import { Dispatch, SetStateAction } from 'react'

type playlistPropType = {
  allTracks: TrackType[]
  setIsPlaying: Dispatch<
    SetStateAction<boolean | Dispatch<SetStateAction<boolean>>>
  >
  currentTrack: TrackType
  setCurrentTrack: Dispatch<SetStateAction<TrackType | null>>
  isPlaying: boolean | Dispatch<SetStateAction<boolean>>
}
export const Playlist = ({
  allTracks,
  setIsPlaying,
  currentTrack,
  setCurrentTrack,
  isPlaying,
}: playlistPropType) => {
  return (
    <>
      <div className={styles.centerblock__content}>
        <div className={styles.content__title}>
          <div className={classNames(styles.playlistTitleCol, styles.col01)}>
            Трек
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col02)}>
            Исполнитель
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col03)}>
            Альбом
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col04)}>
            <svg className={styles.playlistTitleSvg}>
              <use xlinkHref="icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div className={styles.content__playlist}>
          <div className={styles.playlist__item}>
            {allTracks.map((track) => {
              return (
                <Track
                  isPlaying={isPlaying}
                  currentTrack={currentTrack}
                  setCurrentTrack={setCurrentTrack}
                  setIsPlaying={setIsPlaying}
                  key={track._id}
                  track={track}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
