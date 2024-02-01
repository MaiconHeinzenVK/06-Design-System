import { styled } from '../styles'
import { ComponentProps } from 'react'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  background: '$gray800',
  border: '1px solid $gray600',
  width: '100%',
  maxWidth: '100%',
})

export type BoxProps = ComponentProps<typeof Box>
