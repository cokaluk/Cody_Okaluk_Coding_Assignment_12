import React from "react";
import { Meta, StoryFn } from '@storybook/react';
import MyImage from "./MyImage";
import { MyImageProps } from "./MyImage.types";
import shareImage from '../../assets/share.png';

export default {
 title: "ReactComponentLibrary/testing",
 component: MyImage,
} as Meta;

const Template: StoryFn<MyImageProps> = (args) => <MyImage {...args} />;

export const MyImageTest = Template.bind({});

MyImageTest.args = {
src: shareImage,
alt: 'a random picture from the default assets provided to me by storybook',
width: 200,
height: 200,
disabled: false,
shape: 'circle',
};


