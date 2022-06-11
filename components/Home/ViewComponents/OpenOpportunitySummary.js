import * as React from 'react';
import { useState } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, } from 'react-native';
import { List, Steps, } from '@ant-design/react-native';
import Pie from 'react-native-pie';
import * as HomeStyles from './../Sytles/HomeStyles';
import ClosedOpportunityCard from './ClosedOpportunityCard';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height





function OpenOpportunitySummary({ navigation }) {



    return (
        <View style={HomeStyles.openOppurtunityOuterView}>

            <View style={HomeStyles.openOppurtunityGaugeView}>
                <Pie
                    radius={80}
                    innerRadius={65}
                    sections={HomeStyles.openOppurtunityChartGaugePerc(60)} //send percentence to function
                    backgroundColor="#ddd" />
                <View style={HomeStyles.openOppurtunityChartGauge}>
                    <Text style={HomeStyles.openOppurtunityChartGaugeText}>
                        60%
                    </Text>
                </View>
            </View>



            <Text style={HomeStyles.openOppurtunityTitle}>
                Open Opportunities
            </Text>


            <ClosedOpportunityCard navigation={navigation} color={'#4ecf9d'} title={'Phone Calls Made'} text={21} />
            {/* offer card  */}
            <ClosedOpportunityCard navigation={navigation} color={'#e6c67a'} title={'Bids Offered'} text={15} />
            {/* extra time card  */}
            <ClosedOpportunityCard navigation={navigation} color={'#4b92d9'} title={'Appointments'} text={3} />
            {/* lose card  */}
        </View>
    );
}

export default OpenOpportunitySummary;