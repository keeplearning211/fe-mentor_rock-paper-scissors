import Image from 'next/image'
import React from 'react'

export type IconName = 'close' | 'paper' | 'rock' | 'scissors' | 'rules'
interface IconImageProps {
  name: IconName,
  size?: number,
}

function IconImage({ name, size }: IconImageProps) {

  return (
    <Image src={`images/icon-${name}.svg`} width={size} height={size} alt={`${name} image`} />
  )
}

export default IconImage