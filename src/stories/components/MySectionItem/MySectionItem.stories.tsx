import React from "react";
import { Meta, StoryFn } from '@storybook/react';
import MySectionItem from "./MySectionItem";
import MyImage from "../MyImage/MyImage";
import { MySectionItemProps } from "./MySectionItem.types";
import shareImage from '../../assets/share.png';

export default {
 title: "ReactComponentLibrary/testing",
 component: MySectionItem,
} as Meta;

const Template: StoryFn<MySectionItemProps> = (args) => <MySectionItem {...args} />;

export const MySectionItemTest = Template.bind({});
MySectionItemTest.args = {
 HeaderText: "this is the header",
 BodyText: "and this is the body",
 Disabled: false,
 Image: <MyImage src={shareImage}/>
};

