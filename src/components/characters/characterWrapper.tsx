import React from 'react'
import Character from './Character'
import Spinner from '../views/PortalLoader'

const CharacterWrapper = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <Character key={item.char_id} item={item}></Character>
      ))}
    </section>
  )
}

export default CharacterWrapper
