import * as React from 'react';
import DrawerComponent from './components/Drawer/DrawerComponent';
import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './components/Login//ViewComponents/Login';
import Home from './components/Home/ViewComponents/Home';
import Opportunity from './components/Opportunity/WiewComponents/Opportunity';
import Offer from './components/Offer/ViewComponents/Offer';
import { createDrawerNavigator, } from '@react-navigation/drawer';
import * as constants from './components/Static/constants';
import OpportunityDetail from './components/OppoortunityDetail/ViewComponents/OpportunityDetail';
import AddPhoneCall from './components/PhoneCall/ViewComponents/AddPhoneCall';
import AddVisit from './components/Visit/ViewComponents/AddVisit';


const App = () => {
  return (
    // <NavigationContainer>
    //   <DrawerComponent />
    // </NavigationContainer>

    <NavigationContainer>
    <DrawerNavigator />
    </NavigationContainer>
  );
};


const Stack = createStackNavigator();

const StackNavigator = () => {
 return (
<Stack.Navigator>
{/* <Stack.Screen name="drawer"            component={TabsNavigator}   options={{ headerShown: false,}}/> */}
 <Stack.Screen name="Login"             component={Login}             options={{ headerShown: false,}}/> 
<Stack.Screen name="Home"              component={Home}              options={{ headerShown: false,}}/>
<Stack.Screen name="Opportunity"       component={Opportunity}       options={{ headerShown: false,}}/>
<Stack.Screen name="Offer"             component={Offer}             options={{ headerShown: false,}}/>
<Stack.Screen name="OpportunityDetail" component={OpportunityDetail} options={{ headerShown: false,}}/>
<Stack.Screen name="AddPhoneCall"      component={AddPhoneCall}      options={{ headerShown: false,}}/>
<Stack.Screen name="AddVisit"          component={AddVisit}          options={{ headerShown: false,}}/>

</Stack.Navigator>
 );
};

const Tabs = createBottomTabNavigator();
const TabsNavigator = () => {
 return (
<Tabs.Navigator>
<Tabs.Screen name="Home"        component={Home}    options={{ headerShown: false,}}/> 
 <Tabs.Screen name="Offer"       component={Offer}             options={{ headerShown: false,}}/> 
<Tabs.Screen name="Opportunity" component={Opportunity}       options={{ headerShown: false,}}/>

</Tabs.Navigator>
 );
};

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
 return (
<Drawer.Navigator>
        <Drawer.Screen name="StackNavigator"     component={StackNavigator}   options={{ headerShown: false,}} />
        <Drawer.Screen name="Login"             component={Login}             options={{ headerShown: false,tabBarStyle: { display: 'none' } }} />
        <Drawer.Screen name="Home"              component={Home}              options={constants.showInDrawer} />
        <Drawer.Screen name="Opportunity"       component={Opportunity}       options={constants.showInDrawer} />
        <Drawer.Screen name="Offer"             component={Offer}             options={constants.showInDrawer} />
        <Drawer.Screen name="OpportunityDetail" component={OpportunityDetail} options={constants.showInDrawer} />
        <Drawer.Screen name="AddPhoneCall"      component={AddPhoneCall}      options={constants.showInDrawer} />
        <Drawer.Screen name="AddVisit"          component={AddVisit}          options={constants.showInDrawer} />
</Drawer.Navigator>
 );
};
export default App;
