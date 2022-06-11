import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

// closed opportunities gauge chart pie chart styless
export const HeaderOuterContainer = StyleSheet.create({
    width: 350,
    backgroundColor: '#11669c',
    width: width, height: height / 5
});

export const HeaderContainer = StyleSheet.create({
    width: width,
    backgroundColor: '#11669c',
});

export const headerStepsStyles = StyleSheet.create({
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 11,
    currentStepLabelColor: '#fe7013',
});

export const HeaderWinkBlank = StyleSheet.create({
    paddingTop: (height / 35) - 10,
});

export const HeaderTitle = StyleSheet.create({
    fontSize: 15, fontWeight: 'bold'
});

export const HeaderContainers = StyleSheet.create({
    width: width,
    backgroundColor: '#108ee9',
});

export const labels = ["potential", "Phone Call", "Meeting", "Inerview", "Offer", "Order"];

export const currentPosition = 3;


export const ListLabel = StyleSheet.create({
    fontWeight: 'bold', color: 'black'
});

export const ListText = StyleSheet.create({
    color: 'gray'
});

export const CityLabel = StyleSheet.create({
    paddingLeft: 2, paddingRight: 2, borderLeftWidth: 1,
});

export const CityText = StyleSheet.create({
    fontSize: 12, fontWeight: 'bold', color: 'black'
});

export const CityValue = StyleSheet.create({
    fontSize: 12, color: 'gray'
});

export const SubmitButton = StyleSheet.create({
    width: width/2 - 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 14,
    backgroundColor: 'rgb(16, 142, 233)',
    color: 'white'
});


export const PressableGreen = StyleSheet.create({
    width: width/2 - 10,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#f6c63e',
});

export const PressableYellow = StyleSheet.create({
    width: width/2 - 10,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2fb3a6',
});


export const PressableRed = StyleSheet.create({
    width: width/2 - 10,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#163b67',
});

export const PressableBlue = StyleSheet.create({
    width: width/2 - 10,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#11669c',
});

export const PressableText = StyleSheet.create({
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
});

export const HeaderIcon = StyleSheet.create({
    height: 22,
    width: 22,
    marginRight: 15
});


export const ButtonFlex = StyleSheet.create({
   width:'50%'
});