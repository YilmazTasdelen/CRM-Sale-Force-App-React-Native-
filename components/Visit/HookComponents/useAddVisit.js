import React, { useState } from "react";
import * as VisitStyles from '../Styles/VisitStyles';
import { Image, Dimensions } from 'react-native';

const useAddVisit = () => {
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height

    const tickIcon = () => { return <Image source={require('../../../files/tick.jpg')} style={VisitStyles.HeaderIcon} /> };
    const phoneIcon = () => { return <Image source={require('../../../files/phoneIcon.png')} style={VisitStyles.HeaderIcon} /> };
    const headerIcon = () => { return <Image source={require('../../../files/offerListIcon.png')} style={VisitStyles.HeaderIcon} /> };

    const [createDate, setcreateDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [direction, setDirection] = useState("Giden");

    function CreateDateOnChange(activeSections) {
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
        width,
        height,
        tickIcon,
        phoneIcon,
        headerIcon,
        createDate,
        setcreateDate,
        isDatePickerVisible,
        setDatePickerVisibility,
        direction,
        setDirection,
        CreateDateOnChange,
        showDatePicker,
        handleConfirm,
        onDatePicker,
        hideDatePicker
    }
};

export default useAddVisit;