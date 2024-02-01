import { StoryObj, Meta } from '@storybook/react'

import { Button, ButttonProps} from "@ignite-ui/react"

export default {
    title: 'Button',
    component: Button,

    args: {
        children: "Enviar"
    }

} as Meta

export const Primary: StoryObj<ButttonProps> = {

}

export const Big : StoryObj<ButttonProps> = {
    args: {
        size: 'big'
    }
}