import React from 'react'

import { Person } from '../../types'
import RandomPersonItem from './RandomPersonItem'

type ItemsProps = {
  items: Person[]
}


const RandomPersonList = ({ items }: ItemsProps) => {

  return (
    <div style={{display: 'flex', gap: '2em', flexDirection: 'column', alignItems: 'center',  }}>
      {items.map((person: Person) => {
                    return <RandomPersonItem key={person.login?.uuid} name={person.name} picture={person.picture}  email={person.email} />
})}
    </div>
  )
}

export default RandomPersonList