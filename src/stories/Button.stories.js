import React from 'react';
import Button from '../shared/Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Button',
};
