import * as React from 'react';
import { useState } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { List, WhiteSpace, } from '@ant-design/react-native';
import * as OpportunityStyles from './../Styles/OpportunityStyles';
import OpportunityCard from './OpportunityCard';
import OpportunityListTitle from './OpportunityListTitle';
import useOpportunity from './../HookComponents/useOpportunity';


const Item = List.Item
const Brief = Item.Brief
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


function Opportunity({ navigation }) {
  const { activeSections, setActiveSections, onChange, getCustomers, customers,customerStaticList } = useOpportunity();

 getCustomers();
  const costomerItems = customerStaticList.map((customer) =>    
        <OpportunityCard
          navigation={navigation}
          text={customer.text}
          customer={customer.customer}
          deviceCount={customer.deviceCount}
          city={customer.city}
        />
        );

  return (

    <ScrollView >
      <List>
        {/* List Header Title */}
        <OpportunityListTitle />
        
         {costomerItems}
        
        {/* List item opportunities */}
        {/* <OpportunityCard
          navigation={navigation}
          text={"Teklif Verildi"}
          customer={'ARMARİN BİLİŞİM SİSTEMLERİ AŞ'}
          deviceCount={2}
          city={'Çanakkale'}
        />

        <OpportunityCard
          navigation={navigation}
          text={"Teklif Verildi"}
          customer={' AYTAŞLAR ULUSLARARASI NAKLİYAT İTHALAT İHRACAT SANAYİ VE TİCARET LİMİTED ŞİRKETİ'}
          deviceCount={2}
          city={'İstanbul'}
        />

        <OpportunityCard
          navigation={navigation}
          text={"Teklif Verildi"}
          customer={'Arvento Mobile Systems Merkez'}
          deviceCount={2}
          city={'Ankara'}
        /> */}
      </List>
    </ScrollView>
  );
}

export default Opportunity;