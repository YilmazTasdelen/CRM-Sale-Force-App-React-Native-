import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

// closed opportunities gauge chart pie chart styless
export const container = StyleSheet.create({
    backgroundColor: '#ffffff', height: height
});

export const HeaderImage = StyleSheet.create({
    width: 140, height: 140,
    resizeMode: "contain",
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: (height / 8),
});

export const HeaderText = StyleSheet.create({
    color: '#0558b4', fontSize: 20, fontWeight: 'bold', marginLeft: width / 3
});

export const InputText = StyleSheet.create({
    color: '#0558b4',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 125,
});
export const InputTextPassword = StyleSheet.create({
    color: '#0558b4',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 25,
});

export const TextInput = StyleSheet.create({
    width: width - 40,
    marginLeft: 20,
    marginRight: 10,
    backgroundColor: '#e2e5ef',
    color: 'white',
    borderRadius: 22,
    borderColor: 'white',
    height: 45,
    shadowColor: '#0558b4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 12
});

export const LoginButton = StyleSheet.create({
    width: width - 40,
    marginLeft: 20,
    marginRight: 10,
    marginTop: 44,
    backgroundColor: '#0558b4',
    color: 'white',
    borderRadius: 22,
    height: 45,
    shadowColor: '#0558b4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 12
});


export const ForgetPasswordText = StyleSheet.create({
    color: '#0558b4',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 25,
    textAlign: 'center',
    textDecorationLine: 'underline'
});