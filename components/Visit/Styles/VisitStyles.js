import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

// closed opportunities gauge chart pie chart styless
export const ScrollView = StyleSheet.create({
    backgroundColor: '#fafafa',
    // height: height 
});

export const HeaderIcon = StyleSheet.create({
    height: 22,
    width: 22,
    marginRight: 15
});

export const RowLabel = StyleSheet.create({
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5
});

export const RowInput = StyleSheet.create({
    height: 30,
    width: '97%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingTop: 5,
});

export const RowInputArea = StyleSheet.create({
    height: 40,
    width: '97%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingTop: 5,
});
export const RowInputViwthIcon = StyleSheet.create({
    height: 30,
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingTop: 5,
});

export const CalendarIcon = StyleSheet.create({
    height: 30,
    width: 30,
    marginLeft: width / 20
});

export const Flex = StyleSheet.create({
    paddingLeft: 2, paddingRight: 2
});

export const RowInputViwthFlex = StyleSheet.create({
    height: 30,
    width: '94%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingTop: 5,
});

export const Pressable = StyleSheet.create({
    width: width - 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#5dc070',
});

export const PressableText = StyleSheet.create({
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
});