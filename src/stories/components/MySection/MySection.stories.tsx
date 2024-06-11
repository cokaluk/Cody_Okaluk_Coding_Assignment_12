import React from "react";
import { Meta, StoryFn } from '@storybook/react';
import styled from "styled-components";
import MySection from '../MySection/MySection';
import { MySectionProps } from '../MySection/MySection.types';
import MySectionItem from "../MySectionItem/MySectionItem";
import MyImage from "../MyImage/MyImage";
import shareImage from '../../assets/share.png';


export default {
 title: "ReactComponentLibrary/testing",
 component: MySection,
} as Meta;

const Template: StoryFn<MySectionProps> = (args) => <MySection {...args} />;

export const MySectionTest = Template.bind({});
MySectionTest.args = {
 Header: "this is Header Text",
 SectionItems: [
    <MySectionItem
       Image={<MyImage src={shareImage}/>}
       HeaderText="this is Header Text"
       BodyText="this is Body Text"/>,

    <MySectionItem
       Image={<MyImage src={shareImage}/>}
       HeaderText="this is the second Header"
       BodyText="and this is the second body"/>]
};

