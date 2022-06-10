import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

// closed Opportunity outer content
export const opportunityListItem = StyleSheet.create({
    marginTop: 7
});


// closed Opportunity outer content
export const ListTitleView = StyleSheet.create({
    flexDirection: 'row'
});

export const ListTitleIcon = StyleSheet.create({
    height: 40,
    width: 40,
    marginRight: 15
});

export const ListTitleText = StyleSheet.create({
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    fontSize: 18
});

export const cardItem = StyleSheet.create({
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    fontSize: 18
});

export const cardOuterView = StyleSheet.create({
    flexDirection: 'row',
    width: width - 25,
    height: height / 7,
    borderWidth: 2,
    borderColor: '#1169b4',
    backgroundColor: '#1169b4',
    borderRadius: 13,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
});

export const cardOuterLeftBorderView = StyleSheet.create({
    backgroundColor: '#fafafa',
    width: width / 5,
    height: height / 7,
    marginTop: -2,
    marginLeft: -2,
    borderBottomLeftRadius: 13,
    borderTopLeftRadius: 13,
    borderWidth: 2,
    borderColor: '#0f80c0'
});

export const cardImage = StyleSheet.create({
    marginTop: '20%',
    marginLeft: 10,
    height: 60,
    width: 60,
});


export const cardTextView = StyleSheet.create({
    padding: 10, color: 'white',justifyContent: 'space-between',
});

export const cardText = StyleSheet.create({
    fontSize: 13, fontWeight: 'bold', color: 'white',width:2*width/3,paddingTop:10 
});

export const cardTextFlexItem = StyleSheet.create({
    fontSize: 13, fontWeight: 'bold', color: 'white',width:width/3 
});

export const cardStatusText = StyleSheet.create({
    fontSize: 11, fontWeight: 'bold', color: '#0f80c0',
    paddingLeft:2 ,paddingTop:'7%'
});


export const CardWingBlank = StyleSheet.create({
    width: '97%',paddingTop:'1%' 
});

export const CardFlexItem = StyleSheet.create({
    width: '35%' 
});