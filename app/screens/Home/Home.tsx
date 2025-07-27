// screens/Home/Home.tsx
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeStackParamList } from '../../navigation/HomeStack';

type Props = NativeStackScreenProps<HomeStackParamList, 'HomeMain'>;

export default function Home({ navigation }: Props) {
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
                    <View style={styles.cards}>
                    <Icon name="list" style={styles.iconsize} />
                        <Text style={styles.textsize}>Shift Logger</Text>

                    </View>
                </Pressable>
                
                <Pressable onPress={() => navigation.navigate('Claim')}>
                <View style={styles.cards}>
                    <Icon name="car-sport" style={styles.iconsize} />
                      <Text style={styles.textsize}>Claim</Text>
                </View>
                </Pressable>

<               Pressable onPress={() => navigation.navigate('Notification')}>
                <View style={styles.cards}>
                    <Icon name="notifications" style={styles.iconsize} />
                    <Text style={styles.textsize}>Notifications </Text>
                </View>
                </Pressable>
                
                <Pressable onPress={() => navigation.navigate('Issue')}>
                <View style={styles.cards}>
                    <Icon name="help-circle" style={styles.iconsize} />
                    <Text style={styles.textsize}> Issue </Text>
                </View>

                </Pressable>
            </View>
        
        </>



    // <View style={styles.container}>
    //   <Button title="Go to Claim" onPress={() => navigation.navigate('Claim')} />
    //   <Button title="Go to Issue" onPress={() => navigation.navigate('Issue')} />
    //   <Button title="Go to Logger" onPress={() => navigation.navigate('Logger')} />
    //   <Button title="Go to Notification" onPress={() => navigation.navigate('Notification')} />
    // </View>
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
        shadowColor: '#005f6c', // blue shadow color
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
    },
    textsize: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#4682B4', // steel blue color 
    },
    iconsize: {
        fontSize: 40,
        color: '#89CFF0', // steel blue color
    }
  }   
);
