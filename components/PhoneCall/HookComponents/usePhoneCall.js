import React, { useState } from "react";
import { Image, } from 'react-native';
import * as PhoneCallStyles from '../Styles/PhoneCallStyles';

const usePhoneCall = () => {
    const thumbUrl = () => { return <Image source={require('../../../files/tick.jpg')} style={PhoneCallStyles.HeaderIcon} /> };
    const phoneUrl = () => { return <Image source={require('../../../files/phoneIcon.png')} style={PhoneCallStyles.HeaderIcon} /> };

    const [createDate, setcreateDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [direction, setDirection] = useState("Giden");

    const CreateDateOnChange = (activeSections) => {
        setcreateDate(activeSections)
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // console.warn("A date has been picked: ", date);
        setcreateDate(date);
        hideDatePicker();
    };

    const onDatePicker = () => {
        setDatePickerVisibility(true);
    };

    return {
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
        phoneUrl
    }
};

export default usePhoneCall;