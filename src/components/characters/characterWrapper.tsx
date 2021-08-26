import React from 'react'
import Character from './Character'

const CharacterWrapper = ({ items, isLoading }) => {
  return isLoading ? (
    <div/>
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <Character key={item.char_id} item={item}></Character>
      ))}
    </section>
  )
}

export default CharacterWrapper
