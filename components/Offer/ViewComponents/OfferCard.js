import * as React from 'react';
import { useState } from "react";
import { Button, View, Text, Image, Dimensions, TouchableOpacity, Pressable, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Accordion, List, Card, WhiteSpace, WingBlank, Flex } from '@ant-design/react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import userOffer from '../HookComponents/userOffer';
import * as OfferStyles from './../Styles/OfferStyles';


const Item = List.Item

function OfferCard(props) {

    const { activeSections, setActiveSections, open, setOpen, value, setValue, items, setItems, onChange } = userOffer();

    return (


        <Item style={OfferStyles.ListItemMargined}>
            <View style={OfferStyles.ListItemCardView}>
                <View style={OfferStyles.ListItemCardContent}>
                    <TouchableOpacity onPress={() => navigation.navigate('OpportunityDetail')} >
                        <Image
                            source={require('../../../files/offer6.png')}
                            style={OfferStyles.ListItemCardIcon} />
                        <View style={OfferStyles.ListItemCardLiner} />
                        <Text style={OfferStyles.ListItemCardStatusText}>
                            {props.status}
                        </Text>
                    </TouchableOpacity >

                </View>
                <View style={OfferStyles.ListItemCardCoutomerTextView}>
                    <Text style={OfferStyles.ListItemCardCustomerText}>
                    {props.customer}
                    </Text>
                    <View
                        style={OfferStyles.ListItemCardline}
                    />
                    <WhiteSpace size="sm" />
                    <Text style={OfferStyles.ListItemCardResultText}>
                    {props.result}
                    </Text>
                </View>
            </View>
        </Item>

    );
}

export default OfferCard;