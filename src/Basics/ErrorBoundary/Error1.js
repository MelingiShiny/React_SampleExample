import React from 'react'

function Error1({heroName}) {
    if(heroName === 'Joker'){
        throw new Error('Not a hero!')
    }
  return (
    <div>
        {heroName}
    </div>
  )
}

export default Error1