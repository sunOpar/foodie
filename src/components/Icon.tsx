import React from 'react'

export default function Icon({name, ...props}:{name: string}) {
  return (
    <svg className="icon" aria-hidden="true" {...props}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}
