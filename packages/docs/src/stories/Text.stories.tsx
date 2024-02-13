import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from "@heinzen-ui/react"

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        size: 'md',
        children: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cupiditate pariatur. Qui dolorum possimus enim velit a repellat, dignissimos nemo molestias vel pariatur unde non ea repellendus et rem soluta.",
    },
    argTypes: {
        size: {
            options: [
                'xxs',
                'xs',
                'sm',
                'md',
                'lg',
                'xl',
                '2xl',
                '4xl',
                '5xl',
                '6xl',
                '7xl',
                '8xl',
                '9xl',
            ],
            control: {
                type: 'inline-radio',
            }
        },
    
    }
    
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CostumTag: StoryObj<TextProps> = {
    args: {
        children: 'strong text',
        as: 'strong',
    }
}