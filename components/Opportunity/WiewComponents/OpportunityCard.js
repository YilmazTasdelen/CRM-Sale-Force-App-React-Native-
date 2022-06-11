import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { List, WhiteSpace, Flex, WingBlank } from '@ant-design/react-native';
import * as OpportunityStyles from './../Styles/OpportunityStyles';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const Item = List.Item

function OpportunityCard(props) {
    return (
        <Item style={OpportunityStyles.cardItem}>
            <View style={OpportunityStyles.cardOuterView}>
                <View style={OpportunityStyles.cardOuterLeftBorderView}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('OpportunityDetail')}
                    >
                        <Image
                            source={require('../../../files/opticon.png')}
                            style={OpportunityStyles.cardImage} />

                    </TouchableOpacity >
                    <Text style={OpportunityStyles.cardStatusText}>
                        {props.text}
                    </Text>
                </View>
                <View style={OpportunityStyles.cardTextView}>
                    
                    <Text style={OpportunityStyles.cardText}>
                        {props.customer}
                    </Text>
                   
                    <WingBlank style={OpportunityStyles.CardWingBlank}>
                        <Flex>
                            <Flex.Item style={OpportunityStyles.CardFlexItem}>
                                <Text style={OpportunityStyles.cardTextFlexItem}>Device Count :
                                    {props.deviceCount}
                                </Text>
                            </Flex.Item>
                            <Flex.Item style={OpportunityStyles.CardFlexItem}>
                                <Text style={OpportunityStyles.cardTextFlexItem}>City :
                                    {props.city}
                                </Text>
                            </Flex.Item>
                        </Flex>
                    </WingBlank>
                </View>
            </View>
        </Item>
    );
}

export default OpportunityCard;