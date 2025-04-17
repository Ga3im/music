import { Dispatch, SetStateAction, useState } from 'react'
import { TrackType } from '../../../types/TrackType'
import styles from './Track.module.css'

type trackPropType = {
  track: TrackType
  setIsPlaying: Dispatch<
    SetStateAction<boolean | Dispatch<SetStateAction<boolean>>>
  >
  isPlaying: boolean | Dispatch<SetStateAction<boolean>>
  currentTrack: TrackType
  setCurrentTrack: Dispatch<SetStateAction<TrackType | null>>
}

export const Track = ({
  track,
  setIsPlaying,
  isPlaying,
  currentTrack,
  setCurrentTrack,
}: trackPropType) => {
  const playMusic = () => {
    setCurrentTrack(track)
    if (isPlaying) {
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
    }
  }
  return (
    <div
      onClick={playMusic}
      className={
        track === currentTrack ? styles.activeTrack : styles.playlist__track
      }
    >
      <div className={styles.track__title}>
        <div className={styles.track__titleImage}>
          <svg className={styles.track__titleSvg}>
            <use xlinkHref="icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div>
          <a className={styles.track__titleLink} href="http://">
            {track.name} <span className={styles.track__titleSpan}></span>
          </a>
        </div>
      </div>
      <div className={styles.track__author}>
        <a className={styles.track__authorlink} href="http://">
          {track.author}
        </a>
      </div>
      <div className={styles.track__album}>
        <a className={styles.track__albumlink} href="http://">
          {track.album}
        </a>
      </div>
      <div>
        <svg className={styles.track__timesvg}>
          <use xlinkHref="icon/sprite.svg#icon-like"></use>
        </svg>
        <span className={styles.track__timeText}>
          {track.duration_in_seconds}
        </span>
      </div>
    </div>
  )
}
