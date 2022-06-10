
import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

// closed opportunities gauge chart pie chart styless
export const chartStyles = StyleSheet.create({
    container: { alignItems: 'center', justifyContent: 'center', height: 1050 },
    gauge: {
        position: 'absolute',
        width: 100,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 24,
    },
});

// closed Opportunity outer content
export const OuterContent = StyleSheet.create({
    backgroundColor: 'white'
});

// closed Opportunity 
export const gaugeRadius = 80;

// closed Opportunity pie chart sections
export const gaugeSections = [
    {
        percentage: 10,
        color: '#C70039',
    },
    {
        percentage: 50,
        color: '#44CD40',
    },
    {
        percentage: 10,
        color: '#404FCD',
    },
    {
        percentage: 30,
        color: '#EBD22F',
    },
];

// closed Opportunity title afet pie 
export const titleAfterPieChart = StyleSheet.create({
    fontSize: 25, color: '#0558b4', textAlign: 'center'
});


//closed opportunity card
export const cardContent = () => {

    return StyleSheet.create({
        flexDirection: 'row', width: width - 25, height: height / 7, borderWidth: 2, borderColor: 'white', backgroundColor: 'white', borderRadius: 13,
        shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 5, marginLeft: 12
    });
};

// card styles outer view 
//closed opportunity card
export const ClosedOpportunityCard = (color) => {

    return StyleSheet.create({
        backgroundColor: color,
        width: '7%',
        height: height / 7,
        marginTop: -2,
        marginLeft: -2,
        borderBottomLeftRadius: 13,
        borderTopLeftRadius: 13,
        borderWidth: 2,
        borderColor: color
    });
};

// card styles outer view
//closed opportunity card
export const borderIcon = () => {
    return StyleSheet.create({
        marginTop: 30,
        marginLeft: 2,
        height: 50,
        width: 20,

    });
};

//closed opportunity card
export const cardTextView = StyleSheet.create({
    padding: 10, backgroundColor: 'white', width: '90%',
});
//closed opportunity card
export const cardTitle = (color) => {
   return StyleSheet.create({
        color: color,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 17
    });
}
//closed opportunity card
export const cardStatics = (color) => {
    return StyleSheet.create({
        color: color,
        fontSize: 27,
        fontWeight: 'bold',
        textAlign: 'center'
    });
}
//closed opportunity card
export const cardTouchable = StyleSheet.create({
    paddingTop: 5
});

//Open Oppurtunity gauge 
export const openOppurtunityGaugeChartContainer = StyleSheet.create({
     alignItems: 'center', justifyContent: 'center', height: 1050 
});

//Open Oppurtunity gauge 
export const openOppurtunityChartGauge = StyleSheet.create({
        position: 'absolute',
        width: 100,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
});

//Open Oppurtunity gauge 
export const openOppurtunityChartGaugeText = StyleSheet.create({
    backgroundColor: 'transparent',
    color: '#0558b4',
    fontSize: 24,
});

//Open Oppurtunity gauge 
export const openOppurtunityChartGaugePerc = (perc) =>{
    return [
        {
            percentage: perc,
            color: '#0558b4',
        },]
};

//Open Oppurtunity gauge padding
export const openOppurtunityChartPadding = StyleSheet.create({
   paddingTop:10,
});

//Open Oppurtunity 
export const openOppurtunityOuterView = StyleSheet.create({
     backgroundColor: 'white', height: height,paddingTop:10
     });
 
//Open Oppurtunity 
export const openOppurtunityGaugeView = StyleSheet.create({
    width: width, alignItems: 'center'
    });

//Open Oppurtunity 
export const openOppurtunityTitle = StyleSheet.create({
    fontSize: 25, color: '#0558b4', textAlign: 'center'
    });



