import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

// closed opportunities gauge chart pie chart styless
export const ScrollViewContainer = StyleSheet.create({
    backgroundColor: '#fafafa'
});

export const HeaderIcon = StyleSheet.create({
    height: 22,
    width: 22,
    marginRight: 15
});

export const HeaderText = StyleSheet.create({
    fontWeight: 'bold', color: 'black', fontSize: 13
});
export const ListLabel = StyleSheet.create({
    fontSize: 12, fontWeight: 'bold', color: 'black', marginBottom: 5
});

export const ListInput = StyleSheet.create({
    height: 30,
    width: width / 2 + width / 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingTop: 5,
    textAlign: 'center',
    padding: 2
});

export const calendarIcon = StyleSheet.create({
    height: 30,
    width: 30,
    marginLeft: width / 20
});

export const TextArea = StyleSheet.create({
    width: width / 2 + width / 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingTop: 5,
    color: 'black',
    padding: 2
});

export const SubmitButton = StyleSheet.create({
    width: width - 20, 
    marginLeft: 10, 
    marginRight: 10, 
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#5dc070',
});

export const SubmitButtonText = StyleSheet.create({
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
});