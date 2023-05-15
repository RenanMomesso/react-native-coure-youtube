// stories/MyButton.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ButtonNormal } from './Button';

export default {
  title: 'components/ButtonNormal',
  component: ButtonNormal,
} as ComponentMeta<typeof ButtonNormal>;

export const Basic: ComponentStory<typeof ButtonNormal> = args => (
  <ButtonNormal {...args} />
);

Basic.args = {
  text: 'Button 2',
  color: 'purple',
};
