'use client'
import classNames from 'classnames'
import styles from './Playlist.module.css'
import React, { useEffect, useState } from 'react'
import { getTracks } from '../../../api/api'
import { Track } from '../Track/Track'
import { TrackType } from '../../../types/TrackType'

export const Playlist = () => {
  const [allTracks, setAllTracks] = React.useState<TrackType[]>([])

  useEffect(() => {
    try {
      getTracks().then((res) => {
        setAllTracks(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])
  console.log(allTracks)
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
                  key={track._id}
                  name={track.name}
                  author={track.author}
                  genre={track.genre}
                  album={track.album}
                  duration_in_seconds={track.duration_in_seconds}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
