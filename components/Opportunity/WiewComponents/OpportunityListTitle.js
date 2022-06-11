import * as React from 'react';
import * as OpportunityStyles from './../Styles/OpportunityStyles';
import { List, } from '@ant-design/react-native';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Item = List.Item

function OpportunityListTitle({ navigation }) {
    return (
        <Item style={OpportunityStyles.opportunityListItem}>
            <View style={OpportunityStyles.ListTitleView}>
                <TouchableOpacity >
                    <Image source={require('../../../files/opportunityListTitleIcon.png')}
                        style={OpportunityStyles.ListTitleIcon} />
                </TouchableOpacity>
                <Text style={OpportunityStyles.ListTitleText}>Opportunities</Text>
            </View>
        </Item>
    );
}

export default OpportunityListTitle;