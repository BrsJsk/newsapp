import React from 'react';
import NoData from '../shared/NoData';

export default {
  title: 'No Data',
  component: NoData,
};

const Template = (args) => <NoData {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
