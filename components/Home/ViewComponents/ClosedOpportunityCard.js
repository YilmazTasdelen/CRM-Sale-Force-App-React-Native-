import * as React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, } from 'react-native';
import * as HomeStyles from './../Sytles/HomeStyles';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

function ClosedOpportunityCard(props) {

    return (

        <TouchableOpacity 
        style={HomeStyles.cardTouchable} 
        onPress={() => props.navigation.navigate('Opportunity')}>
            <View style={HomeStyles.cardContent()}>
                <View style={HomeStyles.ClosedOpportunityCard(props.color)}>
                    <Image
                        source={require('../../../files/3Dots.png')}
                        style={HomeStyles.borderIcon()} />
                </View>
                <View style={HomeStyles.cardTextView}>
                    <Text style={HomeStyles.cardTitle(props.color)}>
                        {props.title}
                    </Text>
                    <Text style={HomeStyles.cardStatics(props.color)}>
                        {props.text}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ClosedOpportunityCard;