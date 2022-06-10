import React, { useState } from "react";
import * as OpportunityDetailStyles from '../Styles/OppoortunityDetailStyles';
import { Image, Dimensions } from 'react-native';

const useOpportunityDetail = () => {
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height

    const thumbUrl = () => { return <Image source={require('../../../files/tick.jpg')} style={OpportunityDetailStyles.HeaderIcon} /> };
    const phoneUrl = () => { return <Image source={require('../../../files/phoneIcon.png')} style={OpportunityDetailStyles.HeaderIcon} /> };


    return {
        width,
        height,
        thumbUrl,
        phoneUrl,
    }
};

export default useOpportunityDetail;