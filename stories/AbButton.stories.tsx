import React from "react";
import { AbButton, AbButtonProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Components/AbButton',
    component: AbButton
} as ComponentMeta<typeof AbButton>

const template: ComponentStory<typeof AbButton> = (args) => <AbButton {...args} />

export const primary = template.bind({});

primary.args = {
    text: 'Ab Botão Primário',
    tipo: 'primary'
} as AbButtonProps

export const secondary = template.bind({});

secondary.args = {
    text: 'Ab Botão Secundário',
    tipo: 'secondary'
} as AbButtonProps