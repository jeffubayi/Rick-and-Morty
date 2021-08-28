import React from 'react'
import Character from './Character'
import PortalLoader from '../views/PortalLoader'

const CharacterWrapper = ({ items, isLoading }:{ items: any[],isLoading: boolean}) => {
  return isLoading ? (
    <PortalLoader />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <Character key={item.char_id} item={item}></Character>
      ))}
    </section>
  )
}

export default CharacterWrapper
