import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },
  '&:disabled': {
    opacity: 0.5,
    borderColor: '$ignite300',
  },

  '&:placeholder': {
    borderColor: '$gray400',
  },
})

export type TextAreaProps = ComponentProps<typeof TextArea>

TextArea.displayName = 'TextArea'
