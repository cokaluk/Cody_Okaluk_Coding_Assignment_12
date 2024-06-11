import React from "react";
import { Meta, StoryFn } from '@storybook/react';
import MyNavBar from "./MyNavBar";
import { MyNavBarProps } from "./MyNavBar.types";
import MyLink from "../MyLink/MyLink";

export default {
 title: "ReactComponentLibrary/testing",
component: MyNavBar,
} as Meta;

const Template: StoryFn<MyNavBarProps> = (args) => <MyNavBar {...args} />;

export const MyNavBarTest = Template.bind({});
MyNavBarTest.args = {
 links: [<MyLink href="google.com" float="left" linkText="google" hover/>,
         <MyLink href="#" linkText="home" hover/>,
         <MyLink href="#" linkText="content" disabled/>],
 stationairy: true,
 disabled: false,
};

