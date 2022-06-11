import * as React from 'react';
import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity, StyleSheet, } from 'react-native';
import { List, } from '@ant-design/react-native';
import Pie from 'react-native-pie';
import * as HomeStyles from './../Sytles/HomeStyles';
import ClosedOpportunityCard from './ClosedOpportunityCard';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

function ClosedOpportunitySummary({ navigation }) {

    return (
        <View style={HomeStyles.OuterContent}>

            <View style={{ width: width, alignItems: 'center' }}>
                <Pie
                    radius={80}
                    sections={HomeStyles.gaugeSections}
                    dividerSize={6}
                    strokeCap={'butt'}
                />
                <View style={HomeStyles.chartStyles.gauge}>
                </View>
            </View>
            <Text style={HomeStyles.titleAfterPieChart}>
                Closed Opportunities
            </Text>

            <ScrollView >
                  {/* order card  */}
                    <ClosedOpportunityCard navigation={navigation} color={'#4ecf9d'} title={'Converted to Order'} text={21}/>
                    {/* offer card  */}
                    <ClosedOpportunityCard navigation={navigation} color={'#e6c67a'} title={'Offered'} text={15}/>
                      {/* extra time card  */}
                    <ClosedOpportunityCard navigation={navigation} color={'#4b92d9'} title={'Extended Time'} text={3}/>
                     {/* lose card  */}
                    <ClosedOpportunityCard navigation={navigation} color={'#e37f7f'} title={'Lost'} text={3}/>
            </ScrollView>
        </View>
    );
}

export default ClosedOpportunitySummary;