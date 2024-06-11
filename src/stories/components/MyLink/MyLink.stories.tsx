import React from "react";
import { Meta, StoryFn } from '@storybook/react';
import MyLink from "./MyLink";
import { MyLinkProps } from "./MyLink.types";

export default {
 title: "ReactComponentLibrary/testing",
 component: MyLink,
} as Meta;

const Template: StoryFn<MyLinkProps> = (args) => <MyLink {...args}/>;

export const MyLinkTest = Template.bind({});

MyLinkTest.args = {
href: "google.com",
linkText: "Google",
float: "right",
disabled: false,
hover: true,
};
