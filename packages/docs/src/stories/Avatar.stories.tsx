import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from "@heinzen-ui/react"

export default {
    title: 'Data Display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/MaiconHeinzenVK.png',
        alt: 'Maicon Heinzen',
    },
    argTypes: {
        src: {
            control: {
                type: 'text',
            }
        }
    }

} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined
    }
}