import * as React from 'react';
import 'react-native-reanimated';
import { createDrawerNavigator, } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import Login from './../Login/ViewComponents/Login';
import Home from './../Home/ViewComponents/Home';
import Opportunity from './../Opportunity/WiewComponents/Opportunity';
import OpportunityDetail from '../OppoortunityDetail/ViewComponents/OpportunityDetail';
import AddPhoneCall from './../PhoneCall/ViewComponents/AddPhoneCall';
import AddVisit from './../Visit/ViewComponents/AddVisit';
import Offer from './../Offer/ViewComponents/Offer';
import * as constants from './../Static/constants';


import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const TabNavigator = createBottomTabNavigator()


function Root() {
    return (
      <TabNavigator.Navigator>
        <TabNavigator.Screen name="Home" component={Home} />
        <TabNavigator.Screen name="Login" component={Login} />
        <TabNavigator.Screen name="Opportunity" component={Opportunity} />
      </TabNavigator.Navigator>
    );
  }

  export default Root;