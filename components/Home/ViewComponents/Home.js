import * as React from 'react';
import { useState } from "react";
import { View, Dimensions, AppRegistry, StyleSheet, Text, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ClosedOpportunitySummary from './ClosedOpportunitySummary';
import OpenOpportunitySummary from './OpenOpportunitySummary';
import useHome from './../HookComponents/useHome';
import Offer from './../../Offer/ViewComponents/Offer';
import Login from './../../Login/ViewComponents/Login';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

function Home({ navigation }) {

    const { open, setOpen, value, setValue, items, setItems, } = useHome();

    return (
        <ScrollView>

            <DropDownPicker
                dropDownContainerStyle={{ width: width - 10 }}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Type"
                style={{ width: width - 10, margin: 5 }}
            />

            {value === 1 ?
                <ClosedOpportunitySummary navigation={navigation}></ClosedOpportunitySummary> :
                <OpenOpportunitySummary navigation={navigation}></OpenOpportunitySummary>
            }

        </ScrollView>
    );
}

export default Home;