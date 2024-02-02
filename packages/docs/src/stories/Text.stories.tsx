import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from "@ignite-ui/react"

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cupiditate pariatur. Qui dolorum possimus enim velit a repellat, dignissimos nemo molestias vel pariatur unde non ea repellendus et rem soluta.",
    }

} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CostumTag: StoryObj<TextProps> = {
    args: {
        children: 'strong text',
        as: 'strong',
    }
}
