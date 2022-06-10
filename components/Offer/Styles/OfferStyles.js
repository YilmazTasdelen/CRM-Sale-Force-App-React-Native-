import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

// closed opportunities gauge chart pie chart styless
export const ListItemMargined = StyleSheet.create({
    marginTop: 7
});

export const ListItemCardView = StyleSheet.create({
    flexDirection: 'row',
    width: width - 25,
    height: height / 6,
    borderWidth: 0,
    borderColor: '#40b7ad',
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
});

export const ListItemCardContent = StyleSheet.create({
    backgroundColor: 'white',
    width: width / 4,
    height: (height / 6),
    marginTop: 0,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    borderRightWidth: 1,
    borderRightColor: '#f2f3f7',
    borderLeftWidth: 10,
    borderLeftColor: '#e6c67a'
});

export const ListItemCardIcon = StyleSheet.create({
    marginTop: 10,
    marginLeft: 20,
    height: 60,
    width: 60,
});

export const ListItemCardLiner = StyleSheet.create({
    width: '80%',
    marginLeft: '10%',
    marginTop: 5,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
});

export const ListItemCardStatusText = StyleSheet.create({
    fontSize: 11, color: '#e6c67a', textAlign: 'center'
});

export const ListItemCardCoutomerTextView = StyleSheet.create({
    padding: 10, color: '#e6c67a', marginTop: '2%'
});

export const ListItemCardCustomerText = StyleSheet.create({
    fontSize: 13, fontWeight: 'bold', color: 'black', width: 2 * width / 3
});

export const ListItemCardline = StyleSheet.create({
    width: '90%',
    marginLeft: '3%',
    marginTop: 5,
    borderBottomColor: '#f2f3f7',
    borderBottomWidth: 1,
});

export const ListItemCardResultText = StyleSheet.create({
    fontSize: 13,
    fontWeight: 'bold',
    color: '#878686',
    width: 2 * width / 3
});

export const offerFormDropdown = StyleSheet.create({
    width: width - 10, margin: 5
});

export const offerFormDropdownContainer = StyleSheet.create({
    width: width - 10, margin: 5
});


export const offerFormTextInput = StyleSheet.create({
    height: 50,
    width: (width - 10),
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    margin: 5,
    color: 'black'
});

export const offerFormPressable = StyleSheet.create({
    width: width - 20, marginLeft: 10, marginRight: 10, marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#0558b4',
});
export const offerFormText = StyleSheet.create({
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
});