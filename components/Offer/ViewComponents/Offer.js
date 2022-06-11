import * as React from 'react';
import { useState } from "react";
import { Button, View, Text, Image, Dimensions, TouchableOpacity, Pressable, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Accordion, List, Card, WhiteSpace, WingBlank, Flex } from '@ant-design/react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import userOffer from '../HookComponents/userOffer';
import OfferCard from './OfferCard';
import OfferForm from './OfferForm';


const Item = List.Item
const Brief = Item.Brief
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


const headerThumb = 'https://cdn1.iconfinder.com/data/icons/seo-and-marketing-icons-2/512/93-512.png';

function Offer({ navigation }) {

    const { activeSections, setActiveSections, open, setOpen, value, setValue, items, setItems, onChange } = userOffer();

    return (
        <ScrollView
            style={{ backgroundColor: '#fafafa'}}>

            <OfferForm />
            <List style={{ marginTop: 10 }}>
                <Item style={{ marginTop: 7 }}>
                    <View style={{ flexDirection: 'row' }}>

                        <TouchableOpacity >
                            <Image source={require('../../../files/offerListIcon.png')}
                                style={{
                                    height: 40,
                                    width: 40,
                                    marginRight: 15
                                }} />
                        </TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', color: 'black', marginTop: 5, fontSize: 18 }}>Offers</Text>
                    </View>

                </Item>

                <OfferCard navigation={navigation} status={'The Sale Has Been Made'} customer={'Customer company Name 1'} result={'The company you have called has been sold.'} />
                <OfferCard navigation={navigation} status={'The sale did not take place'} customer={'Customer company Name 2'} result={'No sales were made for the company you searched for.'} />
                <OfferCard navigation={navigation} status={'Available for Interview'} customer={'Customer company Name 3'} result={'The customer is available to negotiate. You need to contact your regional manager for the transfer process.'} />
                <OfferCard navigation={navigation} status={'Conversation Continues'} customer={'Customer company Name 4'} result={'Negotiations with the company continue.'} />

            </List>
        </ScrollView >
    );
}

export default Offer;