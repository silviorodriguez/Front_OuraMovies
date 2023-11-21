import React from 'react'

const ImageCard = ( { url, title }) => {
  return (
    <div>
        <img src={ url } alt={ title } />
    </div>
  )
}

export default ImageCard
