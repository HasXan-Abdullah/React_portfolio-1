import React from 'react'

const Social = (props) => {
  return (
    <div>
        <ul>
        <li>
            <a href={props.href}>
            <i class={props.iconName} aria-hidden="true"></i>
            </a>
        </li>
        </ul>
    </div>
  )
}

export default Social