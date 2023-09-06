import React from "react";
import { AbTextField, TextFiedProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Components/AbTextField',
    component: AbTextField,
    argTypes: {
        label: {
            control: 'text'
        }
    },
    parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbTextField>

const template: ComponentStory<typeof AbTextField> = (args) => <AbTextField {...args} />

export const AbTextFieldComponent = template.bind({});
AbTextFieldComponent.args = {
    label: 'Email',
} as TextFiedProps
