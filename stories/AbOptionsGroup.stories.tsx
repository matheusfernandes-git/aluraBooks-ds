import React from "react";
import { AbOptionGroupProps, AbOptionsGroup } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Components/AbOptionsGroup',
    component: AbOptionsGroup
} as ComponentMeta<typeof AbOptionsGroup>

const template: ComponentStory<typeof AbOptionsGroup> = (args) => <AbOptionsGroup {...args} />

export const Default = template.bind({});
Default.args = {
    options: [
        {
            id: 1,
            title: 'E-book',
            body: 'R$ 00,00',
            footer: '.pdf, .epub, .mob'
        },
        {
            id: 2,
            title: 'Ingresso',
            body: 'R$ 00,00',
            footer: '.pdf, .epub, .mob'
        },
        {
            id: 3,
            title: 'Ingresso + E-book',
            body: 'R$ 00,00',
            footer: '.pdf, .epub, .mob'
        }
    ]
} as AbOptionGroupProps