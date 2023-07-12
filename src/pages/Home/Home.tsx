import { unwrapResult } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from 'src/components/Carousel/Carousel'
import Tags from 'src/components/Tags/Tags'
import { useAppDispatch } from 'src/hooks/useRedux'
import { getSongs } from 'src/store/slices/song'
import { AppDispatch, RootState } from 'src/store/store'
import { List, Song } from 'src/types/types.type'

export default function Home() {
  const { songs, error } = useSelector((state: RootState) => state.songs)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getSongs(''))
  }, [])
  return (
    <div className='container'>
      <Tags />
      {songs.map((song: any, index: number) => (
        <div
          key={song.id}
        >
          {' '}
          
          {song.sectionType === 'banner' && <Carousel numberItem= {3} song={song} img={''} />}
          {song.sectionType === 'playlist'&&  <Carousel numberItem={4} song={song} img={''}/>}
        </div>
      ))}
    </div>
  )
}

