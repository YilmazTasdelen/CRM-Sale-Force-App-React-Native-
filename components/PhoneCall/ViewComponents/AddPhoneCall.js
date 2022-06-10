import * as React from 'react';
import { useState } from "react";
import { View, Text, Image, ScrollView, Dimensions, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { List, Steps, } from '@ant-design/react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as PhoneCallStyles from '../Styles/PhoneCallStyles';
import usePhoneCall from '../HookComponents/usePhoneCall';

const Step = Steps.Step
const Item = List.Item
const Brief = Item.Brief


function AddPhoneCall({ navigation }) {

    const { 
        createDate,
        setcreateDate,
        isDatePickerVisible,
        setDatePickerVisibility,
        direction,
        setDirection,
        CreateDateOnChange,
        showDatePicker,
        hideDatePicker,
        handleConfirm,
        onDatePicker,
        thumbUrl,
        phoneUrl} = usePhoneCall();
   
    return (
        <ScrollView style={PhoneCallStyles.ScrollViewContainer}>
            <List renderHeader={'Yeni Telefon Görüşmesi'}>
                <Item style={{ marginTop: 7 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity >
                            <Image source={require('../../../files/offerListIcon.png')}
                                style={PhoneCallStyles.HeaderIcon} />
                        </TouchableOpacity>
                        <Text style={PhoneCallStyles.HeaderText}>Genel Bilgiler</Text>
                    </View>
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={PhoneCallStyles.ListLabel}>Oluşturma Tarihi:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={PhoneCallStyles.ListInput}
                            //onChangeText={onChangeText}
                            value="" />
                        <TouchableOpacity onPress={onDatePicker}>
                            <Image
                                source={require('../../../files/calendarIcon.jpeg')}
                                style={PhoneCallStyles.calendarIcon} />
                        </TouchableOpacity>
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={PhoneCallStyles.ListLabel}>Oluşturma Tarihi:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={PhoneCallStyles.ListInput}
                            //onChangeText={onChangeText}
                            value=""
                        />
                        <TouchableOpacity onPress={onDatePicker}>
                            <Image source={require('../../../files/calendarIcon.jpeg')}
                                style={PhoneCallStyles.calendarIcon} />
                        </TouchableOpacity>
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={PhoneCallStyles.ListLabel}>Yön:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={PhoneCallStyles.ListInput}
                            //onChangeText={onChangeText}
                            value={direction}
                        />
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={PhoneCallStyles.ListLabel}>Aranan Text:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={PhoneCallStyles.ListInput}
                            //onChangeText={onChangeText}
                            value={'--'}
                        />
                    </View>
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={PhoneCallStyles.ListLabel}>Açıklama:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            multiline
                            numberOfLines={2}
                            style={PhoneCallStyles.TextArea}
                            //onChangeText={onChangeText}
                            value={''}
                        />
                    </View>
                </Item>

                <Item style={{ marginTop: 7 }}>
                    <View style={{ flexDirection: 'row' }}>

                        <TouchableOpacity >
                            <Image source={require('../../../files/offerListIcon.png')}
                                style={PhoneCallStyles.HeaderIcon} />
                        </TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 13 }}>Müşteri Bilgileri</Text>
                    </View>
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={PhoneCallStyles.ListLabel}>İlgili Kişi:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={PhoneCallStyles.ListInput}
                            //onChangeText={onChangeText}
                            value={'--'}
                        />
                    </View>
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={PhoneCallStyles.ListLabel}>İlgili Kişi Email:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={PhoneCallStyles.ListInput}
                            //onChangeText={onChangeText}
                            value={'--'}
                        />
                    </View>
                </Item>

                <Item thumb={phoneUrl()}>
                    <Text style={PhoneCallStyles.ListLabel}>İlgili Kişi Telefon:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={PhoneCallStyles.ListInput}
                            //onChangeText={onChangeText}
                            value={'--'}
                        />
                    </View>
                </Item>

            </List>
            <Pressable
                style={PhoneCallStyles.SubmitButton}
            // onPress={onPress}
            >
                <Text style={PhoneCallStyles.SubmitButtonText}>  Telefon Görüşmesini Ekle</Text>
            </Pressable>

        </ScrollView>
    );
}

export default AddPhoneCall;