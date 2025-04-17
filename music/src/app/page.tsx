'use client'
import styles from './page.module.css'
import { Navigation } from '@/components/Navigation/Navigation'
import { Filter } from '@/components/Filter/Filter'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { Player } from '@/components/Player/Player'
import { Playlist } from '@/components/Playlist/Playlist'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getTracks } from '../../api/api'
import { TrackType } from '../../types/TrackType'
import { Header } from '@/components/Header/Header'

export default function Home() {
  const [isPlaying, setIsPlaying] = useState<
    boolean | Dispatch<SetStateAction<boolean>>
  >(false)
  const [allTracks, setAllTracks] = React.useState<TrackType[]>([])
  const [currentTrack, setCurrentTrack] = useState<TrackType | null>(null)

  useEffect(() => {
    try {
      getTracks().then((res) => {
        setAllTracks(res.data)
        console.log(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])
  console.log(currentTrack)
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <Navigation />
          <div className={styles.main__centerblock}>
            <Filter />
            <Sidebar />

            <Playlist
              allTracks={allTracks}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
            />
          </div>
        </main>

        {currentTrack ? (
          <Player
            currentTrack={currentTrack}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        ) : null}
        <footer></footer>
      </div>
    </div>
  )
}
