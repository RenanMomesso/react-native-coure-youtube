// stories/MyButton.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyButtonNew } from './ButtonNew';

export default {
  title: 'components/MyButtonNew',
  component: MyButtonNew,
} as ComponentMeta<typeof MyButtonNew>;

export const Second: ComponentStory<typeof MyButtonNew> = args => (
  <MyButtonNew {...args} />
);

Second.args = {
  text: 'UASHduahsuidhuasihd',
  color: 'purple',
};
