import * as React from 'react';
import { useState } from "react";
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { Accordion, List, Steps, Flex, } from '@ant-design/react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as VisitStyles from '../Styles/VisitStyles';
import useAddVisit from '../HookComponents/useAddVisit';

const Step = Steps.Step
const Item = List.Item
const Brief = Item.Brief





function AddVisit({ navigation }) {
    const {
        width, height, tickIcon, phoneIcon, headerIcon, createDate, setcreateDate,
        isDatePickerVisible, setDatePickerVisibility, direction, setDirection,
        CreateDateOnChange, showDatePicker, handleConfirm, onDatePicker, hideDatePicker } = useAddVisit();

    return (
        <ScrollView style={VisitStyles.ScrollView}>
            <List>
                <Item thumb={headerIcon()}>
                    <Text style={{ fontWeight: 'bold', color: 'black' }}>Yeni Görüşme</Text>
                </Item>

                <Item thumb={tickIcon()}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black', marginBottom: 5 }}>Görüşülen Kişi:</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            style={VisitStyles.RowInput}
                            //onChangeText={onChangeText}
                            value=""
                        />
                    </View>
                </Item>

                <Item thumb={tickIcon()}>
                    <Flex>
                        <Flex.Item style={VisitStyles.Flex}>
                            <Text style={VisitStyles.RowLabel}>Araç Sayısı:</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <TextInput
                                    style={VisitStyles.RowInputViwthFlex}
                                    //onChangeText={onChangeText}
                                    value=""
                                />
                            </View>
                        </Flex.Item>
                        <Flex.Item style={VisitStyles.Flex}>
                            <Text style={VisitStyles.RowLabel}>Satış Gerçekleşme Oranı:</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <TextInput
                                    style={VisitStyles.RowInputViwthFlex}
                                    //onChangeText={onChangeText}
                                    value=""
                                />
                            </View>
                        </Flex.Item>
                    </Flex>
                </Item>

                <Item thumb={tickIcon()}>
                    <Text style={VisitStyles.RowLabel}>Oluşturma Tarihi:</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            style={VisitStyles.RowInputViwthIcon}
                            //onChangeText={onChangeText}
                            value="" />
                        <TouchableOpacity onPress={onDatePicker}>
                            <Image source={require('../../../files/calendarIcon.jpeg')}
                                style={VisitStyles.CalendarIcon} />
                        </TouchableOpacity>
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </Item>

                <Item thumb={tickIcon()}>
                    <Text style={VisitStyles.RowLabel}>Başlama Tarihi:</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            style={VisitStyles.RowInputViwthIcon}
                            //onChangeText={onChangeText}
                            value="" />
                        <TouchableOpacity onPress={onDatePicker}>
                            <Image source={require('../../../files/calendarIcon.jpeg')}
                                style={VisitStyles.CalendarIcon} />
                        </TouchableOpacity>
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </Item>

                <Item thumb={tickIcon()}>
                    <Text style={VisitStyles.RowLabel}>Bitiş Tarihi:</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            style={VisitStyles.RowInputViwthIcon}
                            //onChangeText={onChangeText}
                            value="" />
                        <TouchableOpacity onPress={onDatePicker}>
                            <Image source={require('../../../files/calendarIcon.jpeg')}
                                style={VisitStyles.CalendarIcon} />
                        </TouchableOpacity>
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </Item>

                <Item thumb={phoneIcon()}>
                    <Text style={VisitStyles.RowLabel}>Görüşülen Kişi Telefon    :
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={VisitStyles.RowInput}
                            //onChangeText={onChangeText}
                            value=""
                        />
                    </View>
                </Item>

                <Item thumb={tickIcon()}>
                    <Text style={VisitStyles.RowLabel}>Sektör    :
                    </Text>
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            style={VisitStyles.RowInput}
                            //onChangeText={onChangeText}
                            value=""
                        />
                    </View>
                </Item>

                <Item thumb={tickIcon()}>
                    <Text style={VisitStyles.RowLabel}>Müşteri Gereksinimi:</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            multiline
                            numberOfLines={2}
                            style={VisitStyles.RowInputArea}
                            //onChangeText={onChangeText}
                            value={''}
                        />

                    </View>
                </Item>

                <Item thumb={tickIcon()}>
                    <Text style={VisitStyles.RowLabel}>Sunulan Çözüm:</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            multiline
                            numberOfLines={2}
                            style={VisitStyles.RowInputArea}
                            //onChangeText={onChangeText}
                            value={''}
                        />

                    </View>
                </Item>

                <Item thumb={tickIcon()}>
                    <Text style={VisitStyles.RowLabel}>Açıklama:</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            multiline
                            numberOfLines={2}
                            style={VisitStyles.RowInputArea}
                            //onChangeText={onChangeText}
                            value={''}
                        />

                    </View>
                </Item>

            </List>
            <Pressable
                style={VisitStyles.Pressable}
            // onPress={onPress}
            >
                <Text style={VisitStyles.PressableText}>  Görüşme Ekle (Konum Kaydet)</Text>
            </Pressable>
        </ScrollView>
    );
}

export default AddVisit;