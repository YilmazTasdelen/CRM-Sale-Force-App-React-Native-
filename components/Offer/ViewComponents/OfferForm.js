import * as React from 'react';
import { useState } from "react";
import { Button, View, Text, Image, Dimensions, TouchableOpacity, Pressable, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Accordion, List, Card, WhiteSpace, WingBlank, Flex } from '@ant-design/react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import userOffer from '../HookComponents/userOffer';
import OfferCard from './OfferCard';
import * as OfferStyles from '../Styles/OfferStyles';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

function OfferForm({ navigation }) {

    const { activeSections, setActiveSections, open, setOpen, value, setValue, items, setItems, onChange } = userOffer();

    return (

        <View style={{ backgroundColor: '#fafafa' }}>
            <DropDownPicker
                dropDownContainerStyle={OfferStyles.offerFormDropdownContainer}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Filter"
                style={OfferStyles.offerFormDropdown}
            />
            <TextInput
                style={OfferStyles.offerFormTextInput}
                //onChangeText={onChangeText}
                value="Search"
            />
            <Pressable
                style={OfferStyles.offerFormPressable}
            // onPress={onPress}
            >
                <Text style={OfferStyles.offerFormText}>
                Search for Offers (by Authorization)
                </Text>
            </Pressable>
        </View >
    );
}

export default OfferForm;