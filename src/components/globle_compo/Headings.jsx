import React from 'react'

const Headings = (props) => {
  return (
    <div className='heading-child'>
        <span className='span'>{props.span}</span>
        <h1>{props.headings}</h1>
    </div>
  )
}

export default Headings