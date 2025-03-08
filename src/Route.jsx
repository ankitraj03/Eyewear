import React from 'react';
import { Route } from 'react-router-dom';
import Section from './components/Section';
import Eyesection from './components/Eyesection/Eyesection';
import Specdatails from './components/Specsection/Specdatails';
import SignIn from './components/Sign/Signin';
import Wishlist from './components/Wishlist/Wishlist';

const RoutesConfig = [
  <Route key="home" path="/" element={<Section />} />,
  <Route key="eyesection" path="/Eyesection/:id" element={<Eyesection />} />,
  <Route key="specdatails" path="/Specdatails/:id" element={<Specdatails />} />,
  <Route key="signin" path='/Signin' element={<SignIn/>}/>,
  <Route key="section" path='/Section' element={<Section/>}/>,
  <Route key="wishlist" path="/Wishlist" element={<Wishlist/>}/>
];

export default RoutesConfig;
