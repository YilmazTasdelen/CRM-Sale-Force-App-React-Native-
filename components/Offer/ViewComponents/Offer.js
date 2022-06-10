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
                        <Text style={{ fontWeight: 'bold', color: 'black', marginTop: 5, fontSize: 18 }}>Teklifler</Text>
                    </View>

                </Item>

                <OfferCard navigation={navigation} status={'Satış Gerçekleşti'} customer={'ARVENTO MOBİLE SYSTEM SERVİCES CO.'} result={'Aramış olduğunuz firmaya satış yapılmıştır.'} />
                <OfferCard navigation={navigation} status={'Satış gerçekleşmedi'} customer={'AYTAŞLAR ULUSLARARASI NAKLİYAT İTHALAT İHRACAT SANAYİ VE TİCARET LİMİTED ŞİRKETİ'} result={'Arama yaptığınız firma için satış gerçekleşmemiştir.'} />
                <OfferCard navigation={navigation} status={'Görüşmeye Uygun'} customer={'ARMARİN BİLİŞİM SİSTEMLERİ AŞ'} result={'Müşteri görüşmeye uygundur. Devir işlemi için bölge yöneticiniz ile görüşmeniz gerekmektedir.'} />
                <OfferCard navigation={navigation} status={'Görüşme Devam Ediyor'} customer={'AYŞE GÜLÇİN GÜVEN BAYRAKTAROĞLU'} result={'Firması ile görüşmeler devam etmektedir.'} />

            </List>
        </ScrollView >
    );
}

export default Offer;