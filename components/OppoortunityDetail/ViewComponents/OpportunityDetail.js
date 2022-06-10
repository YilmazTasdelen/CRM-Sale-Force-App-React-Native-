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
                                <Text style={OpportunityDetailStyles.HeaderTitle}>BİRLİK DİJİTAL YAY.ALC. TLKOM. HİZ. TUR. TAŞ. SAN. VE TİC. LTD. ŞTİ.</Text>
                                <Text style={OpportunityDetailStyles.HeaderTitle}>Durum : Kazanıldı</Text>
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


            <List renderHeader={'Fırsat Bilgileri'}>

                <Item thumb={thumbUrl()}>
                    <Text style={OpportunityDetailStyles.ListLabel}>Fırsat Kyanağı :
                        <Text style={OpportunityDetailStyles.ListText}>Bayii-portföyü</Text> </Text>
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={OpportunityDetailStyles.ListLabel}>Bayi Portföyü Cihaz Adeti :
                        <Text style={OpportunityDetailStyles.ListText}>1</Text> </Text>
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={OpportunityDetailStyles.ListLabel}>Müşteri Yöneticisi    :
                        <Text style={OpportunityDetailStyles.ListText}>Yılmaz Taşdelen</Text> </Text>
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={OpportunityDetailStyles.ListLabel}>Oluşturma Tarihi    :
                        <Text style={OpportunityDetailStyles.ListText}>3.6.202216:39</Text> </Text>
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={OpportunityDetailStyles.ListLabel}>Görüşme Tarihi Kontrol    :
                        <Text sstyle={OpportunityDetailStyles.ListText}>3.6.202216:39</Text> </Text>
                </Item>


                <Item thumb={thumbUrl()}>
                    <Flex>
                        <Flex.Item style={OpportunityDetailStyles.CityLabel}>
                            <Text style={OpportunityDetailStyles.CityText}>Şehir:{"\n"}
                                <Text style={OpportunityDetailStyles.CityValue}>İstanbul</Text></Text>
                        </Flex.Item>
                        <Flex.Item style={OpportunityDetailStyles.CityLabel}>
                            <Text style={OpportunityDetailStyles.CityText}>İlçe:{"\n"}
                                <Text style={OpportunityDetailStyles.CityValue}>Anadolu</Text></Text>
                        </Flex.Item>
                    </Flex>
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={OpportunityDetailStyles.ListLabel}>Açıklama   :
                        <Text style={OpportunityDetailStyles.ListText}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text> </Text>
                </Item>

                <Item thumb={phoneUrl()}>
                    <Text style={OpportunityDetailStyles.ListLabel}>Müşteri Ara   :
                        <Text style={OpportunityDetailStyles.ListText}> 507 979 9369</Text> </Text>
                </Item>
            </List>



            <Flex>

                <Flex.Item style={OpportunityDetailStyles.ButtonFlex}>
                    <Pressable
                        style={OpportunityDetailStyles.PressableBlue}
                        onPress={() => navigation.navigate('AddVisit')} >
                        <Text style={OpportunityDetailStyles.PressableText}>
                        Tel. Gör. Ekle</Text>
                    </Pressable>
                </Flex.Item>

                <Flex.Item style={OpportunityDetailStyles.ButtonFlex}>
                    <Pressable
                        style={OpportunityDetailStyles.PressableYellow}
                        onPress={() => navigation.navigate('AddPhoneCall')} >
                        <Text style={OpportunityDetailStyles.PressableText}>
                        Tel. Gör. Ekle</Text>
                    </Pressable>
                </Flex.Item>
            </Flex>

            <Flex>
                <Flex.Item style={OpportunityDetailStyles.ButtonFlex}>
                <Pressable
                        style={OpportunityDetailStyles.PressableRed}
                        onPress={() => navigation.navigate('AddPhoneCall')} >
                        <Text style={OpportunityDetailStyles.PressableText}>
                        Tel. Gör. Ekle</Text>
                    </Pressable>
                </Flex.Item>
                <Flex.Item style={OpportunityDetailStyles.ButtonFlex}>
                    <Pressable
                        style={OpportunityDetailStyles.PressableGreen}
                        onPress={() => navigation.navigate('AddPhoneCall')} >
                        <Text style={OpportunityDetailStyles.PressableText}>
                            Siparie Çevir</Text>
                    </Pressable>
                </Flex.Item>
            </Flex>


        </View>
    );
}

export default OpportunityDetail;