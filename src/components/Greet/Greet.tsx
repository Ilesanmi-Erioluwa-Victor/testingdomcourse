import React from 'react'
type nameProps = {
    name? : string
}

const Greet = (props : nameProps) => {
  return (
    <div>
      Hello {props.name}
    </div>
  )
}

export default Greet

