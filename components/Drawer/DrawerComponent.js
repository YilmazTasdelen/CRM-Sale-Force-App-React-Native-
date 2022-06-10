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
import Root from './TabNavigation';


const Drawer = createDrawerNavigator();

function DrawerComponent({ navigation }) {

  return (

      <Drawer.Navigator
      initialRouteName="Root"
        useLegacyImplementation
       
      >
         <Drawer.Screen name="Root" component={Root} />
        <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Drawer.Screen name="Home" component={Home} options={constants.showInDrawer} />
        <Drawer.Screen name="Opportunity" component={Opportunity} options={constants.showInDrawer} />
        <Drawer.Screen name="Offer" component={Offer} options={constants.showInDrawer} />
        <Drawer.Screen name="OpportunityDetail" component={OpportunityDetail} options={constants.showInDrawer} />
        <Drawer.Screen name="AddPhoneCall" component={AddPhoneCall} options={constants.showInDrawer} />
        <Drawer.Screen name="AddVisit" component={AddVisit} options={constants.showInDrawer} />

      </Drawer.Navigator>



  );
}

export default DrawerComponent;