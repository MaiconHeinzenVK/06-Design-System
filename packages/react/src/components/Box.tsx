import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  background: '$gray800',
  border: '1px solid $gray600',
  width: '100%',
  height: '100%',
  maxWidth: '100%',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
