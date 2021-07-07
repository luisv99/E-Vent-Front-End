import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';

import Login from './Login'
import {
    BrowserRouter as Router,
  } from "react-router-dom";
export default {
  component: Login,
  title: 'Components/Login',
  parameters: {
    componentSubtitle: 'Vista que permite a usuarios ingresar a su cuenta',
    body: "ME QUIERO MORIR"
    },
}

export const Primary = () => <Router><Login></Login></Router>;
