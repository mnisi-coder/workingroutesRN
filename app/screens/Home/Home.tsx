// screens/Home/Home.tsx
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeStackParamList } from '../../navigation/HomeStack';
import globalColors from '../../../assets/globalstyle'; // Import global colors

type Props = NativeStackScreenProps<HomeStackParamList, 'HomeMain'>;

export default function Home({ navigation }: Props) {

// global colors




  return (
<>
            <View style={styles.top}>
                <Image
                    source={require('../../../assets/images/back.png')}
                    style={{ width: '100%', height: '100%'}}
                />


            </View>

            <View style={styles.bottom}>

            
                <Pressable onPress={() => navigation.navigate('Logger')}>
                    <View style={[styles.cards, styles.loggershadow]}>
                    <Icon name="list" style={styles.logger} />
                        <Text style={styles.loggertextsize}>Shift Logger</Text>

                    </View>
                </Pressable>
                
                <Pressable onPress={() => navigation.navigate('Claim')}>
                <View style={[styles.cards, styles.claimshadow]}>
                    <Icon name="car-sport" style={styles.claim} />
                      <Text style={styles.claimtextsize}>Claim</Text>
                </View>
                </Pressable>

<               Pressable onPress={() => navigation.navigate('Notification')}>
                <View style={[styles.cards, styles.notifyshadow]}>
                    <Icon name="notifications" style={styles.notify} />
                    <Text style={styles.notifytextsize}>Notifications </Text>
                </View>
                </Pressable>
                
                <Pressable onPress={() => navigation.navigate('Issue')}>
                <View style={[styles.cards, styles.issueshadow]}>
                    <Icon name="help-circle" style={styles.issue} />
                    <Text style={styles.issuetextsize}> Issue </Text>
                </View>

                </Pressable>
            </View>
        
</>
  );
}

const styles = StyleSheet.create({

    
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  top:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF00',
    height: "80%", 
    width: '100%',
  },
bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: "20%", 
    maxHeight: 300, 
    width: '100%',
    padding: 20,
    backgroundColor: '#f2f3f4', 
  },
cards:{
        marginTop: 20,
        backgroundColor: '#ffff',
        height: 100,
        width: 150,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    logger: {
        fontSize: 40,
        color: globalColors.loggercolor, // steel blue color
    }, 
    loggertextsize: {
        fontSize: 10,
        fontWeight: 'bold',
        color: globalColors.loggercolor , // steel blue color 
    },   
    issue: {
        fontSize: 40,
        color: globalColors.Issuecolor, // blue color
    },
     issuetextsize: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#4682B4', 
    },    
    claim: {
        fontSize: 40,
        color: globalColors.claimcolor, // purple color
    }, 
     claimtextsize: {
        fontSize: 10,
        fontWeight: 'bold',
        color: globalColors.claimcolor, // purple color
    },   
    notify: {
        fontSize: 40,
        color: globalColors.notificationcolor, // yellow color
    },
     notifytextsize: {
        fontSize: 10,
        fontWeight: 'bold',
        color: globalColors.notificationcolor, // yellow color
    },

    // card shadows
    notifyshadow : {
        shadowColor: globalColors.notificationcolor, // yellow shadow color
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
    },
    claimshadow : {
        shadowColor: globalColors.claimcolor, // purple shadow color
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
    },
    issueshadow : {
        shadowColor: globalColors.Issuecolor, // blue shadow color
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
    },
    loggershadow : {
        shadowColor: globalColors.loggercolor, // blue shadow color
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
    }


  }   
);
