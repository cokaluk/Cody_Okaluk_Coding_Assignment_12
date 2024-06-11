import { StoryFn, Meta } from '@storybook/react';
import MyText from './MyText';

export default {
title: "ReactComponentLibrary/testing",
component: MyText,
} as Meta<typeof MyText>;

const Template: StoryFn<typeof MyText> = (args) => <MyText {...args} />;

export const MyTextTest = Template.bind({});
MyTextTest.args = {
 bold: true,
 text: "Bold Test",
 disabled: false,
 size: "large",
};