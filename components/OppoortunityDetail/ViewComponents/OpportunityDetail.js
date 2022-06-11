import * as React from 'react';
import { useState } from "react";
import { View, Text, Image, ScrollView, Dimensions, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Accordion, List, Card, WhiteSpace, WingBlank, Icon, Steps, Flex, Button } from '@ant-design/react-native';
import StepIndicator from 'react-native-step-indicator';
import * as OpportunityDetailStyles from '../Styles/OppoortunityDetailStyles';
import useOpportunityDetail from '../HookComponents/useOpportunityDetail';

const Step = Steps.Step
const Item = List.Item



function OpportunityDetail({ navigation }) {

    const { width, height, thumbUrl, phoneUrl, } = useOpportunityDetail();

    return (
        <View >
            <View style={OpportunityDetailStyles.HeaderOuterContainer} >
                <View style={OpportunityDetailStyles.HeaderContainer} >
                    <WingBlank>
                        <Flex>
                            <Flex.Item style={OpportunityDetailStyles.HeaderWinkBlank}>
                                <Text style={OpportunityDetailStyles.HeaderTitle}>Customer Company Name ..</Text>
                                <Text style={OpportunityDetailStyles.HeaderTitle}>Status : Won</Text>
                            </Flex.Item>
                        </Flex>
                    </WingBlank>

                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>

                    <View style={{ width: width }} >
                        <StepIndicator
                            stepCount={6}
                            customStyles={OpportunityDetailStyles.headerStepsStyles}
                            currentPosition={OpportunityDetailStyles.currentPosition}
                            labels={OpportunityDetailStyles.labels}
                        />
                    </View>
                </View>
            </View >


            <List renderHeader={'Opportunity Details'}>

                <Item thumb={thumbUrl()}>
                    <Text style={OpportunityDetailStyles.ListLabel}>Opportunity Source :
                        <Text style={OpportunityDetailStyles.ListText}>Bayii-portföyü</Text> </Text>
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={OpportunityDetailStyles.ListLabel}>Product Count :
                        <Text style={OpportunityDetailStyles.ListText}>1</Text> </Text>
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={OpportunityDetailStyles.ListLabel}> Salesman    :
                        <Text style={OpportunityDetailStyles.ListText}>Yılmaz Taşdelen</Text> </Text>
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={OpportunityDetailStyles.ListLabel}>Create Date    :
                        <Text style={OpportunityDetailStyles.ListText}>3.6.202216:39</Text> </Text>
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={OpportunityDetailStyles.ListLabel}>Meeting Contol Date    :
                        <Text sstyle={OpportunityDetailStyles.ListText}> 3.6.2022 16:39</Text> </Text>
                </Item>


                <Item thumb={thumbUrl()}>
                    <Flex>
                        <Flex.Item style={OpportunityDetailStyles.CityLabel}>
                            <Text style={OpportunityDetailStyles.CityText}>City:{"\n"}
                                <Text style={OpportunityDetailStyles.CityValue}>İstanbul</Text></Text>
                        </Flex.Item>
                        <Flex.Item style={OpportunityDetailStyles.CityLabel}>
                            <Text style={OpportunityDetailStyles.CityText}>County:{"\n"}
                                <Text style={OpportunityDetailStyles.CityValue}>Anadolu</Text></Text>
                        </Flex.Item>
                    </Flex>
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={OpportunityDetailStyles.ListLabel}>Description   :
                        <Text style={OpportunityDetailStyles.ListText}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text> </Text>
                </Item>

                <Item thumb={phoneUrl()}>
                    <Text style={OpportunityDetailStyles.ListLabel}>Call Customer (Click)   :
                        <Text style={OpportunityDetailStyles.ListText}> 507 979 9369</Text> </Text>
                </Item>
            </List>



            <Flex>

                <Flex.Item style={OpportunityDetailStyles.ButtonFlex}>
                    <Pressable
                        style={OpportunityDetailStyles.PressableBlue}
                        onPress={() => navigation.navigate('AddVisit')} >
                        <Text style={OpportunityDetailStyles.PressableText}>
                        Add Phone Call</Text>
                    </Pressable>
                </Flex.Item>

                <Flex.Item style={OpportunityDetailStyles.ButtonFlex}>
                    <Pressable
                        style={OpportunityDetailStyles.PressableYellow}
                        onPress={() => navigation.navigate('AddPhoneCall')} >
                        <Text style={OpportunityDetailStyles.PressableText}>
                        Add Visit</Text>
                    </Pressable>
                </Flex.Item>
            </Flex>

            <Flex>
                <Flex.Item style={OpportunityDetailStyles.ButtonFlex}>
                <Pressable
                        style={OpportunityDetailStyles.PressableRed}
                        onPress={() => navigation.navigate('AddPhoneCall')} >
                        <Text style={OpportunityDetailStyles.PressableText}>
                        Extend Offer</Text>
                    </Pressable>
                </Flex.Item>
                <Flex.Item style={OpportunityDetailStyles.ButtonFlex}>
                    <Pressable
                        style={OpportunityDetailStyles.PressableGreen}
                        onPress={() => navigation.navigate('AddPhoneCall')} >
                        <Text style={OpportunityDetailStyles.PressableText}>
                        Convert t Order</Text>
                    </Pressable>
                </Flex.Item>
            </Flex>


        </View>
    );
}

export default OpportunityDetail;