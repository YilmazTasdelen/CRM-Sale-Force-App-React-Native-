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
                    <Text style={{ fontWeight: 'bold', color: 'black' }}>New Visit</Text>
                </Item>

                <Item thumb={tickIcon()}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black', marginBottom: 5 }}>Customer:</Text>
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
                            <Text style={VisitStyles.RowLabel}>Product Count:</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <TextInput
                                    style={VisitStyles.RowInputViwthFlex}
                                    //onChangeText={onChangeText}
                                    value=""
                                />
                            </View>
                        </Flex.Item>
                        <Flex.Item style={VisitStyles.Flex}>
                            <Text style={VisitStyles.RowLabel}>Sale Order:</Text>
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
                    <Text style={VisitStyles.RowLabel}>Create Date:</Text>
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
                    <Text style={VisitStyles.RowLabel}>Start Date:</Text>
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
                    <Text style={VisitStyles.RowLabel}>Finish Date:</Text>
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
                    <Text style={VisitStyles.RowLabel}>Customer Phone    :
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
                    <Text style={VisitStyles.RowLabel}>Market Place    :
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
                    <Text style={VisitStyles.RowLabel}>Customer Need:</Text>
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
                    <Text style={VisitStyles.RowLabel}>Solution:</Text>
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
{/* 
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
                </Item> */}

            </List>
            <Pressable
                style={VisitStyles.Pressable}
            // onPress={onPress}
            >
                <Text style={VisitStyles.PressableText}>  Add Visit (Record Location)</Text>
            </Pressable>
        </ScrollView>
    );
}

export default AddVisit;