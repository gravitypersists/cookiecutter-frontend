import React, { FC } from 'react'

interface ComponentProps {
  readonly name: string
}

const Component: FC<ComponentProps> = (props) => {
  const { name } = props
  return <div>{`Hello ${name}`}</div>
}

export default Component