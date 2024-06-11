import React from "react";
import { Meta, StoryFn } from '@storybook/react';
import MyHeroImage from './MyHeroImage';
import { MyHeroImageProps } from "./MyHeroImage.types";
import shareImage from '../../assets/share.png';

export default {
 title: "ReactComponentLibrary/testing",
component: MyHeroImage,
} as Meta;

const Template: StoryFn<MyHeroImageProps> = (args) => <MyHeroImage {...args} />;

export const MyHeroImageTest = Template.bind({});

MyHeroImageTest.args = {
src: shareImage,
alt: "a placeholder picture that was in the assets folder from storybook",
disabled: false,
};

