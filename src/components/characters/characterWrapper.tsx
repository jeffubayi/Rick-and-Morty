import React from 'react'
import Character from './character'
import PortalLoader from '../views/PortalLoader'

const CharacterWrapper = ({ items, isLoading }:{ items: any[],isLoading: boolean}) => {
  return isLoading ? (
    <PortalLoader />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <Character key={item.char_id} item={item}/>
      ))}
    </section>
  )
}

export default CharacterWrapper
