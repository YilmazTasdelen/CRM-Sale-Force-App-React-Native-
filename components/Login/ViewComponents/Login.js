
import React from 'react';
import { Text, Image, View, Dimensions, TextInput } from 'react-native';
import { Button, WhiteSpace } from '@ant-design/react-native';
import * as LoginStyles from '../Styles/LoginStyles';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

function Login({ navigation }) {

    return (
        <View style={LoginStyles.container}>

            <Image
                style={LoginStyles.HeaderImage}
                source={require('../../../files/loginLogo3.png')}
            />
            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>
            <Text style={LoginStyles.HeaderText}>Wellcome..</Text>





            <Text style={LoginStyles.InputText}> UserName : </Text>
            <TextInput
                style={LoginStyles.TextInput}
                //onChangeText={onChangeText}
                value=""
            />
            <Text style={LoginStyles.InputTextPassword}> Password : </Text>
            <TextInput style={LoginStyles.TextInput}
                //onChangeText={onChangeText}
                value="" />

            <Button
                style={LoginStyles.LoginButton}
                title="sadsad"
                type="primary"
                onPress={() => navigation.navigate('Home')}
            >Login</Button>
            <Text style={LoginStyles.ForgetPasswordText}>Forgot Password</Text>
        </View>
    );
}

export default Login;