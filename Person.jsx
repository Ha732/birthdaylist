import React from 'react'

function Person( { image, name, image }) {
  return (
    <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
  )
}

export default Person