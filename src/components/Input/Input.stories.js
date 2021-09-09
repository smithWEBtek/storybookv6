import React from 'react';

import Input from './Input';

export default {
  title: 'Form/Input',
  component: Input
}

export const Small = () => (
  <Input variant='small' placeholder='small input'></Input>
)

export const Medium = () => (
  <Input variant='medium' placeholder='medium input'></Input>
)

export const Large = () => (
  <Input variant='large' placeholder='large input'></Input>
)

Small.storyName = 'Small Input'
Medium.storyName = 'Medium Input'
Large.storyName = 'Large Input'